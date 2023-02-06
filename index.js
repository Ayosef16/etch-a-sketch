const container = document.querySelector('.container');
const colorpick = document.querySelector('.colorpick');

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


square.forEach( square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = colorpick.value;
}));

