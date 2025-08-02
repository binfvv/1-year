const board = document.getElementById("puzzle-board");
const status = document.getElementById("status");

let positions = [];
let tiles = [];

function createPuzzle() {
  board.innerHTML = "";
  tiles = [];
  positions = [];

  for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.className = "puzzle-piece";
    tile.dataset.correct = i;

    const row = Math.floor(i / 3);
    const col = i % 3;
    tile.style.backgroundPosition = `-${col * 120}px -${row * 120}px`;

    tile.draggable = true;
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", e => e.preventDefault());
    tile.addEventListener("drop", drop);

    tiles.push(tile);
    positions.push(i);
  }

  shuffle(); // ✅ Tự động xáo trộn khi tạo
}

function shuffle() {
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  render();
  status.textContent = "";
}

function render() {
  board.innerHTML = "";
  positions.forEach(pos => board.appendChild(tiles[pos]));
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.correct);
}

function drop(e) {
  const from = parseInt(e.dataTransfer.getData("text/plain"));
  const to = parseInt(e.target.dataset.correct);

  const fromIndex = positions.indexOf(from);
  const toIndex = positions.indexOf(to);

  [positions[fromIndex], positions[toIndex]] = [positions[toIndex], positions[fromIndex]];

  render();
  checkWin();
}

function checkWin() {
  const isWin = positions.every((val, idx) => val === idx);
  if (isWin) {
    
    setTimeout(() => {
      document.getElementById("win-popup").style.display = "flex";
    }, 300);
  }
}

function closeWinPopup() {
  document.getElementById("win-popup").style.display = "none";
}


createPuzzle(); // ✅ Khởi tạo luôn
