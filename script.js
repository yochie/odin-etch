let container = document.querySelector(".container");
const gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.className = "grid-row";
    for (let j = 0; j < gridSize; j++) {
        let div = document.createElement("div");
        div.className = "grid-cell";
        row.appendChild(div);
    }
    container.appendChild(row);
}