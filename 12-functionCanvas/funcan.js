let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");
let addBtn = document.querySelector("#add");
let resetBtn = document.querySelector("#reset");



let array = [];
canvas.addEventListener("click", function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    array.push({ x: x, y: y });
    if (array.length >= 5) {
        ctx.beginPath();
        ctx.moveTo(array[0].x, array[0].y);
    
        for (let i in array) {
            ctx.lineTo(array[i].x, array[i].y);
        };
        addBtn.addEventListener("click", function() {
            ctx.stroke();
        })
        array = [];
    }
    resetBtn.addEventListener("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

}
);





















