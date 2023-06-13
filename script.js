const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const child = document.createElement("div");
    child.classList.add("child");
    container.appendChild(child);
  }
}

