
class Boundary {

  constructor(pos, dir, length, A, B, toVacuum) {
    this.pos = pos;
    this.dir = dir.normalize();
    this.length = length;
    this.A = A;
    this.B = B;
    this.toVacuum = toVacuum;
  }

  nrefraction(lambda){
    let n = (this.A + this.B / (lambda*lambda));
    if (this.toVacuum){
      return 1/n;
    }else{
      return n;
    }
  }

  show() {
    let startx = this.pos.x;
    let starty = this.pos.y;
    let endx = this.pos.x + this.length * this.dir.x;
    let endy = this.pos.y + this.length * this.dir.y;
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(startx, starty, endx, endy);
  }
}