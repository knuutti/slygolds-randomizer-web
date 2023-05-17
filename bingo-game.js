let urlParams = new URLSearchParams(window.location.search);
let seed = urlParams.get('seed')
let allCells = [
  'r1c1',
  'r2c1', 
  'r3c1', 
  'r4c1', 
  'r5c1',
  'r6c1',
  'r7c1',
  'r8c1',
  'r9c1',
  'r10c1'
];

if (!seed) {
  seed = generateSeedString();
}

let mySeededRng = new Math.seedrandom('' + seed);

function randomizeBoard() {
  mySeededRng = new Math.seedrandom('' + seed); // this is inconsistent if you pass a number instead of a string

  let itemsOnTheBoard = [];

  for (let row = 1; row <= 9; row++) {
    let col = 1
    let chosen = false
    while (!chosen) {
      let itemNum = getSeededRandomInt(1, tasks.length) - 1;
      if (itemsOnTheBoard.indexOf(itemNum) < 0) {
        chosen = true;
        const chosenItem = tasks[itemNum];
        itemsOnTheBoard.push(itemNum);
        let cell = document.getElementById("r" + row + "c" + col + "-div");

        let spanElement = document.createElement("span");
        spanElement.innerText = chosenItem;
        cell.replaceChildren(spanElement);
      }
    }
  }
  let chosen = false
  while (!chosen) {
    let row = 10
    let col = 1
    let itemNum = getSeededRandomInt(1, bosses.length) - 1;
    if (itemsOnTheBoard.indexOf(itemNum) < 0) {
      chosen = true;
      const chosenItem = bosses[itemNum];
      itemsOnTheBoard.push(itemNum);
      let cell = document.getElementById("r" + row + "c" + col + "-div");

      let spanElement = document.createElement("span");
      spanElement.innerText = chosenItem;
      cell.replaceChildren(spanElement);
    }
  }

  //set cells as marked if they returned to the same seed in a single session
  if (seed === sessionStorage.getItem('seed')) {
    let selectedArray = JSON.parse(sessionStorage.getItem('selectedCells') || '[]')
    selectedArray.forEach(cellId => toggleCell(cellId, true));
  } else {
    sessionStorage.setItem('seed', seed);
    sessionStorage.removeItem('selectedCells');
  }

  document.getElementById('seed-label').innerText = 'Seed: ' + seed;

}


function toggleCell(event, skipSessionStorage = false) {
  let cell = document.getElementById(event);
  cell.classList.toggle('marked');
  let alreadySelected = JSON.parse(sessionStorage.getItem('selectedCells') || '[]');
  if (!skipSessionStorage) {
    if (cell.classList.contains('marked')) {
      sessionStorage.setItem('selectedCells', JSON.stringify([cell.id, ...alreadySelected]))
    } else {
      sessionStorage.setItem('selectedCells', JSON.stringify(alreadySelected.filter(c => c !== cell.id)))
    }
  }
}


function rerollBoard() {
  seed = generateSeedString();
  randomizeBoard();
  document.querySelectorAll('.marked').forEach(ele => ele.classList.remove('marked'));
}

function generateSeedString() {
  let urlParams = new URLSearchParams(window.location.search);
  let seed = Math.round(Math.random() * new Date().getTime())
  //urlParams.set('seed', seed);
  const url = new URL(window.location.href);
  url.searchParams.set('seed', seed);
  window.history.replaceState(null, null, url);
  return seed;
}


function getSeededRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(mySeededRng() * (max - min + 1)) + min;
}
