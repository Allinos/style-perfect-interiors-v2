const getFun = new DataCall()

async function AddPayment_toSupply(data, e) {
    e.preventDefault();
    const supplyId = (data.dataset).supplyid
    console.log(supplyId, data, e);
    const advanceData = new FormData(document.getElementById('advanced-form'));
    advanceData.append('supply_id', Number(supplyId));
    await getFun.GET_POST('admin/inventory/vendor/add-payment', 'POST', advanceData, 'form')
    document.querySelector(`.main-dropdown`).style.display = `none`;
}

(async function getAllpaymentById(e, o) {
    let dataArr = document.querySelectorAll('.accordion-content')
    for (const mainCtn of dataArr) {
        try {
            let res = await getFun.GET_POST('admin/inventory/vendor/getAllpayment/' + mainCtn.dataset.supplyid, 'GET')
            res.data.forEach(e => {
                mainCtn.querySelector('.adata').children[0].innerHTML += `
                <p>
        <span class="uppercase phead">Title</span>
        <span class="title">${e.title}</span>
    </p>
    <p>
        <span class="uppercase phead">Amount</span>
        <span class="amount">${e.amount}</span>
    </p>
    <p>
        <span class="uppercase phead">Mode</span>
        <span class="mode">${e.modeofpay}</span>
    </p>
    <p>
        <span class="uppercase phead">Date</span>
        <span class="date">${e.dateofpay}</span>
    </p>
    <div class="field">
        <button onclick="OpenUpdatePayment(this,${e.id})">Edit</button>
        <button onclick="deletePayments(this,${e.id})">Delete</button>
    </div>`});

        } catch (error) {
            console.error('Error fetching payment data:', error);
        }
    }
})()
function CloseModel(e) {
    document.querySelector(e).style.display = 'none'
}

async function OpenAddPayment(data) {
    document.getElementsByClassName('main')[0].classList.add('flow')
    const supplyId = data.supplyId;
    const maindropDown = document.querySelector(`.main-dropdown`);
    maindropDown.style.display = `block`;
    maindropDown.innerHTML = ""
    maindropDown.innerHTML = `
    <div class="finance-dropdown common_dropdown">
    <form id="advanced-form">
        <div class="flex">
            <p class="uppercase phead">Title</p>
            <input type="text" name="title" id="">
        </div>
        <div class="flex">
        <p class="uppercase phead">Amount</p>
        <input type="text" name="amount" id="">
    </div>
        <div class="flex">
            <p class="uppercase phead">Payment mode</p>
            <select name="mode" id="">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
            </select>
        </div>
        <div class="flex">
            <p class="uppercase phead">Date of payment</p>
            <input type="text" name="date" id="" placeholder="dd/mm/yyyy">
        </div>
        <div class = "drop-btn flex">
        <button type="button" class="uppercase" data-supplyid=${supplyId} onclick="AddPayment_toSupply(this, event)">Add</button>
        <button type = "reset" class = "uppercase" onclick="CloseModel('.main-dropdown')" >Cancel</button>
        </div>
        </form>
        </div>
        `;
}


async function OpenUpdatePayment(e, o) {
    document.getElementsByClassName('main')[0].classList.add('flow')
    let mainCtn = e.parentElement.parentElement;
    let title = mainCtn.querySelector('.title');
    let amount = mainCtn.querySelector('.amount');
    let date = mainCtn.querySelector('.date');
    let mode = mainCtn.querySelector('.mode');
    console.log(date);
    const maindropDown = document.querySelector(`.main-dropdown`);
    maindropDown.style.display = `block`;
    maindropDown.innerHTML = ""
    maindropDown.innerHTML = `<div class="finance-dropdown common_dropdown">
    <form id="advanced-form">
        <div class="flex">
            <p class="uppercase phead">Title</p>
            <input type="text" name="title" value="${title.innerText}" id="title">
        </div>
        <div class="flex">
        <p class="uppercase phead">Amount</p>
        <input type="text" name="amount" value="${amount.innerText}" id="amount">
    </div>
        <div class="flex">
            <p class="uppercase phead">Payment mode</p>
            <select name="mode" id="mode" value="${mode.innerText}" >
                <option value="cash">Cash</option>
                <option value="online">Online</option>
            </select>
        </div>
        <div class="flex">
            <p class="uppercase phead">Date of payment</p>
            <input type="text" name="date" value="${date.innerText}" id="date" placeholder="dd/mm/yyyy">
        </div>
        <div class = "drop-btn flex">
        <button type="button" class="uppercase" data-supplyid=${o} onclick="UpdatePayments(this, event)">Update</button>
        <button type = "reset" class = "uppercase" onclick="CloseModel('.main-dropdown')" >Cancel</button>
        </div>
        </form>
        </div>
        `;
}



async function UpdatePayments(e, o) {
    let id = e.dataset.supplyid
    let mainCtn = e.parentElement.parentElement;
    let title = mainCtn.querySelector('#title').value;
    let amount = mainCtn.querySelector('#amount').value;
    let date = mainCtn.querySelector('#date').value;
    let mode = mainCtn.querySelector('#mode').value;
    let dataBody = { title: title, amount: amount, date: date, mode: mode }
    let res = await getFun.GET_POST('admin/inventory/vendor/update-payment/' + id, 'PUT', dataBody, 'form');
    if (res.status) { setTimeout(() => { location.reload() }, 1500); }
}

async function deletePayments(e, o) {
    let mainCtn = e.parentElement.parentElement;
    if (mainCtn.parentElement.children.length > 1) {
        let res = await getFun.DEL_UPD(`admin/inventory/vendor/delete-payment/${o}`, 'DELETE')
        if (res.status) { mainCtn.remove() }
    } else {
        getFun.GET_Notify('You Cann\'t Delete All Payments', 'Cann\'t Delete all payments . you can edit the last one', 'warning')
    }
}

function search() {
    var inpValue = document.getElementById('searchQuery').value.toLowerCase();
    var elmCtn = document.querySelectorAll('.accordion-content');
    elmCtn.forEach(function (e) {
        var contentText = e.textContent.toLowerCase();
        if (contentText.includes(inpValue)) {
            e.style.display = 'block';
        } else { e.style.display = 'none'; }
    });
}