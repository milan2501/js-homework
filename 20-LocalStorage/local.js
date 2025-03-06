
let loginBlock = document.querySelector('#loginBlock');
let logIn = document.querySelector('#login');
let logOut = document.querySelector('#logout');
let userNameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let taskLink = document.querySelector('#tasks');

function logAndSetStorage() {
    let userName = userNameInput.value;
    let password = passwordInput.value;
    userNameInput.value = '';
    passwordInput.value = '';

    if (userName === 'admin' && password === 'admin12345') {
        localStorage.setItem('user', true);
        loginBlock.style.display = 'none';
        taskLink.style.display = 'block';
        console.log('Logged in successfully');
    } else {
        console.log('Wrong inputs!');
    };
};

function logoutAndClearStorage() {
    localStorage.removeItem('user');
    taskLink.style.display = 'none';
    loginBlock.style.display = 'block';
    console.log('Logged out successfully!');
};

logIn.addEventListener('click', logAndSetStorage);
logOut.addEventListener('click', logoutAndClearStorage);








































































































