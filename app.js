const inputs = document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keyup", (e) => {
        UI.typewriter(e.target)
    })
})

class UI{
    static typewriter (el) {
        const name = document.querySelector(".full-name");
        const cardNumber = document.querySelector(".card-code");
        const month = document.querySelector(".month");
        const year = document.querySelector(".year");
        const cvc = document.querySelector(".display-cvc");

       const list = el.classList;
        if(list.contains("f-name")){
            name.textContent = el.value;
        }
        else if(list.contains("card-num")){
            cardNumber.textContent = el.value;
        }
        else if(list.contains("exp-month")){
            month.textContent = el.value;
        }
        else if(list.contains("exp-year")){
            year.textContent = el.value;
        }
        else if(list.contains("cvc")){
            cvc.textContent = el.value;
        }
    }
}
