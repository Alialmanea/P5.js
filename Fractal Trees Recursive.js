let len=150;

function setup() {
  createCanvas(600,500);
}

function draw() {
  background(51);
  stroke(255);
  translate(300,height);
  //console.log("angle:"+slider);
  branch(150);
}
 
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len >6){
    push();
    rotate(PI/8);
    branch(len * 0.67);
    pop();
    push();
    rotate(-(PI/8));
    branch(len * 0.67);
    pop();
  }
}
