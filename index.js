// Your code here
"use strict";

//variabel til dodger
const dodger =document.getElementById("dodger");

/* //ændre baggrundsfarve
//dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

//flyt dodger
dodger.style.bottom = "100px"; */

/* document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;
  }
}); */




//Knap til venstre
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});