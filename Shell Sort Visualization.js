
let values = [];
let i;
let n;
let gap;

function setup() {
  values = new Array(width);
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < width;i++){
    values[i] = floor(random(height));
  }
  i = 0;
  n = values.length;
  gap = n /2 ;
}


function draw() {
  background(255);
  //draw the vals
  for(let k = 0; k <= width;k++){
    stroke(0);
    strokeWeight(2);
    line(k, 0, k, values[k]);
  }

  if(gap > 0){
    //draw the vals
    for(let i = gap; i < n; i++){
      let temp = values[i];
      let j;
      for(j = i; j >= gap && values[j-gap] < temp ; j -= gap){
          values[j] = values[j - gap];
          //draw the vals
          background(255);
          for(let k = 0; k <= width;k++){
              stroke(0);
              strokeWeight(2);
              line(k, 0, k, values[k]);
            }
      }
      values[j] = temp;
      //draw the vals
      background(255);
      for(let k = 0; k <= width;k++){
          stroke(0);
          strokeWeight(2);
          line(k, 0, k, values[k]);
        }
    }
  }else{
    noLoop();
    print('finish');
  }
  gap = floor(gap / 2);
}

function swap(arr,i, j){
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


/*
void Shellsort(int arr[])
    {
        int n = arr.length;

        // Start with a big gap, then reduce the gap
        for (int gap = n/2; gap > 0; gap /= 2)
        {
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (int i = gap; i < n; i += 1)
            {
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                int temp = arr[i];

                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                int j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                    arr[j] = arr[j - gap];

                // put temp (the original a[i]) in its correct
                // location
                arr[j] = temp;
            }
        }
    }
*/
