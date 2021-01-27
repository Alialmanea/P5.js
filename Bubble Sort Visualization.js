
let values = [];
let i, j;
let n;

function setup() {
  values = new Array(width);
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < width;i++){
    values[i] = floor(random(height));
  }
  i = 0;
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


  if(i < n - 1){
    for(let j = 0; j < n - i - 1; j++){
      if(values[j] < values[j+1]){
        swap(values, j, j+1);
      }
    }
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
void bubbleSort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] < arr[j+1]){
                    // swap arr[j+1] and arr[j]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
*/
