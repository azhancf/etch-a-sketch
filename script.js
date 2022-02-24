let borderWidth = 4;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function newGrid() {
    const dimensions = prompt('enter dimensions of new grid');
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


const container = document.querySelector('.container');
for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const div = document.createElement('div');
        let divStyle = div.style;
        container.appendChild(div);
        divStyle.borderWidth = `${borderWidth}px`;
        divStyle.borderStyle = 'solid';
        divStyle.width = `${960 / 16 - 2 * borderWidth}px`;
        divStyle.height = `${960 / 16 - 2 * borderWidth}px`;
        div.addEventListener('mouseover', () => div.classList.add('hovered'));
    }
}

const button = document.querySelector('button');
button.addEventListener('click', newGrid);