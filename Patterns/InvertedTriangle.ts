function InvertedTriangle(n:number)
{
    for(let i=n;i>=1;i--)
    {  
        let row = "";
        for(let j=1;j<=i;j++)
        {
            row=row+"*";
        }
        console.log(row)
    }
}
InvertedTriangle(5)