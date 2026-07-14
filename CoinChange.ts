function coinChange(coins:number[],amount:number)
{
 
    
     let dp:number[] = new Array(amount+1);
     dp.fill(amount+1)
     dp[0]=0
     for(let coin of coins)
     {
        for(let i=coin;i<=amount;i++)
        {
            dp[i]=Math.min(dp[i],dp[i-coin]+1)
        }
     }
     return dp[amount];
}
console.log(coinChange([1,2,5],15))