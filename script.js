const container = document.querySelector('.container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (i = 0; i < (rows * cols); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "square"
        container.appendChild(newDiv);
    }
}

makeGrid(16, 16)