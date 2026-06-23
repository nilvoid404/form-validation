const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        showError(username, 'Username is required');
        isValid = false;

    } else if (!/^[a-zA-Z0-9_]+$/.test(usernameValue)) {
        showError(username, 'Username can only contain letters, numbers, and _');
        isValid = false;

    } else {
        showSuccess(username);
    }

    if (passwordValue === '') {
        showError(password, 'Password is required');
        isValid = false;

    } else {
        showSuccess(password);
    }

    if (isValid) {
        checkLogin(usernameValue, passwordValue);
    }
}

function checkLogin(usernameValue, passwordValue) {
    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));


    // for Wrong username
    if (usernameValue !== savedUser.username) {
        showError(username, 'Username does not exist');
        return;
    }

    // for Wrong password
    if (passwordValue !== savedUser.password) {
        showError(password, 'Incorrect password');
        return;
    }

    localStorage.setItem('loggedInUser', savedUser.username);
    window.location.href = '../Main/index.html';
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('.error-message');
    small.innerText = message;
    small.style.display = 'block';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}