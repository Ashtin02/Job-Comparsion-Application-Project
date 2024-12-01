/*
Creates event handler for 'Sign In' button and calls login function
when button is clicked.
*/
var buttonLogin = document.getElementById("loginButton");
buttonLogin.addEventListener('click', login);

/*
Creates event handler for 'Register' button and calls register function
when button is clicked.
*/
var registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click', register);

/*
Removes leading and trailing whitespaces before validating input. Checks to make sure input fields are not blank and if at least one of the input
fields are blank asks user to fill in both input fields. Otherwise, lets user know that login was successful, clears input fields 
and redirects user to home page when user logs in.
*/
function login() {
    const emailInputField = document.getElementById("emailLogin");
    const passwordInputField = document.getElementById("passwordLogin");
    if (emailInputField.value.trim() === "" || passwordInputField.value.trim() === "") {
        alert("Please fill in both input fields.")
    }
    else {
        document.getElementById("emailLogin").value = "";
        document.getElementById("passwordLogin").value = "";
        window.location.href = "http://127.0.0.1:3000/HTML/dashboard.html";
        alert("You successfully logged in.");
    }
}

/*
Removes leading and trailing whitespaces before validating input. Checks to make sure input fields are not blank and if at least one of the input
fields are blank asks user to fill in both input fields. Otherwise, lets user know that registration was successful, clears input fields and redirects 
user to home page when user registers.
*/
function register() {
    const emailInputField = document.getElementById("emailRegister");
    const passwordInputField = document.getElementById("passwordRegister");
    if (emailInputField.value.trim() === "" || passwordInputField.value.trim() === "") {
        alert("Please fill in both input fields.")
    }
    else {
        document.getElementById("emailRegister").value = "";
        document.getElementById("passwordRegister").value = "";
        window.location.href = "http://127.0.0.1:3000/HTML/dashboard.html";
        alert("You successfully registered.");
    }
}

