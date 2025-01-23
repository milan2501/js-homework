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

for (let value in ads) {
    document.querySelector("#container").textContent = ads[value];
}









































