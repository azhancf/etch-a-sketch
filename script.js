let borderWidth = 4;
let dimensions = 16;
let skipDimensionsPrompt = true;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//FIXME: when button is canceled, it still deletes old grid
// FIXME: if you just click ok without input, it becomes wack
// also the buttons go up when they shouldn't move, grid should move down if absolutely necessary
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
            console.log(divStyle.width);
            console.log(divStyle.height);
            div.addEventListener('mouseover', () => div.classList.add('hovered'));
        }
    }
}

function changeBorderWidth() {
    let newBorderWidth = prompt('enter new border width (reccomended 4 or less)');
    borderWidth = newBorderWidth;
    skipDimensionsPrompt = true;
    newGrid();
}


const container = document.querySelector('.container');
newGrid();

const clearButton = document.querySelector('.clearGrid');
clearButton.addEventListener('click', newGrid);
const outlineButton = document.querySelector('.borderWidth');
outlineButton.addEventListener('click', changeBorderWidth);