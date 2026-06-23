function HouseRobberCircular(arr: number[]): number {
    // Edge cases
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return Math.max(arr[0], arr[1]);

    let maxmoneywithoutfirsthouse = HouseRobber1(arr.slice(1));
    let maxmoneywithoutlasthouse = HouseRobber1(arr.slice(0,arr.length-1))
    
    const maxmoney =Math.max(maxmoneywithoutfirsthouse,maxmoneywithoutlasthouse);


    return maxmoney;


}

function HouseRobber1(arr:number[]):number{
    let prev1=0;
    let prev2=0;
    for(let money of arr)
    {
       let curr = Math.max(prev1,prev2+money);
        prev2 =prev1;
        prev1 = curr;

    }
    return prev1;

   
}

console.log(HouseRobberCircular([2, 3, 2])); // Expected: 3 (rob house 2)
console.log(HouseRobberCircular([1, 2, 3, 1])); // Expected: 4 (rob house 2 and 4)
console.log(HouseRobberCircular([1, 2, 3])); // Expected: 3 (rob house 3)
