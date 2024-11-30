var buttonLogin = document.getElementById("loginButton");
buttonLogin.addEventListener('click', login);
    
var registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click', register);

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

