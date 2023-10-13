function bubbleSort(arr, n)
{
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        if (swapped == false)
        break;
    }
}
 
function printArray(arr, size)
{
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
}
 
var arr = [100, 59, 29, 29, 90, 20, 18, 78];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);