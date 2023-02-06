const gridcontainer = document.querySelector('.gridcontainer');
const colorpick = document.querySelector('.colorpick');
const colorbtn = document.querySelector('.colorbtn');
const rainbowbtn = document.querySelector('.rainbowbtn');
const erasebtn = document.querySelector('.erasebtn');
const clearbtn = document.querySelector('.clearbtn');

function getGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        gridcontainer.appendChild(row);
    }
}

getGrid();

const square = document.querySelectorAll('.square');


function getColor() {
    square.forEach( square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = colorpick.value;
}))};

function clearColor() {
    window.location.reload();
};

function eraseColor() {
    square.forEach( square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'white';
}))};

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function rainbowColor() {
    square.forEach( square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randomColor();
}))};

colorbtn.addEventListener('click',getColor);
rainbowbtn.addEventListener('click',rainbowColor);
erasebtn.addEventListener('click',eraseColor);
clearbtn.addEventListener('click',clearColor);

