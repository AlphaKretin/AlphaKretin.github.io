const types = ["Blank", "/", "\\"];

class Cell {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    if (x == 0 && y == 0) {
      //ensure clean start
      this.type = 0;
    } else {
      // start with random layout
      this.type = round(random(0,2));
    }
    this.size = size;
  }
  
  click() {
    this.type++;
    this.type = this.type % types.length;
  }
  
  draw() {
    fill(255);
    strokeWeight(2);
    stroke(100,100);
    square(this.x,this.y,this.size);
    if (this.type > 0) {
      strokeWeight(4);
      stroke(0);
      push();
      translate(this.x,this.y);
      if (this.type == 2) {
        translate(this.size,0);
        rotate(HALF_PI);
      }
      line(2,this.size-2,this.size-2,2);
      pop();
    }
  }
  
  isColliding(ball) {
    const ballX = ball.x * ball.cellSize;
    const ballY = ball.y * ball.cellSize;
    return ballX === this.x && ballY === this.y;
  }
  
  
}
