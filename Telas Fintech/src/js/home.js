'use strict'

const enterButton = document.querySelector('.enterButton');
enterButton.addEventListener('click', () => {
    window.location.href = 'login.html';
})

const createButton = document.querySelector('.createButton');
createButton.addEventListener('click', () => {
    window.location.href = 'cadastro.html';
})