class BubbleSort{

static main():void{
    let a:number[] = [10,2,4,3,5];
    const n =a.length;

    for(let i=0; i<n-1;i++)
    {
        for(let j=0; j<n-i-1;j++)
        {
            if(a[j]>a[j+1])
            {
                let temp = a[j];
                a[j]= a[j+1];
                a[j+1] = temp;
            }
        }
    }

    console.log(a.toString())
}
}
BubbleSort.main()