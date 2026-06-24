function TopKFrequentElements(arr:number[],k:number)
{
    let map = new Map<number,number>();

    for(let i=0;i<arr.length;i++)
    {
        if(map.has(arr[i]))
        {
            map.set(arr[i],map.get(arr[i])!+1)
        }
        else
        {
            map.set(arr[i],1)
        }
    }
  
    const entries = Array.from(map.entries())
    entries.sort((a,b)=>b[1]-a[1]);

    for(let i=0; i<k;i++)
    {
        console.log(entries[i][0])
    }
    

}
console.log(TopKFrequentElements([1, 2, 2, 3, 3, 3],2))