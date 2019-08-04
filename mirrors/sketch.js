// The ball will travel right 
// from the top-left of the grid.
// It will respawn when it goes 
// off the grid.
// Click to create and change mirrors.
// The ball will bounce when it
// collides with a mirror.
// Use the slider to change the speed.

//TODO: Save/load layout, undo most recent change

const cells = [];
const CELL_SIZE = 50;
let ball
let speedSlider;
let highScore = 0;

function setup() {
  createCanvas(400, 400);
  for (let x = 0; x < width; x += CELL_SIZE) {
    for (let y = 0; y < height; y += CELL_SIZE) {
      cells.push(new Cell(x,y,CELL_SIZE));
    }
  }
  ball = new Ball(CELL_SIZE);
  speedSlider = createSlider(1,100,50,1);
}

function draw() {
  // actually frequency of updates, inverse speed
  const speed = round(map(speedSlider.value(),1,100,30,1));
  if (frameCount % speed == 0) {
    ball.move();
    if (!ball.live) {
      ball = new Ball(CELL_SIZE);
    }
  }
  for (const cell of cells) {
    cell.draw();
    if (cell.isColliding(ball) && frameCount % speed == 0) {
      // visualise collision check
      //fill(255,0,0);
      //square(cell.x,cell.y,cell.size);
      ball.collide(cell);
    }
  }
  ball.draw();
  noStroke();
  if (ball.score > highScore) {
    highScore = ball.score;
  }
  text("Score: " + ball.score,0,10);
  text("High Score: " + highScore,0,20);
}

function mouseClicked() {
  // find clicked cell
  const cell = cells.find(c => {
    const xDiff = mouseX - c.x;
    const yDiff = mouseY - c.y;
    return xDiff < CELL_SIZE && xDiff > 0 && 
      yDiff < CELL_SIZE && yDiff > 0;
  });
  if (cell) {
    cell.click();
  }
}

function saveLayout() {
  let out = "";
  for (const cell of cells) {
    out += cell.type;
  }
  return out;
}

function loadLayout(str) {
  nums = [];
  for (let i = 0; i < str.length; i++) {
    const num = parseInt(str.charAt(i));
    if (num < 0 || num > 2) {
      alert("Error loading! Input should be a string of 0s, 1s and 2s!")
      return;
    }
    nums.push(num);
  }
  if (nums.length !== cells.length) {
    alert("Error loading! Input should be " + cells.length + " digits long!")
    return;
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].type = nums[i];
  }
}
const saveBox = document.getElementById("saveload");
const saveBut = document.getElementById("save");
saveBut.addEventListener("click", () => {
  saveBox.value = saveLayout();
});
const loadBut = document.getElementById("load");
loadBut.addEventListener("click", () => {
  loadLayout(saveBox.value);
})