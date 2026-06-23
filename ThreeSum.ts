function ThreeSum(arr:number[],target:number):number[]
{ 
    const n = arr.length;
    for(let i=0;i<n-2;i++)
    {
        for(let j=i+1;j<n-1;j++)
        {
            for(let k=j+1; k<n;k++)
            {
               if((arr[i]+arr[j]+arr[k])==target)
               {
                   return[i,j,k];
               }
            }
        }
    }
    return []
}
console.log(ThreeSum([1,2,3,4],9))