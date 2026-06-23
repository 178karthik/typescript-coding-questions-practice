function mergeIntervals(intervals:number[][]):number[][]
{
intervals.sort((a,b)=>a[0]-b[0]);
let currentInterval =intervals[0];

let mergedIntervals:number[][]= [];
mergedIntervals.push(currentInterval);
for(let interval of intervals)
{
    let currentEnd = currentInterval[1];
    if(interval[0]<=currentEnd)
    {
        currentInterval[1]= Math.max(interval[1],currentEnd);
    }
    else{
        currentInterval = interval;
        mergedIntervals.push(currentInterval)
    }

}
return mergedIntervals;

}

let inn = [[8, 10], [1, 3], [15, 18], [2, 6]];
console.log(mergeIntervals(inn));
