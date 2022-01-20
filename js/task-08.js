const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  
  const mail = formEl.email.value;

  const password = formEl.password.value;

  const formData = { mail, password, }
  
  if (mail === '' || password === '') {
    alert('Все поля должны быть заполнены!')
  }

  if(mail && password){
    console.log(formData);

    form.reset();
    }
}

