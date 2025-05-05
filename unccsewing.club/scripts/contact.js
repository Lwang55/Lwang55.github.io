//Tracks wether or not the submit button has been selected
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    //Clears the input fields after a error attempt
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((el) => el.style.display = "none");
    //Establishing form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    //Sets isValid to true to check validation
    let isValid = true;
    //Name Validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name required";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }
    //Email Validation
    const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailChar.test(email)) {
        document.getElementById('emailError').textContent = "Email required";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    }
    //Message Validation
    if (message === "" ) {
        document.getElementById('messageError').textContent = "Reason for contact required";
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    //If isValid returns true, notify user.
    if (isValid) {
        alert('Form submitted successfully!');
    }
});