let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let dx = 2;
let dy = 2;
let x, y;


let handEventListener = (event) => {
    x = event.x;
    y = event.y;
}

function drawCircle(a, b) {
    let size = 10;
    ctx.beginPath();
    ctx.arc(a, b, size, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += dx;

    drawCircle(x, y);

    requestAnimationFrame(animate)

}
animate()

canvas.addEventListener("click", handEventListener);




















