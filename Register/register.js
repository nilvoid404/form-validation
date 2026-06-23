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

    let isValid = true;


      if (usernameValue === '') {
        showError(username, 'Username is required');
        isValid = false;
    } 
    else if(!/^[a-zA-Z0-9_]+$/.test(usernameValue))   {
      
        showError(username, 'Username can only contain letters, numbers and _');
        isValid = false;
    }
    else {
        showSuccess(username);
    }
    
    if (emailValue === ''){
        showError(email, 'Email is Required');
        isValid = false;
    } else {
        showSuccess(email);
}

    if (passwordValue === ''){
        showError(password, 'Password is Required');
        isValid = false;
    } else if(passwordValue.length<=8){
        showError(password, 'Password must atleast contain 8 letters');
         isValid = false;
    } 
    else {
        showSuccess(password);
}

    if(confirmPasswordValue=== ''){
    showError(confirmPassword,"Confirm your password");
    isValid = false;
}
    else if(passwordValue!==confirmPasswordValue){
    showError(confirmPassword,"Passwords do not match");
    isValid = false;
}
    else{
    showSuccess(confirmPassword);
}


if (isValid){

    const userData ={
        username: usernameValue,
        email: emailValue,
        password: passwordValue
    };

    localStorage.setItem('registeredUser',JSON.stringify(userData));
    alert('Registeration sucessful! Please Login.');
    window.location.href = '../Login/Login.html'; 

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