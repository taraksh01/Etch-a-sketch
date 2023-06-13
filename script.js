const container = document.querySelector("#container");
let gridSize = 16;

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
