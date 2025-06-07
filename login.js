const form = document.getElementById("validateF");
const submitBtn = document.getElementById("submitBtn");

const uNameInput = document.getElementById("Uname");
const mailInput = document.getElementById("mail");
const passWInput = document.getElementById("passW");

const nameErr = document.getElementById("uname-error");
const mailErr = document.getElementById("mail-error");
const passErr = document.getElementById("pass-error");

function validateFormFields() {
    let uName = uNameInput.value.trim();
    let mail = mailInput.value.trim();
    let passW = passWInput.value.trim();
  

    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let mailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    let isValid = true;

    nameErr.innerText = "";
    mailErr.innerText = "";
    passErr.innerText = "";
   

    if (uName === "") {
        nameErr.innerText = "Name is required";
        isValid = false;
    } else if (!uNamePattern.test(uName)) {
        nameErr.innerText = "Second name is required";
        isValid = false;
    }

    if (mail === "") {
        mailErr.innerText = "Email is required";
        isValid = false;
    } else if (!mailPattern.test(mail)) {
        mailErr.innerText = "Invalid email format";
        isValid = false;
    }

    if (passW === "") {
        passErr.innerText = "Password is required";
        isValid = false;
    } else if (passW.length < 6 || passW.length > 9) {
        passErr.innerText = "Password must be between 6 to 9 characters";
        isValid = false;
    }

    
    
    submitBtn.disabled = !isValid;
    return isValid;
}


[uNameInput, mailInput, passWInput].forEach(input => {
    input.addEventListener("input", validateFormFields);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateFormFields()) {
        alert("Logged in successfully!");
        form.reset();
        submitBtn.disabled = true;
    }
});