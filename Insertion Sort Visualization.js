
let values = [];
let i, j;
let n;

function setup() {
  values = new Array(width);
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < width;i++){
    values[i] = floor(random(height));
  }
  i = 1;
  j = 0;
  n = values.length;
}


function draw() {
  background(255);

  //draw the vals
  for(let k = 0; k <= width;k++){
    stroke(0);
    strokeWeight(2);
    line(k, 0, k, values[k]);
  }


  if(i < n){
    let key = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] < key) { 
        values[j + 1] = values[j];
        j = j - 1;
    }
    values[j + 1] = key;
  }else{
    noLoop();
  }
  i++;
}

function swap(arr,i, j){
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


/*
void Insertion Sort(int arr[]){
       int n = arr.length;
       for (int i = 1; i < n; ++i) {
           int key = arr[i];
           int j = i - 1;

           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j = j - 1;
           }
           arr[j + 1] = key;
       }
   }
*/
