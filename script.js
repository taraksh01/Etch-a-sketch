const container = document.querySelector("#container");
let gridSize = 16;
const size = document.querySelector(".size");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const clear = document.querySelector(".clear");
let gridColor = "black";

createGrid();

size.addEventListener("click", () => {
  gridSize = parseInt(prompt("Enter the size of grid"));
  updateGrid(gridSize);
});

clear.addEventListener("click", () => {
  gridColor = "whitesmoke";
});

black.addEventListener("click", () => {
  gridColor = "black";
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

function variableColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

const grids = document.querySelectorAll(".child");
grids.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.textContent = "t";
    item.setAttribute("style", `background-color: ${gridColor}; color: white;`);
  });
});
