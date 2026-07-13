function conflictIntervals(intervals:number[][]):number[][]
{
intervals.sort((a,b)=>a[0]-b[0]);
let conflicts :number[][]=[];

for(let i=0; i<intervals.length-1;i++)
{
    if(intervals[i][1]>intervals[i+1][0])
    {
         conflicts.push(intervals[i])
         conflicts.push(intervals[i+1])
    }
}
return conflicts;
}
console.log(conflictIntervals([[1,3], [2,4],[5,6],[7,8],[4,7]]))