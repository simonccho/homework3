// today's date
const d = new Date ();
let doutput = d.toLocaleDateString();
document.getElementById("todaysDate").innerHTML = doutput;


// slider
function slide(x)
{
    let slideValue = x;
    if (slideValue == 1)
    {
        document.getElementById("sliderValue").innerHTML=x + " day"
    }
    else
    {
        document.getElementById("sliderValue").innerHTML=x + " days";
    }
}


// first name validation
function firstNameValidation() {
    const firstName = document.getElementById("firstName").value;
    const firstNamePattern = /^[a-zA-Z](?:[ '\-a-zA-Z]?[a-zA-Z])*$/;
    const error = document.getElementById("firstNameError");

    if (firstName == "") {
        error.innerHTML = "First name must not be empty";
        return false;
    } else if (firstName != "") {
        if (!firstName.match(firstNamePattern)) {
            error.innerHTML = "Letters, apostrophes, and dashes only";
            return false;
        } else if (firstName.length < 1) {
            error.innerHTML = "First name must contain at least 1 character";
            return false;
        } else if (firstName.length > 30) {
            error.innerHTML = "First name must not exceed 30 characters";
            return false;
        } else {
            error.innerHTML = "";
            return true;
        }
    }
    checkFlags();
}

// last name validation
function lastNameValidation() {
    const lastName = document.getElementById("lastName").value;
    const lastNamePattern = /^[a-zA-Z](?:[ "\-a-zA-Z2-5]?[a-zA-Z2-5])*$/;
    const error = document.getElementById("lastNameError");

    if (lastName == "") {
        error.innerHTML = "Last name must not be empty.";
        return false;
    } else if (lastName != "") {
        if (!lastName.match(lastNamePattern)) {
            error.innerHTML = "Letters, apostrophes, and dashes only";
            return false;
        } else if (lastName.length < 1) {
            error.innerHTML = "Last name must contain at least 1 character";
            return false;
        } else if (lastName.length > 30) {
            error.innerHTML = "Last name must not exceed 30 characters";
            return false;
        } else {
            error.innerHTML = "";
            return true;
        }
    }
    checkFlags();
}

// email validation
function emailValidation() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.toLowerCase();
    emailInput.value = email;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const error = document.getElementById("emailError");

    if (email === "") {
        error.innerHTML = "Email must not be empty";
        return false;
    } else if (!email.match(emailPattern)) {
        error.innerHTML = "Email must be valid";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

// phone number validation
function phoneValidation() {
    const phoneInput = document.getElementById("phone");
    const maxlength = phoneInput.getAttribute("maxlength");
    let phone = phoneInput.value.replace(/\D/g, "");
    let formattedValue = "";

    if (phone.length > 3) {
        formattedValue = phone.slice(0, 3) + "-";
        phone = phone.slice(3);
    }
    if (phone.length > 3) {
        formattedValue += phone.slice(0, 3) + "-";
        phone = phone.slice(3);
    }
    formattedValue += phone;
    phoneInput.value = formattedValue;

    if (formattedValue.length > maxlength) {
        formattedValue = formattedValue.slice(0, maxlength);
        phoneInput.value = formattedValue;
    }

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const error = document.getElementById("phoneError");

    if (formattedValue === "") {
        error.innerHTML = "Phone number must not be empty";
        return false;
    } else if (!formattedValue.match(phonePattern)) {
        error.innerHTML = "Format: XXX-XXX-XXXX";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

// SSN validation
function SSNValidation() {
    const SSNInput = document.getElementById("SSN");
    const maxlength = SSNInput.getAttribute("maxlength");
    let SSN = SSNInput.value.replace(/\D/g, "");
    let formattedValue = "";

    if (SSN.length > 3) {
        formattedValue = SSN.slice(0, 3) + "-";
        SSN = SSN.slice(3);
    }
    if (SSN.length > 2) {
        formattedValue += SSN.slice(0, 2) + "-";
        SSN = SSN.slice(2);
    }
    formattedValue += SSN;
    SSNInput.value = formattedValue;

    if (formattedValue.length > maxlength) {
        formattedValue = formattedValue.slice(0, maxlength);
        SSNInput.value = formattedValue;
    }

    const SSNPattern = /^\d{3}-\d{2}-\d{4}$/;
    const error = document.getElementById("SSNError");

    if (formattedValue === "") {
        error.innerHTML = "SSN must not be empty";
        return false;
    } else if (!formattedValue.match(SSNPattern)) {
        error.innerHTML = "Format: XXX-XX-XXXX";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

// user ID validation
function userValidation() {
    const userID = document.getElementById("userID").value;
    const unamePattern = /^\S+[A-Za-z_-][A-Za-z0-9_-]+$/;
    const error = document.getElementById("userIDError");

    if (userID === "") {
        error.innerHTML = "Username must not be empty";
        return false;

    } else if (userID !== "") {
        if (!isNaN(userID.charAt(0))) {
            error.innerHTML = "Username must not start with a number";
            return false;
        } else if (userID.length < 5) {
            error.innerHTML = "Username must contain at least 5 characters";
            return false;

        } else if (userID.length > 30) {
            error.innerHTML = "Username must not exceed 30 characters";
            return false;
        } else if (!userID.match(unamePattern)) {
            error.innerHTML = "Username must not include spaces or special characters";
            return false;
        } else {
            error.innerHTML = "";
            return true;
        }
    }
}

// Password validation
function passwordValidation() {
    const password = document.getElementById("password").value;
    const user = document.getElementById("userID").value;
    const error = document.getElementById("passwordError");
    let errorFlag = 0;

    if (password !== "") {
        if (!password.match(/[a-z]/)) {
            document.getElementById("msg1").innerHTML = "Enter at least one lowercase letter";
            errorFlag = 1;
        } else {
            document.getElementById("msg1").innerHTML = "";
        }
        if (!password.match(/[A-Z]/)) {
            document.getElementById("msg2").innerHTML = "Enter at least one uppercase letter";
            errorFlag = 1;
        } else {
            document.getElementById("msg2").innerHTML = "";
        }
        if (!password.match(/[0-9]/)) {
            document.getElementById("msg3").innerHTML = "Enter at least one number";
            errorFlag = 1;
        } else {
            document.getElementById("msg3").innerHTML = "";
        }
        if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
            document.getElementById("msg4").innerHTML = "Enter at least one special character";
            errorFlag = 1;
        } else {
            document.getElementById("msg4").innerHTML = "";
        }
        if (password.length < 8) {
            document.getElementById("msg5").innerHTML = "Password must contain at least 8 characters";
            errorFlag = 1;
        } else {
            document.getElementById("msg5").innerHTML = "";
        }
        if (password === user || password.includes(user) || password.includes(user.toLowerCase()) === true || password.includes(user.toUpperCase()) === true) {
            document.getElementById("msg6").innerHTML = "Password must not contain username";
            errorFlag = 1;
        } else {
            document.getElementById("msg6").innerHTML = "";
        }
        if (errorFlag === 1) {
            error.innerHTML = "Password must meet the following requirements";
            return false;
        } else {
            error.innerHTML = "";
            return true;
        }
    } else {
        error.innerHTML = "Password must not be empty";
        document.getElementById("msg1").innerHTML = "";
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("msg5").innerHTML = "";
        document.getElementById("msg6").innerHTML = "";
        return false;
    }
}

// address validation
function addressOneValidation() {
    const address = document.getElementById("addressLine1").value;
    const addressPattern = /^[a-zA-Z0-9\s,"-]*$/;
    const error = document.getElementById("addressLine1Error");

    if (address === "") {
        error.innerHTML = "Address must not be empty";
        return false;
    } else if (!address.match(addressPattern)) {
        error.innerHTML = "Address must be valid";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
    checkFlags();
}

// password check validation
function passwordCheckValidation() {
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("passwordCheck").value;
    const error = document.getElementById("passwordCheckError");

    if (password1 === "" || password2 === "") {
        error.innerHTML = "Passwords must not be empty";
        return false;
    } else if (password1 !== password2) {
        error.innerHTML = "Passwords do not match";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

// get user data
function getData() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
    formoutput = "<table class='output'><th colspan='2'>Your Data</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "" && formcontent.elements[i].name !== "g-recaptcha-response") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td class='outputName'>" + formcontent.elements[i].value + "</td>";
                        formoutput += "<td class='outputData'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td class='outputName'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputData'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput += "<tr><td class='outputName'>" + formcontent.elements[i].name + "</td>";
                    formoutput += "<td class='outputData'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }

    if (formoutput.length > 0) {
        formoutput += "</table>";
        document.getElementById("outputformdata").innerHTML = formoutput;
    }
}