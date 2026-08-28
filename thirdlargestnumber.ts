function thirdlargest(arr:number[])
{
    let firstLargest :number =  -Infinity;
    let secondLargest :number = -Infinity;
    let thirdlargest:number = -Infinity;
    for(let n of arr)
    {
        if(n>firstLargest)
        {
            thirdlargest =secondLargest;
            secondLargest = firstLargest;
            firstLargest = n;
        }
       else if(n<firstLargest && n>secondLargest)
        {
            thirdlargest = secondLargest;
            secondLargest = n
        }
        else if(n<firstLargest && n<secondLargest &&n>thirdlargest )
        {
            thirdlargest = n;
        }

    }

    console.log(firstLargest)
     console.log(secondLargest)
     console.log(thirdlargest)



}
thirdlargest([6,-1,1,2,3,3,4,5])