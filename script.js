const container = document.querySelector('.container');
const gridButton = document.querySelector('.resize-grid');
const clearButton = document.querySelector('.clear-grid');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (i = 0; i < (rows * cols); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "square"
        container.appendChild(newDiv);
    }
}

function changeGridSize() {
    let squares = document.querySelectorAll('.square');
    for (i = 0; i < squares.length; i++) {
        squares[i].parentNode.removeChild(squares[i]);
    }
    let gridSize = prompt("Please Enter a Number");
    makeGrid(gridSize, gridSize);
}

function clearGrid() {
    let squares = document.querySelectorAll('.square');
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "";
    }

}

makeGrid(16, 16)


gridButton.addEventListener("click", changeGridSize);


container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
});

clearButton.addEventListener("click", clearGrid);

















