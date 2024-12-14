// Initial state: hide forms and show home content
document.getElementById('loginForm').style.display = 'none';
document.getElementById('signupForm').style.display = 'none';
document.getElementById('homeContent').style.display = 'block';
document.getElementById('illustration').style.display = 'block';

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('illustration').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'flex';
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('illustration').style.display = 'none';
}

function goBackToHome() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('illustration').style.display = 'block';
}
