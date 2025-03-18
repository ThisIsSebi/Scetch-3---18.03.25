// map()
// map(_,_,_,_,_)

let r;
let b;
let extraCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(400,400)
  extraCanvas.background(255,0,0);
}

function draw() {
  r = map(mouseX, 0, windowWidth, 0, 255);
  b = map(mouseX, 0,windowWidth, 255, 0);

  console.log(r);
  colCircle = map(mouseY, 0,400, 0, 255)
  background(r, 0,b);
  fill(colCircle);
  ellipse(mouseX, 300, 64, 64);
}
