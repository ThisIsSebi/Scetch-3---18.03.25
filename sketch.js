// map()
// map(_,_,_,_,_)

let col = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  colBackground = map(mouseX, 0, 600, 0, 255)
  colCircle = map(mouseY, 0,400, 0, 255)
  background(colBackground);
  fill(colCircle);
  ellipse(mouseX, 200, 64, 64);
}
