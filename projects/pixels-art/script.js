const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const inputButton = document.getElementById('generate-board');
const luckButton = document.getElementById('luck');
const input = document.getElementById('board-size');
let selected = document.getElementsByClassName('selected')[0];
let boardSize = 5;

// Font - https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
  const math = Math.floor(Math.random() * 16777215);
  const color = `#${math.toString(16)}`;
  return color;
}

function verifyColor() {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].style.backgroundColor === '') {
      colors[i].style.backgroundColor = randomColor();
      verifyColor();
    }
  }
}

function setColor() {
  for (let i = 0; i < 4; i += 1) {
    switch (i) {
    case 0:
      colors[i].style.backgroundColor = 'black';
      break;
    case 1:
      colors[i].style.backgroundColor = randomColor();
      break;
    case 2:
      colors[i].style.backgroundColor = randomColor();
      break;
    default:
      colors[i].style.backgroundColor = randomColor();
    }
  }
  verifyColor();
}

luckButton.addEventListener('click', setColor);

function pixel() {
  const pixelsContainer = document.createElement('div');
  pixelsContainer.classList.add('pixel');
  return pixelsContainer;
}

function makeBoard() {
  pixelBoard.style.width = `${boardSize * 42}px`;
  for (let i = 0; i < (boardSize * boardSize); i += 1) {
    pixelBoard.appendChild(pixel());
  }
}

function resetBoard() {
  const num = pixelBoard.childElementCount;
  const container = document.getElementsByClassName('pixel');
  for (let i = 0; i < num; i += 1) {
    container[0].parentNode.removeChild(container[0]);
  }
}

function selectColor(event) {
  event.target.classList.add('selected');
  selected = event.target;
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected') && colors[i] !== event.target) {
      colors[i].classList.remove('selected');
    }
  }
}

function selectPixel(event) {
  const block = event.target;
  if (event.button === 0) {
    block.style.backgroundColor = selected.style.backgroundColor;
  }
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

setColor();
makeBoard();

let pixels = document.getElementsByClassName('pixel');

function getPixels() {
  pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('mousedown', selectPixel);
  }
}

getPixels();

function setBoardLenght(size) {
  boardSize = size;
  resetBoard();
  makeBoard();
  getPixels();
}

function verifyBoardSize() {
  if (input.value < 5 && input.value !== '') {
    setBoardLenght(5);
  } else if (input.value > 50) {
    setBoardLenght(50);
  } else if (input.value !== '') {
    setBoardLenght(input.value);
  } else {
    alert('Board inválido!');
  }
}
inputButton.addEventListener('click', verifyBoardSize);

clearButton.addEventListener('click', () => {
  console.log('a');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
