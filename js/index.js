import { num, oldnum } from "https://yourownsquare.github.io/numjs/num.js";

let dimensions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];

let width = 0;

document.addEventListener("DOMContentLoaded", function () {
  generateSquares();
});

function generateSquares() {
  const container = document.querySelector(".new");

  for (let i = 0; i < num; i++) {
    let square = document.createElement("span");
    square.classList.add("square");
    width = dimensions[Math.floor(Math.random() * dimensions.length)];
    const color = getRandomColor();

    square.style.width = `${width}px`;
    square.style.height = `${width}px`;
    square.style.backgroundColor = color;

    container.appendChild(square);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// var workerloop = new Worker('js/worker.js');
// window.onload = () =>{workerloop.postMessage(oldnum)};
// let oldbox = document.querySelector('.old');
// workerloop.onmessage = function(event){

//   oldbox.appendChild(event.data);
//   workerloop.terminate();

// };
document.addEventListener("DOMContentLoaded", function () {
  const worker = new Worker("js/worker.js");

  worker.addEventListener("message", function (event) {
    const squaresData = event.data;
    displaySquares(squaresData);
  });

  worker.postMessage(oldnum);
});

function displaySquares(squaresData) {
  const oldbox = document.querySelector(".old");

  squaresData.forEach((data) => {
    const square = document.createElement("span");
    square.classList.add("square");

    square.style.width = `${data.size}px`;
    square.style.height = `${data.size}px`;
    square.style.backgroundColor = data.color;

    oldbox.appendChild(square);
  });
}
