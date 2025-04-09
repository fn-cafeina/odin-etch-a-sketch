function $(e) { return document.querySelector(e) };

const gridBtn = $(".grid-btn");
const board = $(".board");

function getGrids() {
  const grids = parseInt(prompt("Enter the number of grids (1 - 60):"));

  if(isNaN(grids)) return alert("Invalid input.");

  if(grids <= 60 && grids > 0) {
    return grids;
  } else {
    return alert("Invalid input.");
  }
}

gridBtn.addEventListener("click", () => {
  const grids = getGrids();

  if(grids) {
    board.innerHTML = "";

    for(let i = 0; i < grids; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for(let j = 0; j < grids; j++) {
        const col = document.createElement("div");
        col.classList.add("col");

        row.appendChild(col);
      }

      board.appendChild(row);
    }
  }
});

let opacity = 9;

board.addEventListener("mouseover", (e) => {
  if(e.target.className === "col") {
    e.target.style.backgroundColor = "#000000";
    e.target.style.opacity = `0.${opacity}`;

    opacity--;
    if(opacity === 0) opacity = 9;
  }
});