const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const messageError = document.getElementById('messageError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const messageRegex = /.{5,}/;
    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Поле "Ім\'я" є обов\'язковим для заповнення';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (!messageRegex.test(messageInput.value)) {
        messageError.textContent = 'Повідомлення має бути мінімум 5 символів';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    const phoneValue = phoneInput.value.trim();
    if (!phoneValue) {
        phoneError.textContent = 'Поле "Телефон" є обов\'язковим для заповнення';
        isValid = false;
    } else if (!phoneRegex.test(phoneValue)) {
        phoneError.textContent = 'Номер телефону має починатися з +380 та містити 9 цифр після';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Некоректна електронна адреса';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (isValid) {
        console.log('Ім\'я:', nameInput.value);
        console.log('Повідомлення:', messageInput.value);
        console.log('Телефон:', phoneInput.value);
        console.log('Email:', emailInput.value);
    }
});