let input;
let perceptron;
let point;
let desired;
let index = 0;

function setup() {
  createCanvas(400, 400);
  perceptron = new Perceptron(2, 0.0000001);
  background(255);
  point = new Array(100);
  for(let i = 0; i < point.length; i++){
    point[i] = new Point();
  }
}

function draw() {
  for(let i = 0; i < point.length; i++){
    input = [point[i].x ,point[i].y];
    desired = point[i].lable;
    point[i].show();
    perceptron.train(input, desired);
  let guss = perceptron.guss(input);
  if(guss === desired ){
    fill(0,210,0);
     }else{
       fill(210,0,0);
  }
  ellipse(point[i].x, point[i].y,6,6);
  }
}

