
let input = document.createElement('input');
document.body.append(input);
let addBtn = document.createElement('button');
addBtn.innerText = 'Search';
addBtn.style.margin = '10px'
document.body.append(addBtn);
addBtn.addEventListener("click", function() {
    let add = input.value;
    fetch(`https://dummyjson.com/products/search?q=${add}`)
    .then(res => res.json())
    .then(console.log)
})












































