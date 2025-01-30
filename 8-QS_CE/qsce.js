let yearText = document.querySelectorAll(".num");
let allOffer = document.querySelectorAll(".img");
let currentYear = new Date().getFullYear();
yearText.forEach((el, index) => {
    let yearNumber = parseInt(el.textContent);
    let newCar = document.createElement("span");
    if (yearNumber === currentYear) {
        newCar.textContent = "NOVO!";
        newCar.classList.add("newCar");
        if (allOffer[index]) {
            allOffer[index].appendChild(newCar)
        }
    }
})




















