// script.js
function signIn() {
    var email = document.forms["loginForm"]["email"].value;
    var pass = document.forms["loginForm"]["password"].value;
    var error = document.getElementById("errorMessage");
    var trueinfo = false;

    if (email == "prab18@op.ac.nz" && pass == "prab2002") {
        trueinfo = true;
    }

    if (email == "abhishch@op.ac.nz" && pass == "abhi2") {
        trueinfo = true;
    }

    if (trueinfo) {
        window.location.href = "index.html"; // Redirect to shopping page
    } else {
        error.innerHTML = "Incorrect email or password.";
    }

    return false;
}

function registery() {
    // Get form elements
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var pass = document.getElementsByName('pass')[0].value;
    var cpass = document.getElementsByName('cpass')[0].value;

    // Check if essential fields are filled
    if (name === '' || email === '' || pass === '' || cpass === '') {
        alert('Kindly fill in all the essential fields.');
    } else if (pass !== cpass) {
        alert('Password and Confirm Password do not match. Please re-enter.');
    } else {
        // If all essential fields are filled and passwords match, you can proceed with the registration logic here
        // For now, let's just log the form data to the console
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Password: ' + pass);
        console.log('Confirm Password: ' + cpass);

        // Redirect to index.html
        window.location.href = 'index.html';
    }
}