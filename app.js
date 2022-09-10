//handles every thing in the user interface
class UI {
  //show input field values in real time on credit-cards
  static typewriter(el) {
    const name = document.querySelector(".full-name");
    const cardNumber = document.querySelector(".card-code");
    const month = document.querySelector(".month");
    const year = document.querySelector(".year");
    const cvc = document.querySelector(".display-cvc");

    const list = el.classList;
    if (list.contains("f-name")) {
      name.textContent = el.value;
    } else if (list.contains("card-num")) {
      cardNumber.textContent = el.value;
    } else if (list.contains("exp-month")) {
      month.textContent = el.value;
    } else if (list.contains("exp-year")) {
      year.textContent = el.value;
    } else {
      cvc.textContent = el.value;
    }
  }

  // it does exactly what it says
  static showAlerts(message, divParent) {
    const formInputs = document.querySelector(`.${divParent}`);
    const submitBtn = document.querySelector("#submitBtn");

    const alerts = document.createElement("div");
    alerts.className = "alert";
    formInputs.appendChild(alerts);
    alerts.textContent = message;
    submitBtn.disabled = true;

    setTimeout(() => {
      alerts.remove();
      submitBtn.disabled = false;
    }, 3000);
  }

  //reset cards to default values
  static resetPage() {
    document.querySelectorAll(".input").forEach((input) => (input.value = ""));
    document.querySelector(".full-name").textContent = "JANE APPLESEED";
    document.querySelector(".card-code").textContent = "0000 0000 0000 0000";
    document.querySelector(".month").textContent = "00";
    document.querySelector(".year").textContent = "00";
    document.querySelector(".display-cvc").textContent = "000";
    document
      .querySelectorAll(".input")
      .forEach((input) => input.classList.add("invalid"));
  }
  // show/hide thank you alert
  static thankYou() {
    const success = document.querySelector(".success");
    success.classList.toggle("show");
  }

  static ValidateForm(input) {
    const letters = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const numbers = /^[0-9]+$/;

    const numErr = "Wrong format, numbers only";
    const alpErr = "Wrong format, alphabets only";
    const empty = "Field can't be blank";

    if (input.classList.contains("f-name")) {
      if (input.value === "") {
        UI.showAlerts(empty, "form-group-1");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else if (!input.value.match(letters)) {
        UI.showAlerts(
          "wrong format, 2 names expected (alphabets only)",
          "form-group-1"
        );
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid-input");
        input.classList.remove("invalid");
      }
    } else if (input.classList.contains("card-num")) {
      if (input.value === "") {
        UI.showAlerts(empty, "form-group-2");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else if (!input.value.match(numbers)) {
        UI.showAlerts(numErr, "form-group-2");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid-input");
        input.classList.remove("invalid");
      }
    }
    if (input.classList.contains("exp-month")) {
      if (input.value === "") {
        UI.showAlerts(empty, "form-group-3");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else if (!input.value.match(numbers)) {
        UI.showAlerts(numErr, "form-group-3");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid-input");
        input.classList.remove("invalid");
      }
    }
    if (input.classList.contains("exp-year")) {
      if (input.value === "") {
        UI.showAlerts(empty, "form-group-3");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else if (!input.value.match(numbers)) {
        UI.showAlerts(numErr, "form-group-3");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid-input");
        input.classList.remove("invalid");
      }
    }
    if (input.classList.contains("cvc")) {
      if (input.value === "") {
        UI.showAlerts(empty, "form-group-5");
        cvc.classList.add("invalid-input");
        input.classList.add("invalid");
      } else if (!input.value.match(numbers)) {
        UI.showAlerts(numErr, "form-group-5");
        input.classList.add("invalid-input");
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid-input");
        input.classList.remove("invalid");
      }
    }
  }
}

//add invalid(used to check the validity of the entire form) class to input field on page load
document.addEventListener("DOMContentLoaded", UI.resetPage);

// show form input on cards in real time
const inputs = document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keyup", (e) => {
    UI.typewriter(e.target);
  });
});

// validate form on input field change
document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("change", (e) => {
    UI.ValidateForm(e.target);
  });
});

// finally validation and submit
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll(".input");
  const inputsArr = Array.from(inputs);
  const inputsClass = inputsArr.map((input) =>
    input.classList.contains("invalid")
  );
  //call the validateForm function on each input before submit
  inputs.forEach((input) => UI.ValidateForm(input));
  console.log(inputsClass);
  if (!inputsClass.includes(true)) {
    UI.thankYou();
  }
});

//hide thank you alert
document.querySelector(".success").addEventListener("click", UI.thankYou);
document.querySelector(".success").addEventListener("click", UI.resetPage);
