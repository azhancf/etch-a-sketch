const container = document.querySelector('.container');
for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const div = document.createElement('div');
        let divStyle = div.style;
        container.appendChild(div);
        divStyle.borderWidth = '5px';
        divStyle.borderStyle = 'solid';
        divStyle.width = '50px';
        divStyle.height = '50px';
        div.addEventListener('mouseover', () => div.classList.add('hovered'));
    }
}