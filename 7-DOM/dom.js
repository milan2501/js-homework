//this is my version of the solution
let ads = [
    {
        title: "Skoda oktavia 2014",
        price: 9950,
        image: "https://cdn.skoda-storyboard.com/"
    },
    {
        title: "Audi",
        price: 8000,
        image: "https://www.akkompresor.rs/files/thumbs/"
    }
];
let element = document.querySelector("#container");
let text = "";
for (let value in ads) {
    text += `${ads[value].title},  ${ads[value].price}  and  ${ads[value].image}|||`;
    element.textContent = text
};









































