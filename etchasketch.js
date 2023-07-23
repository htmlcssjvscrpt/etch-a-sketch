const container = document.querySelector('#container');

function createCrid(number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 0; j < number; j++) {
            const cell = document.createElement('div');
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.border = '1px solid black';
            cell.style.backgroundColor = 'pink';

            cell.setAttribute('data-cell', '');
            row.appendChild(cell);
         }
        container.appendChild(row);
    }
}

let parentContainer = document.querySelector('#container')
parentContainer.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute('data-cell') !== null) {
        e.target.style.backgroundColor = 'black';
    }
});

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let number = prompt('Enter the number of squares for the side the grid');
    container.innerHTML='';
    createCrid(number);
});

