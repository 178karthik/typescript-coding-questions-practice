function MergeTwoSortedArrays(a:number[],b:number[]):number[]
{
    let i=0;
    let j=0;
    let k=0;

    let c:number[] = new Array(a.length+b.length);

    while(i<a.length && j<b.length)
    {
        if(a[i]<=b[j])
        {
            c[k++] = a[i++]
        }
        else
        {
            c[k++] = b[j++]
        }
    }

    while(i<a.length)
    {
        c[k++] = a[i++]
    }

    while(j<b.length)
    {
        c[k++] =b[j++]
    }

   return c;
}

console.log(MergeTwoSortedArrays([1,3,5,7],[2,4,6,8]))