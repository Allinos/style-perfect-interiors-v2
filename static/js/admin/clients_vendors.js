const method = new DataCall()

function displayCtn(e) {
    document.querySelector('.ClientCtn').classList.add('hide');
    document.querySelector('.ClientCtn').classList.remove('block');
    document.querySelector('.VendorCtn').classList.add('hide');
    document.querySelector('.VendorCtn').classList.remove('block');
    document.querySelector(e).classList.add('block');
    document.querySelector('#cumon').innerText = (e == '.VendorCtn' ? 'Vendors' : 'Clients')
    document.querySelector('#cv-head').innerText = (e == '.VendorCtn' ? 'Vendors' : 'Clients')

}
function openAddClientsVendors(params) {
    document.getElementsByClassName('main')[0].classList.add('flow');
    document.querySelector('.addclient').classList.add('block');
}
function closeDropdown(e) {
    console.log(e)
    document.querySelector(e).classList.remove(`block`);
    document.getElementsByClassName('main')[0].classList.remove('flow');
}

function renderPerClient_vendorData(targetBox, idArr, dataObj, tagType) {
    const targetContainer = document.getElementById(targetBox)
    idArr.forEach((id) => {
        Object.keys(dataObj).forEach((elem) => {
            if (elem == id) {
                tagType == 'input' ? targetContainer.querySelector(`#${id}`).value = dataObj[id] : targetContainer.querySelector(`#${id}`).innerHTML = dataObj[id];
            }
        })
    })
}

async function openUpdateClientsVendors(e,type) {
    let dataType = type=='vendor'?'getOneVendorToEdit':'getOneClientToEdit';
    console.log(`admin/user-manager/${type}s/${dataType}/${e.dataset.id}`);
    const editData = await method.GET_POST(`admin/user-manager/${type}s/${dataType}/${e.dataset.id}`, 'GET')
    renderPerClient_vendorData('client-update-form', ['deal_name', 'contact', 'contact2', 'email', 'city', 'oth_details'], editData.data[0], 'input')
    document.querySelector('#update-client-btn').dataset.clid = editData.data[0].id;
    // let mainCtn = e.parentElement.parentElement.parentElement;
    // let inputCtn = document.querySelector('.updateclient')
    // inputCtn.children[0].dataset.id = mainCtn.querySelector('.ref').children[0].innerText
    // inputCtn.querySelector('#category').value = mainCtn.dataset.type;
    // inputCtn.querySelector('#name').value = (mainCtn.querySelector('.name').children[0].innerText).trim();
    // inputCtn.querySelector('#contact').value = (mainCtn.querySelector('.contact').children[0].innerText).trim();
    // inputCtn.querySelector('#alt_contact').value = (mainCtn.querySelector('.alt_contact').innerText).trim();
    // inputCtn.querySelector('#location').value = (mainCtn.querySelector('.location').children[0].innerText).trim();
    // inputCtn.querySelector('#details').value = (mainCtn.querySelector('.details').children[0].innerText).trim();
    // inputCtn.querySelector('#email').value = (mainCtn.querySelector('.email').innerText).trim();
    document.getElementsByClassName('main')[0].classList.add('flow');
    document.querySelector('.updateclient').classList.add('block');
}


