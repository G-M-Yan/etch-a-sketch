const container = document.querySelector('.container');
let currentColor = 'black';

function createGrid(gridSize) {
    container.innerHTML = '';
    if (gridSize === 'small') {
        for (let i = 0; i < 22; i++) {
            for (j = 0; j < 16; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style = 'width: calc(100%/22); height: calc(100%/16)'
                container.appendChild(cell);
            }
        }
    } else if (gridSize === 'medium') {
        for (let i = 0; i < 44; i++) {
            for (let j = 0; j < 32; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style = 'width: calc(100%/44); height: calc(100%/32)'
                container.appendChild(cell);
            }
        }

    } else {
        for (let i = 0; i < 88; i++) {
            for (j = 0; j < 64; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style = 'width: calc(100%/88); height: calc(100%/64)'
                container.appendChild(cell);
            }
        }
    }
    addColorListeners();
}

function changeGridSize() {
    const buttons = document.querySelectorAll('.grid-size');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonID = button.id;
            let gridSize;
            
            switch (buttonID) {
                case 'small':
                    gridSize = 'small';
                    break;
                case 'medium':
                    gridSize = 'medium';
                    break;
                case 'large':
                    gridSize = 'large';
                    break;
            }
            createGrid(gridSize);
        })
    })
}

function chooseColor() {
    const colorButtons = document.querySelector('.right');

    colorButtons.addEventListener('click', function(e) {
        const targetButton = e.target;

        if (targetButton.classList.contains('grid-color')) {
            currentColor = getColorFromButton(targetButton.id);
        }
    });
}


function getColorFromButton(buttonID) {
    switch (buttonID) {
        case 'black':
            return 'black';
        case 'warm':
            return 'red';
        case 'cold':
            return 'blue';
        case 'erase':
            return '';
        default:
            return 'black';
    }
}


function changeColor() {
    event.target.style.backgroundColor = currentColor;
}


function addColorListeners() {
    const mouseHover = document.querySelectorAll('.cell');
    
    mouseHover.forEach(cell => {
        cell.addEventListener('mouseover', changeColor);
    });
}

createGrid('small');
changeGridSize();
chooseColor();