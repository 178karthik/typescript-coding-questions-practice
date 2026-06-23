function HouseRobber(arr:number[])
{
    let prev1 = 0;
    let prev2 =0;

    for(let money of arr)
    {
        let curr = Math.max(prev1,prev2+money)
        prev2 = prev1;
        prev1 = curr
    }
    return prev1;
   
}
console.log(HouseRobber([1,2,3,1]))