async function AddClientsVendors(e) {
    let inputCtn = e.parentElement.parentElement;
    let cat = inputCtn.querySelector('#category').value;
    let name = inputCtn.querySelector('#name').value;
    let contact = inputCtn.querySelector('#contact').value;
    let alt_contact = inputCtn.querySelector('#alt_contact').value;
    let location = inputCtn.querySelector('#location').value;
    let details = inputCtn.querySelector('#details').value;
    let email = inputCtn.querySelector('#email').value;
    data = { name: name, contact: contact, alt_contact: alt_contact, location: location, details: details, email: email };
    ReqHandler.POST(window.location.origin + `/admin/user-manager/${cat}s/create`, data)
        .then((res) => {
            if (res.status) {
                AlertNotify('Success', res.msg, 'success');
                name = ''; contact = ''; alt_contact = ''; location = ''; details = ''; email = '';
            }
        })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error')
            console.log('Error(fn-AddClientsVendors):' + err);
        })

}
function UpdateClientsVendors(e) {
    let inputCtn = e.parentElement.parentElement;
    let id = e.dataset.clid;
    // let cat = inputCtn.querySelector('#category').value;
    let name = inputCtn.querySelector('#deal_name').value;
    let contact = inputCtn.querySelector('#contact').value;
    let alt_contact = inputCtn.querySelector('#contact2').value;
    let location = inputCtn.querySelector('#city').value;
    let details = inputCtn.querySelector('#oth_details').value;
    let email = inputCtn.querySelector('#email').value;
    data = { name: name, contact: contact, alt_contact: alt_contact, location: location, details: details, email: email };
    ReqHandler.PUT(window.location.origin + `/admin/user-manager/clients/update/` + id, data)
        .then((res) => {
            if (res.status) {
                AlertNotify('Success', res.msg, 'success');
                name = ''; contact = ''; alt_contact = ''; location = ''; details = ''; email = '';
            }
        })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error')
            console.log('Error(fn-AddClientsVendors):' + err);
        })
}

function DeleteClientsVendors(e, id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (pers) => {
        if (pers.isConfirmed) {
            let type = e.parentElement.parentElement.parentElement.dataset.type;
            ReqHandler.DEL(window.location.origin + `/admin/user-manager/${type}s/delete/` + id)
                .then((res) => {
                    if (res) {
                        AlertNotify('Success', res.msg, 'success');
                        (e.parentElement.parentElement.parentElement).remove();
                    }
                })
                .catch(err => {
                    AlertNotify('Success', 'Error While adding ', 'error')
                    console.log('Error(fn-AddClientsVendors):' + err);
                })
        }
    })

}


function displayTable(event) {
    document.querySelector('.client-collection-table').classList.add('hide');
    document.querySelector('.client-collection-table').classList.remove('table');
    document.querySelector('.client-expenses-table').classList.add('hide');
    document.querySelector('.client-expenses-table').classList.remove('table');
    document.querySelector(event).classList.add('table');
}
function displayTableVendor(event) {
    document.querySelector('.vendor-payment-table').classList.add('hide');
    document.querySelector('.vendor-payment-table').classList.remove('table');
    document.querySelector('.vendor-supply-table').classList.add('hide');
    document.querySelector('.vendor-supply-table').classList.remove('table');
    document.querySelector(event).classList.add('table');
}

