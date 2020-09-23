let boundaries = [];
let rays = [];

function setup() {
  let cnv = createCanvas(450, 300);
  cnv.parent("prism-sketch")
  background(0);

  let raypos = createVector(0, 200);
  let raydir = p5.Vector.fromAngle(-.1);

  for (let l = 380; l <= 740; l += 2) {
    let sigma = 100;
    // let r = 400 * sigma * gaussian(l, 680, sigma);
    // let g = 400 * sigma * gaussian(l, 560, sigma);
    // let b = 400 * sigma * gaussian(l, 420, sigma);
    let r = map(gaussian(l, 680, sigma), 0, gaussian(680, 680, sigma), 0, 255);
    let g = map(gaussian(l, 560, sigma), 0, gaussian(560, 560, sigma), 0, 255);
    let b = map(gaussian(l, 420, sigma), 0, gaussian(400, 420, sigma), 0, 255);
    let c = color(r, g, b);
    console.log(c);

    rays.push(new Ray(raypos, raydir, l / 1000, c));
  }

  // rays.push(new Ray(raypos, raydir, 0, 255));

  let bpos = createVector(150, 200);
  let bdir = p5.Vector.fromAngle(-PI / 3);
  boundaries.push(new Boundary(bpos, bdir, 125, 1.2, 0.05, false));

  let b2pos = createVector(150, 200);
  let b2dir = p5.Vector.fromAngle(0);
  boundaries.push(new Boundary(b2pos, b2dir, 125, 1.2, 0.05, true));

  let b3pos = createVector(275, 200);
  let b3dir = p5.Vector.fromAngle(-TWO_PI / 3);
  boundaries.push(new Boundary(b3pos, b3dir, 125, 1.2, 0.05, true));

}

function gaussian(x, mean, sigma) {
  return (1 / sigma / sqrt(2 * PI)) * exp(-.5 * pow((x - mean) / sigma, 2))
}

function draw() {
  background(0);
  for (let ray of rays) {
    ray.update(mouseX, mouseY);
    curr = ray;
    while (curr) {
      curr.cast(boundaries);
      curr.show();
      curr = curr.refracted;
    }
  }

  for (let b of boundaries) {
    b.show();
  }
}