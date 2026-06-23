function TopKSmallestElements(arr:number[],k:number):number[]
{
  return [...arr].sort((a,b)=>a-b).slice(0,k)
}
console.log(TopKSmallestElements([4,1,6,5,7],3))
