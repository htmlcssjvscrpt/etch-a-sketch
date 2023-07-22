const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.border = '1px solid black';
        cell.style.backgroundColor = 'pink';
        row.appendChild(cell);
    }
    container.appendChild(row);
}

addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = 'black';
});
