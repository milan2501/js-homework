
export function getUserLocation() {
    let locationInput = document.querySelector("#location").value;
    localStorage.setItem('location', locationInput);
    return localStorage.getItem('location');
};

export function getDays() {
    let daysInput = document.querySelector('#days').value;
    return daysInput;
}

export function insertDate() {
    let today = new Date();
    let futureDate = new Date();
    futureDate.setDate(today.getDate() + 30);
    let dateFormatted = futureDate.toISOString().split('T')[0];
    return dateFormatted;
}






