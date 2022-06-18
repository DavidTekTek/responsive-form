const first = document.getElementById('first')
const last = document.getElementById('last')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (first.value === '' || first.value == null) {
        messages.push('First Name cannot be empty')
    }

    if (last.value === '' || last.value == null) {
        messages.push('Last Name cannot be empty')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Looks like this is not an email')
    }

    if (password.value === '' || password.value == null) {
        messages.push('Password cannot be empty')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    e.preventDefault()
});