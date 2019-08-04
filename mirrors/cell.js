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
    switch(this.type) {
      case 1: 
        strokeWeight(4);
        stroke(0);
        line(this.x+2,this.y+this.size-2,this.x+this.size-2,this.y+2);
        break;
      case 2: 
        strokeWeight(4);
        stroke(0);
        line(this.x+2,this.y+2,this.x+this.size-2,this.y+this.size-2);
        break;
    }
    
  }
  
  isColliding(ball) {
    const ballX = ball.x * ball.cellSize;
    const ballY = ball.y * ball.cellSize;
    return ballX === this.x && ballY === this.y;
  }
  
  
}
