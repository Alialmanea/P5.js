var r = 0;
var b = 0;
var g = 0;

function setup() {
  createCanvas(600,600);  
  
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 0, 255);
  g = map(mouseX, 0, 600, 0,255);
  background(r, g, b);
  fill(255, 0, 255);
  ellipse(mouseX, mouseY, 30, 30);

}
