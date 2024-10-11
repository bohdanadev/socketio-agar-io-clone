let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

let canvas = document.querySelector('#the-canvas');
let context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;
let player = {};

const loginModal = new bootstrap.Modal(document.querySelector('#loginModal'));
const spawnModal = new bootstrap.Modal(document.querySelector('#spawnModal'));

window.addEventListener('load', () => {
  loginModal.show();
});

document.querySelector('.name-form').addEventListener('submit', (e) => {
  e.preventDefault();
  player.name = document.querySelector('#name-input').value;
  document.querySelector('.player-name').innerHTML = player.name;
  loginModal.hide();
  spawnModal.show();
});

document.querySelector('.start-game').addEventListener('click', () => {
  spawnModal.hide();
  const elArray = document.querySelectorAll('.hiddenOnStart');

  elArray.forEach((el) => {
    el.removeAttribute('hidden');
  });

  init();
});
