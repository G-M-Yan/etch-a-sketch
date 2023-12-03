const container = document.querySelector('.container');

function changeGridSize() {
    const buttons = document.querySelectorAll('button');
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
            for (j = 0; j < 32; j++) {
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



function changeColor() {
    this.style.backgroundColor = 'black';
//     const buttons = document.querySelectorAll('button');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const buttonID = button.id;
            
//             switch (buttonID) {
//                 case 'black':
//                     this.style.backgroundColor = 'black';
//                     break;
//                 case 'warm':
//                     this.style.backgroundColor = 'red';
//                     break;
//                 case 'cold':
//                     this.style.backgroundColor = 'blue';
//                     break;
//             }
//         })
//     })
}
    // this.style.backgroundColor = 'black';



function addColorListeners() {
    const mouseHover = document.querySelectorAll('.cell');
    
    mouseHover.forEach(element => {
        element.addEventListener('mouseover', changeColor);
    });
}

createGrid('small');
changeGridSize();