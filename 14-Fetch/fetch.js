fetch("https://dummyjson.com/products/1", { method: "HEAD" })
    .then(response => {
        console.log("Headers:", response.headers);
        console.log("Status:", response.status);
    })
    .catch(error => console.error("Error:", error));


