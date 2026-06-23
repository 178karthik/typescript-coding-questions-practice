function MissingNumber(arr:number[]):number
{
    
   for(let i=0; i<arr.length-1;i++)
   {
    if(arr[i]+1 != arr[i+1])

        return arr[i]+1;

   }
   return -1;
}
console.log(MissingNumber([1,2,3,4,6]));