const gridWidth = 640;
const defaultGridSize = 16;

let container = document.querySelector(".container");

generateGrid(defaultGridSize);

container.addEventListener("mouseover", hover);
function hover(mouseEvent) {
    if (mouseEvent.target.className == "container") {
        return;
    }

    mouseEvent.target.style.backgroundColor = "red";
}

let resizeButton = document.querySelector(".resize-button");
resizeButton.addEventListener("click", () => {
    let newSize;
    do {
        newSize = prompt("New grid size (<= 100) : ");

        //both parseFloat and isNan() are necessary to avoid converting whitespace and scanning full string
        //https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
        if (newSize === null || newSize == "" || Number.isNaN(newSize) || Number.isNaN(parseFloat(newSize))){
            return;
        }
        //convert to number
        newSize = +newSize;
    } while (newSize > 100);


    clearGrid();
    generateGrid(newSize);
});

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.className = "grid-row";
        for (let j = 0; j < gridSize; j++) {
            let div = document.createElement("div");
            div.className = "grid-cell";
            div.style.width = gridWidth / gridSize + "px";
            div.style.height = gridWidth / gridSize + "px";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    container.replaceChildren();
}