function TwoSum(arr:number[],target:number)
{

    let map = new Map<number,number>();

    for(let i=0; i<arr.length;i++)
    {
        let complement = target-arr[i];
        if(map.has(complement))
        {
            return [map.get(complement),i]
        }
        map.set(arr[i],i)
    }

    return [];
}
console.log(TwoSum([2,5,8],10))