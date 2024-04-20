'use strict';

const player = document.querySelector('.player');
const door = document.querySelectorAll('.door');
const hole = document.querySelectorAll('.hole');
const block = document.querySelectorAll('.block');

let posX = 0;
let posY = 0;

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