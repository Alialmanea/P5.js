function Bird(){
  this.y = width/2;
  this.x = 65;
  this.gravity = 0.5;
  this.lift = -10;
  this.velocity = 0;
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 35, 25);
  };
  
  this.updata = function(){
    this.velocity += this.gravity;  
    this.velocity *= 0.9; // changing the velocity 
    this.y += this.velocity;
    
    if (this.y > height){
      this.y = height;
      this.velocity = 0;
    }
    
    if (this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
    
  };
  
  this.up = function(){
    this.velocity += this.lift;
    //console.log(this.velocity);
  };
  
}

function Pipe(){
this.top = random(height /2);
this.bottom = random (height /2);
this.w = 20; 
this.x = width;
this.speed = 2;
this.hightlights = false;

this.show = function(){
  fill(255);
  if(this.hightlights){
    fill(255, 0, 0);
  }
  rect(this.x, 0, this.w, this.top);
  rect(this.x, height - this.bottom , this.w, this.bottom);
  
};

 this.updata = function(){
   this.x -= this.speed;
 };
 
 this.offSceen = function(){
   if(this.x < - this.w){
     return true;
   
   }
   else{
     return false;
   } 
   
 };
 
 this.hits = function(bird){
   if(bird.y < this.top || bird.y > height - this.bottom ){ // y position
     if (bird.x > this.x && bird.x < this.x + this.w){
       this.hightlights = true;
       return true;
     }
   }else{
     this.hightlights = false;
     return false;
   }
 };


}


var bird;
var pipes =[];
function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}


function draw() {
  background(0);
  for (var i = pipes.length-1 ; i > 0; i-- ){
    pipes[i].show();
    pipes[i].updata();
    
    if (pipes[i].offSceen()){
      pipes.splice(i, 1);
    }
    
    if (pipes[i].hits(bird)){
      console.log("opps Hit ");
    }
  }
  
  bird.show();
  bird.updata();
  
  if (frameCount % 100 == 0){
    pipes.push(new Pipe());
  }

  
  //console.log("The length of pipes is :",pipes.length);
}


function mousePressed() {
  if (mouseButton == LEFT) {
    //console.log("Left Mouse Button clicked");
    bird.up();  
  }
}
