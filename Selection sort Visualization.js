
let values = [];
let i, j;
let n;

function setup() {
  values = new Array(width);
  createCanvas(windowWidth,windowHeight);
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


  if(i < n-1){
    let minIndex = i;
    let j = i - 1;
    for(let j = i+1; j < n; j++){
      if (values[j] > values[minIndex]){
          minIndex = j;
      }
    }
    // Swap the found minimum element with the first
    // element
    swap(values, minIndex, i);
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
void SelectionSort(int arr[]) {
        int n = arr.length;

        // One by one move boundary of unsorted subarray
        for (int i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;

            // Swap the found minimum element with the first
            // element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
*/
