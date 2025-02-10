
let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");
let addBtn = document.querySelector("#add");
let resetBtn = document.querySelector("#reset");
let container = document.querySelector("#container");
let nameOfRandomColor = document.createElement("p");
let colorBtn = document.querySelector("#color");


let array = [];
canvas.addEventListener("click", function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    array.push({ x: x, y: y });
    if (array.length >= 5) {
    //drawing button  
    colorBtn.addEventListener("click", paintLine);
    drawPath(chosenColor)
    addBtn.addEventListener("click", printColor);
    array = [];
    }
    //delete button
    resetBtn.addEventListener("click", clearCanvas);
    }
);

//drawing funciton
function drawPath(color) {
    ctx.beginPath();
    ctx.moveTo(array[0].x, array[0].y);
    for (let i in array) {
         ctx.lineTo(array[i].x, array[i].y);
    };
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;  
}

//printing color
function printColor() {
    let randomColorForPrint = chosenColor;
    ctx.stroke();
    nameOfRandomColor.classList.add("printedColor");
    nameOfRandomColor.textContent = `The color of the line is ${randomColorForPrint}`;
    container.appendChild(nameOfRandomColor);
}

//clearing canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nameOfRandomColor.innerText = "";
    container.appendChild(nameOfRandomColor);
}

let chosenColor = null;
function paintLine() {
    chosenColor = prompt("Enter color:");
    return chosenColor;
}











































































