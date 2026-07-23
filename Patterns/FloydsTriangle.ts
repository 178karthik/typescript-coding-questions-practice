function floydsTriangle(n:number)
{
    let num =1
  for(let i=1;i<=n;i++)
  {
    let row = "";
    for(let j=1;j<=i;j++)
    {
        row = row + num + " ";
        num++;
    }
    console.log(row)
  }
}
floydsTriangle(5)