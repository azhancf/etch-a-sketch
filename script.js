let borderWidth = 1;
let dimensions = 16;
let skipDimensionsPrompt = true;
let isMouseDown = false;
let colorMode = 1;


// utility functions
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
FIXME: when button is canceled, it still deletes old grid
FIXME: if you just click ok without input, it becomes wack
also the buttons go up when they shouldn't move, grid should move down if absolutely necessary
TODO: eraser tool or just when on dark square
*/

// BUTTONS 
function newGrid() {
    if (!skipDimensionsPrompt) {
        dimensions = prompt('enter dimensions of new grid (max 100)');
        while (dimensions > 100) {
            dimensions = prompt('enter dimensions of new grid (max 100)');
        }
    }
    skipDimensionsPrompt = false;
    removeAllChildNodes(container);
    for (let i=0; i<dimensions; i++) {
        for (let j=0; j<dimensions; j++) {
            const div = document.createElement('div');
            let divStyle = div.style;
            container.appendChild(div);
            divStyle.borderWidth = `${borderWidth}px`;
            divStyle.borderStyle = 'solid';
            divStyle.width = `${960 / dimensions - 2 * borderWidth}px`;
            divStyle.height = `${960 / dimensions - 2 * borderWidth}px`;
            div.addEventListener('mouseover', () => changeSquareColor(div));
        }
    }
}

function changeBorderWidth() {
    let newBorderWidth = prompt('enter new border width (recommended 4 or less)');
    borderWidth = newBorderWidth;
    skipDimensionsPrompt = true;
    newGrid();
}

function changeColorMode() {
    if (colorMode === 2) { // amount of color types
        colorMode = 1;
    }
    else {
        colorMode++;
    }
}

// functions that change square colors
function changeSquareColor(node) {
    if (isMouseDown) {
        switch (colorMode) {
            case 1:
                fillBlack(node);
                break;
            case 2:
                fillRandomColor(node);
                break;
        }
    }
}

function fillBlack(node) {
    node.style.backgroundColor = 'black';
}

function fillRandomColor(node) {
    node.style.backgroundColor = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
}

// actual content/creation
document.addEventListener('mousedown', function(event) { 
    if (event) isMouseDown = true;
}, true);

document.addEventListener('mouseup', function(event) { 
    if (event) isMouseDown = false;
}, true);

const container = document.querySelector('.container');
newGrid();

const clearButton = document.querySelector('.clearGrid');
clearButton.addEventListener('click', newGrid);
const outlineButton = document.querySelector('.borderWidth');
outlineButton.addEventListener('click', changeBorderWidth);
const modeButton = document.querySelector('.colorMode');
modeButton.addEventListener('click', changeColorMode);