 const method = new DataCall()



 function openVendorSupplyForm(type, e, target) {
    if (type == 'add') {
        document.getElementById('vendor-supply-from-div').classList.remove('hidden');
    } else {
        e.stopPropagation()
        document.getElementById('vendor-supply-edit-form').classList.remove('hidden');
        renderEditValue(target)
        document.getElementById('update-supply-btn').dataset.supplyid = target.dataset.refid;
    }
}

 function closeVendorSupplyForm(id, e) {
    e.preventDefault()
    document.getElementById(id).classList.add('hidden');
}

function checkFormValid(id) {
    const dataTobeInsert = new FormData(document.getElementById(id))
    let arrR = []
    for (const i of dataTobeInsert) {
      if (i[1]) { arrR.push(true) }else { arrR.push(false) }
    }
    return arrR;
  }

async function deleteSupply(e, target) {
    e.stopPropagation();
    const actionValid = await Swal.fire({ template: "#my-template" });
    console.log(actionValid);
    if (actionValid.isConfirmed) {
        await method.DEL_UPD(`admin/inventory/vendor/delete-supply/${target.dataset.refid}`, 'DELETE')
        target.parentNode.parentNode.parentNode.remove()
    }
    
}

async function addVendorSupplyFormSubmit(e) {
    e.preventDefault()
    let data = new FormData(document.getElementById('vendor-supply-form'));
    const isValid = checkFormValid('vendor-supply-form')
    if (isValid.includes(false)) {
        alert('Please fill in all the details')
    } else {
        await method.GET_POST('admin/inventory/vendor/add-supply', 'POST', data, 'form')
    }
}


function renderEditValue(target) {
    const mainParent = target.parentNode.parentNode.parentNode
    const supplierName = mainParent.querySelector('#vendor-name')

    const requiredData = {
        total_amount : mainParent.querySelector('#total-amount'),
        item_name : mainParent.querySelector('#item-name'),
        modeofpay : mainParent.querySelector('#modeofpay'),
        details : mainParent.querySelector('#details'),
        gst_status : mainParent.querySelector('#gst-status'),
        dayofadd : mainParent.querySelector('#dayofadd')
    }

    document.getElementById('supplier-name').innerHTML = supplierName.textContent.trim();

    for (const key in requiredData) {
        const main = document.getElementById('vendor-supply-edit-form')
        main.querySelector(`#${key}`).value = requiredData[key].textContent.trim()
        console.log(requiredData[key].textContent);

        if (main.querySelector(`#${key}`).nodeName == 'SELECT') {
            const selectOpt = main.querySelector(`#${key}`).children;
            for (const opt of selectOpt) {
                if (opt.value == requiredData[key].dataset.status) { opt.selected = true } 
            }
        }
    }
}

async function updateVendorSupplyFormSubmit(e, target) {
    e.preventDefault()
    let data = new FormData(document.getElementById('update-supply-form'));
    const isValid = checkFormValid('update-supply-form')
    if (isValid.includes(false)) {
        alert('Please fill in all the details')
    } else {
        await method.GET_POST(`admin/inventory/vendor/update-supply/${target.dataset.supplyid}`, 'PUT', data, 'form')
    }
}