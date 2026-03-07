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
    playSoundOnMovement();
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


//knap til højre
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);

  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
    playSoundOnMovement();
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


//knap opad
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});

function moveDodgerUp() {
  const upNumbers = dodger.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);

  if (up < 380) {
    dodger.style.bottom = `${up + 1}px`;
    playSoundOnMovement();
  }
};


//knap nedad
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerDown() {
  const downNumbers = dodger.style.bottom.replace("px", "");
  const down = parseInt(downNumbers, 10);

  if (down > 0) {
    dodger.style.bottom = `${down - 1}px`;
    playSoundOnMovement();
  }
};


//sound
const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
  movementSound.currentTime = 0;
  movementSound.play();
};