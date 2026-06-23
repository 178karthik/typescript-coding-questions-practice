class BestTimeToBuyAndSellStocks{
    static main():void{
        let prices: number[] = [7, 1, 5, 3, 6,9, 4];

         let minPrice = Number.MAX_VALUE;
         let maxProfit : number = 0 ;

         for(const price of prices)
         {   
        
            if(price<minPrice)
            {
                minPrice=price;
            }
            let profit = price-minPrice;
            if(profit>maxProfit)
            {
              maxProfit= profit;
            }
         }
          console.log(maxProfit)
    }
}
BestTimeToBuyAndSellStocks.main();