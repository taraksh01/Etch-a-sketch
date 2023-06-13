const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const child = document.createElement("div");
    child.classList.add("child");
    container.appendChild(child);
  }
}

const grids = document.querySelectorAll(".child");
grids.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.setAttribute("style", "background-color: black;");
  });
});
