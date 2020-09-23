

class Ray {
  constructor(pos, dir, lambda, color) {
    this.pos = pos;
    this.dir = dir.normalize();
    this.lambda = lambda;
    this.color = color;
    this.refracted;
  }

  show() {
    stroke(this.color);
    strokeWeight(1)
    if (this.refracted) {
      line(this.pos.x, this.pos.y, this.refracted.pos.x, this.refracted.pos.y);
    }
    else{
      line(this.pos.x, this.pos.y, this.pos.x + 400*this.dir.x, this.pos.y + 400*this.dir.y);
    }
  }

  equals(ray) {
    return (this.pos.equals(ray.pos) && this.dir.equals(ray.dir) && this.labmbda == ray.lambda)
  }

  update(x, y) {
    this.dir.set(x - this.pos.x, y - this.pos.y);
    this.dir.normalize();
  }

  intersect(boundary) {
    const x1 = this.pos.x;
    const y1 = this.pos.y;
    const x2 = this.pos.x + this.dir.x;
    const y2 = this.pos.y + this.dir.y;

    const x3 = boundary.pos.x;
    const y3 = boundary.pos.y;
    const x4 = boundary.pos.x + boundary.length * boundary.dir.x;
    const y4 = boundary.pos.y + boundary.length * boundary.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return;
    }
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    if (t > 0 && u > 0 && u < 1) {
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt.add(this.dir);
    } else {
      return;
    }
  }

  cast(boundaries) {
    let closestP = null;
    let closestB = null;
    let record = Infinity;
    for (let b of boundaries) {
      let pt = this.intersect(b);
      if (pt) {
        let d = p5.Vector.dist(this.pos, pt);
        if (d < record) {
          record = d;
          closestP = pt;
          closestB = b;
        }
      }
    }

    if (!closestP) {
      this.refracted = null;
      return;
    }

    let newDir = this.refract(closestB);
    /*Trying out decreasing the transmittance intensity */
    let incidence = createVector(closestB.dir.y, -closestB.dir.x);
    if (incidence.dot(this.dir) < 0) {
      incidence.mult(-1);
    }
    let thetai = this.dir.angleBetween(incidence);
    let R0 = pow(1-closestB.nrefraction(this.lambda)/(1+closestB.nrefraction(this.lambda)),2);
    let reflectance = R0 + (1 -R0)*pow(1-cos(thetai),5);
    let T = 1-reflectance;
    let newc = color(this.color);
    newc.setAlpha(T*255);
    this.refracted = new Ray(closestP, newDir, this.lambda, this.color);
    return;
  }

  refract(boundary) {
    let incidence = createVector(boundary.dir.y, -boundary.dir.x);
    if (incidence.dot(this.dir) < 0) {
      incidence.mult(-1);
    }
    let thetai = this.dir.angleBetween(incidence);
    let thetar = asin(sin(thetai) / boundary.nrefraction(this.lambda));

    let newx = incidence.x * cos(thetar) + incidence.y * sin(thetar);
    let newy = -incidence.x * sin(thetar) + incidence.y * cos(thetar);

    let dir = createVector(newx, newy);
    return dir.normalize();
  }

}