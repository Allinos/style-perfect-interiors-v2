function displayCtn(e) {
    document.querySelector('.VendorCtn').classList.add('hide');
    document.querySelector('.VendorCtn').classList.remove('block');
    document.querySelector('.VendorCtn').style.backgrpund = ""
    document.querySelector('.ClientCtn').classList.add('hide');
    document.querySelector('.ClientCtn').classList.remove('block');
    document.querySelector('.ClientCtn').style.backgrpund = "";
    document.querySelector(e).classList.add('block');
    document.querySelector(e).style.backgrpund = "";
}
function openAddClientsVendors(params) {
    document.getElementsByClassName('main')[0].classList.add('flow');
    document.querySelector('.addcilent-vendor').classList.add('block');
}
function closeDropdown(e) {
    document.querySelector(e).classList.remove(`block`);
    document.getElementsByClassName('main')[0].classList.remove('flow');
}
function openUpdateClientsVendors(e) {
    let mainCtn = e.parentElement.parentElement.parentElement;
    let inputCtn = document.querySelector('.updatecilent-vendor')
    inputCtn.children[0].dataset.id = mainCtn.querySelector('.ref').children[0].innerText
    inputCtn.querySelector('#category').value = mainCtn.dataset.type;
    inputCtn.querySelector('#name').value = (mainCtn.querySelector('.name').children[0].innerText).trim();
    inputCtn.querySelector('#contact').value = (mainCtn.querySelector('.contact').children[0].innerText).trim();
    inputCtn.querySelector('#alt_contact').value = (mainCtn.querySelector('.alt_contact').innerText).trim();
    inputCtn.querySelector('#location').value = (mainCtn.querySelector('.location').children[0].innerText).trim();
    inputCtn.querySelector('#details').value = (mainCtn.querySelector('.details').children[0].innerText).trim();
    inputCtn.querySelector('#email').value = (mainCtn.querySelector('.email').innerText).trim();
    document.getElementsByClassName('main')[0].classList.add('flow');
    document.querySelector('.updatecilent-vendor').classList.add('block');
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
            AlertNotify('Success', res.msg, 'success') ;
            name='';contact=''; alt_contact='';location=''; details=''; email='' ;
            }
         })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error') 
            console.log('Error(fn-AddClientsVendors):' + err);
        })
        
}
function UpdateClientsVendors(e) {
    let inputCtn = e.parentElement.parentElement;
    let id =inputCtn.dataset.id;
    let cat = inputCtn.querySelector('#category').value;
    let name = inputCtn.querySelector('#name').value;
    let contact = inputCtn.querySelector('#contact').value;
    let alt_contact = inputCtn.querySelector('#alt_contact').value;
    let location = inputCtn.querySelector('#location').value;
    let details = inputCtn.querySelector('#details').value;
    let email = inputCtn.querySelector('#email').value;
    data = { name: name, contact: contact, alt_contact: alt_contact, location: location, details: details, email: email };
    ReqHandler.PUT(window.location.origin + `/admin/user-manager/${cat}s/update/`+id, data)
        .then((res) => { 
            if (res.status) {
            AlertNotify('Success', res.msg, 'success') ;
            name='';contact=''; alt_contact='';location=''; details=''; email='' ;
            }
         })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error') 
            console.log('Error(fn-AddClientsVendors):' + err);
        })
}

function DeleteClientsVendors(e) {
    

}