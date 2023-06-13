const container = document.querySelector("#container");
let gridSize = 16;
const size = document.querySelector(".size");

createGrid();
const grids = document.querySelectorAll(".child");
grids.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.setAttribute("style", "background-color: black;");
  });
});

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const child = document.createElement("div");
      child.classList.add("child");
      container.appendChild(child);
    }
  }
}

size.addEventListener("click", () => {
  gridSize = parseInt(prompt("Enter the size of grid"));
  updateGrid(gridSize);
});

function updateGrid(gridSize) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const child = document.createElement("div");
      child.classList.add("child");
      child.setAttribute(
        "style",
        `height: calc(100% / ${gridSize}); width: calc(100% / ${gridSize});`
      );
      container.appendChild(child);
    }
  }
}
