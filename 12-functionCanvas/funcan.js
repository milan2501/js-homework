let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");
let addBtn = document.querySelector("#add");
let resetBtn = document.querySelector("#reset");

// let array = [];
// canvas.addEventListener("click", function (e) {
//     let rect = canvas.getBoundingClientRect();
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;
//     array.push({ x: x, y: y })
//     for (let i = 0; i < array.length - 1; i++) {
//         ctx.beginPath();
//         ctx.moveTo(array[i].x, array[i].y);
//         ctx.lineTo(array[i + 1].x, array[i + 1].y);
//         ctx.stroke();
//     }
// }
// );

addBtn.addEventListener("click", function () {
    let array = [];
    canvas.addEventListener("click", function (e) {
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        array.push({ x: x, y: y })
        for (let i = 0; i < array.length - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(array[i].x, array[i].y);
            ctx.lineTo(array[i + 1].x, array[i + 1].y);
            ctx.stroke();
        }
    }
    );
})
























