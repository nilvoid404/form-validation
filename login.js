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

    let isValid: true;

    if (usernameValue === '') {
        showError(username, 'Username is required');
        isValid: false;
    } 
    else if(!/^[a-zA-Z0-9_]+$/.test(usernameValue))   {
      
        showError(username, 'Username can only contain letters,numbers and _');
        isValid: false;
    }
    else {
        showSuccess(username);
    }

    if (passwordValue === ''){
        showError(password, 'Password is Required');
        isValid: false;
    } else if(passwordValue.length<=8) {
        showError(password, 'Password must contain atleast 8 letters.')
        isValid: false;
    }
        else {
        showSuccess(password);
}


if(isValid){
    const userData={
    username = usernameValue,
    password = passwordValue
};

localStorage.setItem('registeredUser',JSON.stringify(userData));
    window.location.href = 'Index.html'; 


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