'use strict';

const player = document.querySelector('.player');
const door = document.querySelectorAll('.door');
const hole = document.querySelectorAll('.hole');
const block = document.querySelectorAll('.block');

let posX = 0;
let posY = 0;

function moveBox(direction) {
  let rect = player.getBoundingClientRect();
  let maxX = window.innerWidth - rect.width;
  let maxY = window.innerHeight - rect.height;
  
  switch(direction) {
    case 'ArrowLeft':
      posX = Math.max(0, posX - 10);
      break;
    case 'ArrowUp':
      posY = Math.max(0, posY - 10);
      break;
    case 'ArrowRight':
      posX = Math.min(maxX, posX + 10);
      break;
    case 'ArrowDown':
      posY = Math.min(maxY, posY + 10);
      break;
  }
  
  player.style.left = posX + 'px';
  player.style.top = posY + 'px';
}


document.addEventListener('keydown', function(event) {
  if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      moveBox(event.key);
  }
});