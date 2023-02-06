const container = document.querySelector('.container');
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
        container.appendChild(row);
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

colorbtn.addEventListener('click',getColor);
erasebtn.addEventListener('click',eraseColor);
clearbtn.addEventListener('click',clearColor);

