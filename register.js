const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e) {
e.preventDefault()
    // Add your form validation logic here
    validateForm();
});


function validateForm() {
    console.log("validateForm is running");
    // Example validation logic
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    console.log("Username:", usernameValue);  
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
    console.log("Confirm Password:", confirmPasswordValue);

    if (usernameValue === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
}
    
    if (emailValue === ''){
        showError(email, 'Email is Required');
    } else {
        showSuccess(email);
}

    if (passwordValue === ''){
        showError(password, 'Password is Required');
    } else {
        showSuccess(password);
}

    if(confirmPasswordValue=== ''){
    showError(confirmPassword,"Confirm your password");
}
    else if(passwordValue!==confirmPasswordValue){
    showError(confirmPassword,"Passwords do not match");
}
    else{
    showSuccess(confirmPassword);
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