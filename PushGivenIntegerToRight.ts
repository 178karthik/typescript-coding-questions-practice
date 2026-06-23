function PushGivenIntegerToRight(arr:number[],num:number)
{
let result : number[] = [];
let k =0;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]!=num)
    {
result.push(arr[i])
    }
    else{
        k++;
    }
}

for( let j=0 ;j<k;j++)
{
    result.push(num);
}

return result;



}
console.log(PushGivenIntegerToRight([1,2,0,2,1,0,2,1],-1))