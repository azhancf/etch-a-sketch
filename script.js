let borderWidth = 1;
let dimensions = 16;
let skipDimensionsPrompt = true;
let isMouseDown = false;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*
FIXME: when button is canceled, it still deletes old grid
FIXME: if you just click ok without input, it becomes wack
also the buttons go up when they shouldn't move, grid should move down if absolutely necessary
TODO: eraser tool or just when on dark square
FIXME: dragging doesn't always work 
*/
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
            div.addEventListener('mouseover', () => {
                if (isMouseDown) div.classList.add('hovered')});
        }
    }
}

function changeBorderWidth() {
    let newBorderWidth = prompt('enter new border width (reccomended 4 or less)');
    borderWidth = newBorderWidth;
    skipDimensionsPrompt = true;
    newGrid();
}

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