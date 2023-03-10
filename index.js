const gridcontainer = document.querySelector('.gridcontainer');
const colorpick = document.querySelector('.colorpick');
const colorbtn = document.querySelector('.colorbtn');
const rainbowbtn = document.querySelector('.rainbowbtn');
const erasebtn = document.querySelector('.erasebtn');
const clearbtn = document.querySelector('.clearbtn');
const gridsize = document.querySelector('.gridsize');
const sizevalue = document.querySelector('.sizevalue');



function updateSize(e) {
    gridsize.value = e.target.value;
    sizevalue.textContent = `${gridsize.value} x ${gridsize.value}`;
    removeGrid();
    getGrid();
    square = document.querySelectorAll('.square');
    
};

function getGrid() {
    for (let i = 0; i < gridsize.value ; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridsize.value; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        gridcontainer.appendChild(row);
    }
}

function removeGrid() {
    while (gridcontainer.firstChild) {
        gridcontainer.removeChild(gridcontainer.firstChild);
    }
};

getGrid();

gridsize.addEventListener('input', updateSize);


let square = document.querySelectorAll('.square');


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

