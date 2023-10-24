function swap(arr, x, y)
{
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function selectionSort(arr, n) {
    var i, j, min_idx;

    for(i = 0; i < n - 1 ; i++ ) {
        min_idx = i;

        for(j = i + 1; j < n; j++) {
            if(arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        swap(arr, min_idx, i);
    }
}

function printArray(arr, size) {
    var i;
    for(i = 0; i < size; i++){
        console.log(arr[i] + " ");
    }
    console.log(""); 
}

var arr = [100, 59, 29, 29, 90, 20, 18, 78];
var n = 8;

selectionSort(arr, n);
console.log("Sorted selection-sort:");
printArray(arr, n);
