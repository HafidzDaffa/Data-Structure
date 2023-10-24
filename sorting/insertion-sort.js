function insertionSort(arr, n)
{
    let i, key, j;
    for(i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;
    }

    function printArray(arr, n)  
    {  
        let i;  
        for (i = 0; i < n; i++)  
        console.log(arr[i] + " ");  
    }

    var arr = [100, 59, 29, 29, 90, 20, 18, 78];
    var n = arr.length;  
   
    insertionSort(arr, n);
    console.log("Sorted insertion-sort: ");  
    printArray(arr, n); 
}