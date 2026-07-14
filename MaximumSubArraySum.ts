function MaximumSubArraySum(arr:number[]):number
{
    let currentSum=arr[0];
    let maximumSum=arr[0];

    for(let i=0;i<arr.length;i++)
    {
        currentSum = Math.max(arr[i],(arr[i]+currentSum));
        maximumSum = Math.max(currentSum,maximumSum)
    }

    return maximumSum;


}
console.log(MaximumSubArraySum([5,4,-1,7,8]))