const directions = ["Up", "Left", "Down", "Right"];

class Ball {
  constructor(cellSize) {
    this.x = 0;
    this.y = 0;
    this.cellSize = cellSize;
    this.dir = 3;
    this.live = true;
  }
  
  draw() {
    const realX = this.x * this.cellSize + this.cellSize/2;
    const realY = this.y * this.cellSize + this.cellSize/2;
    fill(0);
    circle(realX,realY,this.cellSize/2);
  }
  
  move() {
    switch(this.dir) {
      case 0:
        this.y--;
        break;
      case 1:
        this.x--;
        break;
      case 2:
        this.y++;
        break;
      case 3:
        this.x++;
        break;
    }
    if (this.x * this.cellSize > width || this.y * this.cellSize > height ||
       this.x < 0 || this.y < 0) {
      this.live = false;
    }
  }
  
  collide(cell) {
    switch(cell.type) {
      case 1:
        switch (this.dir) {
            case 0:
              this.dir = 3;
              break;
            case 1:
              this.dir = 2;
              break;
            case 2:
              this.dir = 1;
              break;
            case 3:
              this.dir = 0;
              break;
        };
        break;
      case 2:
        switch (this.dir) {
            case 0:
              this.dir = 1;
              break;
            case 1:
              this.dir = 0;
              break;
            case 2:
              this.dir = 3;
              break;
            case 3:
              this.dir = 2;
              break;
        }
        break;
    }
  }
}