function renderClientTablesData(dataArr, tableId, type, totalId) {
    const tableBody = document.getElementById(tableId)
    tableBody.innerHTML = ""
    dataArr.forEach((fin_ex) => {
        const fin_ex_tr = type == 'collection' ? `<tr>
        <td>1</td>
        <td class="text">${fin_ex.dateofpay ? fin_ex.dateofpay : 'N/A'}</td>
        <td class="text">&#8377; <span>${fin_ex.amount_got ? fin_ex.amount_got : 'N/A'}</span></td>
        <td class="text">${fin_ex.modeofpay ? fin_ex.modeofpay : 'N/A'}</td>
        <td class="text">${fin_ex.remark ? fin_ex.remark : 'N/A'}</td>
        </tr>` : `<tr>
                <td>${fin_ex.id ? fin_ex.id : 'N/A'}</td>
                <td class="text">${fin_ex.date ? fin_ex.date : 'N/A'}</td>
                <td class="text">&#8377; <span>${fin_ex.amount ? fin_ex.amount : 'N/A'}</span></td>
                <td class="text">${fin_ex.md_type ? fin_ex.md_type : 'N/A'}</td>
                <td class="text">${fin_ex.remark ? fin_ex.remark : 'N/A'}</td>
                <td class="text">${fin_ex.project_id ? fin_ex.project_id : 'N/A'}</td>
                </tr>`
        tableBody.innerHTML += fin_ex_tr;
    })

    let total = dataArr.reduce((curr, el)=>{ 
       if (type == 'collection') {
        if (el.amount_got) { return curr + parseInt(el.amount_got);} 
       } else {
        if (el.amount) { return curr + parseInt(el.amount);} 
       }
    }, 0)
    document.getElementById(totalId).innerHTML = total

}
function displayVendorRecords(e) {
    ReqHandler.GET(window.location.origin + `/admin/user-manager/vendors/getOne/` + e).then((res) => {
        if (res) {
            document.getElementById('vendor-name').innerHTML = res.data[0][0].name
            renderPerClient_vendorData('per-vendor-details', ['reference_no', 'contact', 'email', 'total_price', 'city', 'oth_details'], res.data[0][0])
            const suppliesTable = document.getElementById('vendor-supplies')
            const paymentsTable = document.getElementById('vendor-payments')
            let [suppliesSum, paymentsSum] = [0, 0]
            if (res.data[2].length > 0) {
                suppliesTable.innerHTML = "";
                res.data[1]?.forEach((e) => {
                    suppliesSum += e.total_amount;
                    const e_tr = `<tr><td>${e.id}</td>
                <td class="text">${e.item_name ? e.item_name : 'N/A'}</td>
                <td class="text">&#8377; <span>${e.total_amount ? e.total_amount : 'N/A'}</span></td>
                <td class="text">${e.modeofpay ? e.modeofpay : 'N/A'}</td>
                <td class="text">${e.date ? e.date : 'N/A'}</td>
                <td class="text">${e.gst_status ? e.gst_status : 'N/A'}</td></tr>`
                    suppliesTable.innerHTML += e_tr
                })
                document.querySelector('.suppliesSum').innerText = suppliesSum;
            }
            if (res.data[2].length > 0) {
                paymentsTable.innerHTML = "";
                res.data[2].forEach((e) => {
                    paymentsSum += e.amount;
                    const e_tr = `<tr><td>${e.id}</td>
                    <td class="text">${e.title ? e.title : 'N/A'}</td>
                    <td class="text">&#8377; <span>${e.amount ? e.amount : 'N/A'}</span></td>
                    <td class="text">${e.modeofpay ? e.modeofpay : 'N/A'}</td>
                    <td class="text">${e.dateofpay ? e.dateofpay : 'N/A'}</td></tr>`
                    paymentsTable.innerHTML += e_tr;
                })
                document.querySelector('.paymentsSum').innerText = paymentsSum;

            }
        }
    })
}


async function displayClientRecords(dealid, target) {
    const reffId = target.parentNode.parentNode.querySelector('.ref').innerText
    const data = await method.GET_POST(`admin/user-manager/clients/getOne/${dealid}/${reffId}`, 'GET');
    document.getElementById('client-name').innerHTML = data.data[0][0].deal_name
    renderPerClient_vendorData('per-client-details', ['reference_no', 'contact', 'email', 'total_price', 'agreement_amount', 'city', 'oth_details'], data.data[0][0])
    renderClientTablesData(data.data[1], 'client-finance', 'collection', 'client-totalFin');
    renderClientTablesData(data.data[2], 'client-expense', null, 'client-totalExpense');
}


function openCpopup(event) {
    document.querySelector(`.c-popup`).classList.remove(`hide`)
    displayClientRecords(event.dataset.clientid, event);
}
function closeCpopup(event) {
    document.querySelector(`.c-popup`).classList.add(`hide`)
}

//vendor popup 
function openvendorPopup(e) {
    e.stopPropagation();
    document.getElementById('vendor-popup').classList.remove(`hide`)
    displayVendorRecords(e.target.dataset.vendorid)
}
function ClosevendorPopup(e) {
    document.getElementById('vendor-popup').classList.add(`hide`)
}