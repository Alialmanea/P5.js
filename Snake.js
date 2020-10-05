function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.long = 0;
  this.tail = [];


  this.updata = function (){
    for (var i = 0; i < this.tail.length - 1; i++) {
     this.tail[i] = this.tail[i + 1];
   }
   if (this.long >= 1) {
     this.tail[this.long - 1] = createVector(this.x, this.y);
   }
    this.x +=  int(this.xspeed * scl);
    this.y +=  int(this.yspeed * scl);


    if(this.x >= width){
      this.x = 0;
    }else if (this.x < 0){
      this.x = width;
    }
    if(this.y >= height){
      this.y = 0;
    }else if (this.y < 0){
      this.y = height
    }

    this.x = constrain(this.x, 0,width - scl);
    this.y = constrain(this.y, 0,height - scl);

  }

  this.show = function (){
    fill(255);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
      rect(this.x, this.y, scl, scl);
  }

  this.dir = function (x, y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(food){
    var d = dist(this.x, this.y,food.x,food.y);
    if(d <= 7){
      this.long += 1;

      return true;
    }else{
      return false;
    }
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
      if (d < 1) {
        console.log('Game Over !');
        this.long = 0;
        this.tail = [];
      }
    }
  }
}


var snake;
var scl = 10;
var food;


function pickLocation(){
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  this.food = createVector(floor(random(cols)), floor(random(rows - 10)));
  food.mult(scl);
  return food;
}

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  frameRate(10);
  food = pickLocation();
}

function draw() {
  background(0);
  snake.show();
  snake.updata();
  snake.death();
  fill(255, 0, 100);
  rect(food.x, food.y, 12, 12);
  if(snake.eat(food)){
    food = pickLocation();
  }
}



function keyPressed(){
  if( keyCode == UP_ARROW){
    if(snake.yspeed != 1)
      snake.dir(0, -1);
  }
  else if( keyCode == DOWN_ARROW){
    if(snake.yspeed != -1)
    snake.dir(0, 1);
  }
  else if( keyCode == RIGHT_ARROW){
    if(snake.xspeed != -1)
    snake.dir(1, 0);
  }
  else if( keyCode == LEFT_ARROW){
    if(snake.xspeed != 1)
    snake.dir(-1, 0);
  }
  print(snake.xspeed,snake.yspeed);
}
