const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form validation logic here
    validateForm();
});

function validateForm() {
    // Example validation logic
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    console.log("Username:", usernameValue);  
    console.log("Password:", passwordValue);

    if (usernameValue === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (passwordValue === ''){
        showError(password, 'Password is Required');
    } else {
        showSuccess(password);
}
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