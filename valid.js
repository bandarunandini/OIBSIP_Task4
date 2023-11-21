function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Basic check for demo purposes
    if (username === "demo" && password === "password") {
        errorMessage.innerHTML = "";
        alert("Login successful!");
    } else {
        errorMessage.innerHTML = "Invalid username or password.";
    }
}

function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Basic check for demo purposes (add more validation in a real-world scenario)
    if (newUsername !== "" && newPassword !== "") {
        alert("Registration successful! You can now log in.");
    } else {
        alert("Please fill in all fields.");
    }
}

