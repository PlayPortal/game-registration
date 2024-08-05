document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match!';
        message.style.color = 'red';
        return;
    }

    // Simulating account creation process
    let userAccount = {
        username: username,
        email: email,
        password: password // Note: In a real application, never store passwords in plain text!
    };

    // Simulating saving to a database
    console.log('Account created:', userAccount);

    // Save username in localStorage
    localStorage.setItem('username', username);

    message.textContent = 'Account successfully created! Redirecting to homepage...';
    message.style.color = 'green';

    // Redirect to homepage after 2 seconds
    setTimeout(function() {
        window.location.href = 'homepage.html';
    }, 2000);

    // Clear the form
    document.getElementById('registrationForm').reset();
});
