const form = document.getElementById("contactForm");
    const nameError = document.getElementById("nameError");
    const messageError = document.getElementById("messageError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const formEntries = Object.fromEntries(formData.entries());

      const messageRegex = /.{5,}/;
      const phoneRegex = /^\+380\d{9}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let isValid = true;

      if (!formEntries.user_name || /^\s*$/.test(formEntries.user_name)) {
        nameError.textContent = "Поле \"Ім'я\" є обов'язковим для заповнення";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      if (!messageRegex.test(formEntries.user_message)) {
        messageError.textContent = "Повідомлення має бути мінімум 5 символів";
        isValid = false;
      } else {
        messageError.textContent = "";
      }

      if (!formEntries.user_phone) {
        phoneError.textContent = 'Поле "Телефон" є обов\'язковим для заповнення';
        isValid = false;
      } else if (!phoneRegex.test(formEntries.user_phone)) {
        phoneError.textContent =
          "Номер телефону має починатися з +380 та містити 9 цифр після";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }

      if (!emailRegex.test(formEntries.user_email)) {
        emailError.textContent = "Некоректна електронна адреса";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      if (isValid) {
        console.log("Дані форми:", formEntries);
      }
    });