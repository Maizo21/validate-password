'use strict';

const passwordInput = document.getElementById("password");
const analysisPassword = function() {
    const password = passwordInput.value;
    const length = password.length;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (length >= 8) strength++;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumbers) strength++;
    if (hasSpecialChars) strength++;
    if (length >= 12) strength++;

    if(strength < 4 ){
        document.querySelector(".password-strength").innerText = "Weak Password";
        document.querySelector(".password-strength").style.color = "red";
    }else if(strength == 5){
        document.querySelector(".password-strength").innerText = "Good Password";
        document.querySelector(".password-strength").style.color = "black";
    }else if(strength > 5){
        document.querySelector(".password-strength").innerText = "Strong Password";
        document.querySelector(".password-strength").style.color = "green";
    }

    console.log("Evaluación completa para: " + password);
}

passwordInput.addEventListener("input", analysisPassword);