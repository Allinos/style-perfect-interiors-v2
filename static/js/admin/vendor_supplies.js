 const method = new DataCall()



 function openVendorSupplyForm() {
    document.getElementById('vendor-supply-from-div').classList.remove('hidden');
}

 function closeVendorSupplyForm() {
    document.getElementById('vendor-supply-from-div').classList.add('hidden');
}

function checkFormValid(id) {
    const dataTobeInsert = new FormData(document.getElementById(id))
    let arrR = []
    for (const i of dataTobeInsert) {
      if (i[1]) { arrR.push(true) }else { arrR.push(false) }
    }
    return arrR;
  }

async function addVendorSupplyFormSubmit(e) {
    e.preventDefault()
    let data = new FormData(document.getElementById('vendor-supply-form'));
    const isValid = checkFormValid('vendor-supply-form')
    if (isValid.includes(true)) {
        await method.GET_POST('admin/inventory/vendor/add-supply', 'POST', data, 'form')
    } else {
        alert('Please fill in all the details')
    }
}