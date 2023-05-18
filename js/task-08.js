

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm)

function onSubmitForm (event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (!email.value.trim() || !password.value.trim()) {
        return alert ('Please fill in all the fields!')
    } else {
        const formData = {
            email: email.value,
            password: password.value
        }

        console.log(formData)
        event.currentTarget.reset()
    }
}