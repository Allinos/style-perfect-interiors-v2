// form 
const method = new DataCall();
function toggleForm(formId, target) {
  document.querySelector('#p-name').innerHTML = target.id;
  const forms = document.querySelectorAll('.formContainer > div');
  forms.forEach(form => {
    if (form.id === formId) {
      form.classList.remove('hide');
    } else {
      form.classList.add('hide');
    }
  });
}

function checkFormValid(id) {
  const dataTobeInsert = new FormData(document.getElementById(id))
  let arrR = []
  for (const i of dataTobeInsert) {
    if (i[1]) { arrR.push(true) }else { arrR.push(false) }
  }
  return arrR;
}


async function SubmitNormalFormData(e, target) {
  e.preventDefault();
  const actionCreator = checkFormValid('np-form-data')
  if (actionCreator.includes(false)) {
    alert('please fillup all the input')
  } else { await method.addNewItemToNp(undefined, e, 'np-form-data', null, 'admin/projects-create', false, {dataType : target.dataset.datatype}) }
}

function renderClientForm(clientData) {
 const fields = document.getElementById('contact-details-field')
 fields.childNodes.forEach((node) => {
   if (node.tagName === 'DIV') {
      const fieldId = ['name', 'contact', 'contact2', 'email', 'location', 'oth_details']
      fieldId.forEach((id)=> {
        const input = node.querySelector('input')
        if (input.id === id) {
          input.value = clientData[id] && clientData[id] 
        }
      }) 
   } 
 })
   
}

async function getClientData(target) {
  const clientData = await method.GET_POST(`admin/get-client-data-for-form?refid=${target.value}`, 'GET')
  showContactForm('old')
  renderClientForm(clientData.result[0])
  document.getElementById('form-submit-btn').dataset.datatype = 'old'
} 

function showContactForm(type) {
  const target = document.getElementById('project-form')
  type == 'old' ? target.classList.remove('hidden') : target.classList.toggle('hidden')
}

