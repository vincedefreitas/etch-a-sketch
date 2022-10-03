const container = document.querySelector('.container');
const gridButton = document.querySelector('.resize-grid');

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
    let nodes = document.querySelectorAll('.square');
    for (i = 0; i < nodes.length; i++) {
        nodes[i].parentNode.removeChild(nodes[i]);
    }
    let gridSize = prompt("Please Enter a Number");
    makeGrid(gridSize, gridSize);
}

makeGrid(16, 16)

gridButton.addEventListener("click", changeGridSize);

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
});















