const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', formSubmit);

function formSubmit (event) {
    event.preventDefault();
    if (
        event.currentTarget.elements.email.value === '' ||
        event.currentTarget.elements.password.value === '') {
        alert ('Все поля должны быть заполнены');
    } else {
        const userInfo = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(userInfo);
        event.currentTarget.reset();
          }
 };