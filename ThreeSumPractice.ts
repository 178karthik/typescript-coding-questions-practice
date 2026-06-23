function ThreeSumPractice(arr:number[],target:number)
{
    let triplet : number[][] =[];
       arr.sort((a,b)=>a-b)
for(let i=0;i<arr.length-2;i++)
{
    if(i>=0 && arr[i]==arr[i-1]) continue

    let left =i+1;
    let right = arr.length-1;
    while(left<right)
    {

        let sum = arr[i]+arr[left]+arr[right];

        if(sum==target)
        {
            triplet.push([arr[i],arr[left],arr[right]]);
        
        while(left<right && arr[left]==arr[left+1]) left++;
        while(left<right && arr[right]==arr[right-1]) right --;
        left++;
        right--;
        }

        else if(sum<target)
        {
          left++;
        }
        else{
            right--;
        }
    }
}
return triplet;
}
console.log(ThreeSumPractice([1, 1, 2, 2, 3, 3, 4, 4, 5],6))