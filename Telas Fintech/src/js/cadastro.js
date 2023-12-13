'use strict'

const loginButtonLI = document.querySelectorAll('.loginButtonLI');

loginButtonLI.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = 'login.html';
    })
});