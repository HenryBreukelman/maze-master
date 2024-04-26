'use strict';

const player = document.querySelector('.player');
const door = document.querySelectorAll('.door');
const hole = document.querySelectorAll('.hole');
const block = document.querySelectorAll('.block');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const playerThree = document.querySelector('.player-three');
const playerFour = document.querySelector('.player-four');


let posX = 0;
let posY = 0;

function getcords() {
  if (playerOne) {
    posX = 49;
    posY = 0;
  }
  if (playerTwo) {
    posX = 97;
    posY = 49;
  }
  if (playerThree) {
    posX = 49;
    posY = 97;
  }
  if (playerFour) {
    posX = 0;
    posY = 49;
  }
  print()
}

function print () {
  console.log(posY)
  console.log(posX)
}

function moveBox(direction) {
  switch(direction) {
    case 'ArrowLeft':
      if (posX > 0) {
        posX = posX - 1;
      }
      break;
    case 'ArrowUp':
      if (posY > 0) {
        posY = posY - 1;
      }
      break;
    case 'ArrowRight':
      if (posX < 97) {
        posX = posX + 1;
      }
      break;
    case 'ArrowDown':
      if (posY < 97) {
        posY = posY + 1;
      }
      break;
  }
  
  player.style.left = posX + '%';
  player.style.top = posY + '%';
}


document.addEventListener('keydown', function(event) {
  if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      moveBox(event.key);
  }
});

window.addEventListener('load', getcords)
