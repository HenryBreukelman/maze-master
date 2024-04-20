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
      posX = posX - 1
      break;
    case 'ArrowUp':
      posY = posY - 1
      break;
    case 'ArrowRight':
      posX = posX + 1
      break;
    case 'ArrowDown':
      posY = posY + 1
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