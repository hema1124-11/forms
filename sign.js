const form = document.getElementById("validateF");
const submitBtn = document.getElementById("submitBtn");

const uNameInput = document.getElementById("Uname");
const mailInput = document.getElementById("mail");
const passWInput = document.getElementById("passW");
const passW2Input = document.getElementById("passW2");

const nameErr = document.getElementById("uname-error");
const mailErr = document.getElementById("mail-error");
const passErr = document.getElementById("pass-error");
const passErr2 = document.getElementById("pass2-error");

function validateFormFields() {
    let uName = uNameInput.value.trim();
    let mail = mailInput.value.trim();
    let passW = passWInput.value.trim();
    let passW2 = passW2Input.value.trim();

    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let mailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    let isValid = true;

    nameErr.innerText = "";
    mailErr.innerText = "";
    passErr.innerText = "";
    passErr2.innerText = "";

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

    if (passW2 === "") {
        passErr2.innerText = "Confirm Password is required";
        isValid = false;
    } else if (passW2 !== passW) {
        passErr2.innerText = "Passwords do not match";
        isValid = false;
    }

    
    submitBtn.disabled = !isValid;
    return isValid;
}


[uNameInput, mailInput, passWInput, passW2Input].forEach(input => {
    input.addEventListener("input", validateFormFields);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateFormFields()) {
        alert("Signed in successfully!");
        form.reset();
        submitBtn.disabled = true;
    }
});