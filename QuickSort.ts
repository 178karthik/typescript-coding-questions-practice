function QuickSort(arr:number[],low:number,high:number):number[]
{
if(low<high)
{
    let pivotIndex = partition(arr,low,high)
    QuickSort(arr,low,pivotIndex-1);
    QuickSort(arr,pivotIndex +1,high)
}

return arr;

}
function partition(arr:number[],low:number,high:number):number
{
    let pivot = arr[high];
    let leftpointer = low;
    let rightpointer = high;
    while(leftpointer<rightpointer)
    {
        while(arr[leftpointer]<=pivot && leftpointer<rightpointer)
        {
            leftpointer++;
        }
        while(arr[rightpointer]>=pivot && leftpointer<rightpointer)
        {
            rightpointer--;
        }

        swap(arr,leftpointer,rightpointer);
    }
    swap(arr,leftpointer,high)

    return leftpointer;
}
function swap(arr:number[],low:number,high:number)
{
let temp = arr[high];
arr[high] = arr[low];
arr[low] = temp;
}
let arr = [1,4,5,89,0,2,7]
let sorted = QuickSort(arr,0,arr.length-1)
console.log(sorted)