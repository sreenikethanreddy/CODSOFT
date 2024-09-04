function showSignup() {
    document.querySelector('.welcome').classList.add('hidden');
    document.querySelector('.login').classList.add('hidden');
    document.querySelector('.signup').classList.remove('hidden');
}

function showLogin() {
    document.querySelector('.welcome').classList.add('hidden');
    document.querySelector('.signup').classList.add('hidden');
    document.querySelector('.login').classList.remove('hidden');
}

function signup() {
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let policy = document.getElementById('privacy-policy').checked;

    if (email === '' || password === '' || !policy) {
        alert('Please fill all fields and agree to the privacy policy.');
    } else {
        alert('Signup successful!');
        // Send data to server for further processing
    }
}

function login() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (email === '' || password === '') {
        alert('Please fill all fields.');
    } else {
        alert('Login successful!');
        // Send data to server for further processing
    }
}
