class LongestConsecutiveNumbersLength
{
    longestConsecutive(arr:number[]):number
    {
       let map = new Map<number,boolean>();
       for(let i of arr)
       {
          map.set(i,false)
       }
       let longestConsecutiveNumbersLength = 0;
       for(let num of arr)
       {
           let currentLength =1;
           let nextNum = num+1;
           while(map.has(nextNum)&& map.get(nextNum)==false)   
           {
            currentLength++;
            map.set(nextNum,true);
            nextNum++;
           }
           let prevNum = num-1;
           while(map.has(prevNum)&& map.get(prevNum)==false )
           {
            currentLength++;
            map.set(prevNum,true)
            prevNum--;
           }
            longestConsecutiveNumbersLength = Math.max(currentLength,longestConsecutiveNumbersLength) 
       }
       return longestConsecutiveNumbersLength
    }

}

let longestConsecutive = new LongestConsecutiveNumbersLength();
console.log(longestConsecutive.longestConsecutive([-1, 0,1, 2, 8, 10]));