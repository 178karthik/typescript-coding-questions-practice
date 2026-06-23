function RightShiftArrayByKTimes(arr:number[],k:number):number[]
{

let result :number[] = [];
let n = arr.length-1;
result = reverse(arr,0,n);
result = reverse(result,0,k-1);
result = reverse(result,k,n);

return result;
    
}
function reverse(arr:number[],left:number,right:number):number[]
{
    while(left<right)
    {
        let temp = arr[left]
        arr[left] = arr[right];
        arr[right] = temp
        left++;
        right--;
    }
    return arr;
}
console.log(RightShiftArrayByKTimes([1,2,3,4,5],3))