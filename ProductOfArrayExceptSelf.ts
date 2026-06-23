function ProductOfArrayExceptSelf(arr:number[])
{
    let product:number[] = new Array(arr.length);
    product.fill(1);

    let leftProduct = 1;
    for(let i=0; i<arr.length;i++)
    {
      product[i] = leftProduct;
      leftProduct *= arr[i];
    }
    let rightProduct = 1;
    for(let j=arr.length-1;j>=0;j--)
    {
      product[j]*=rightProduct
      rightProduct*= arr[j];
    }

    return product;
}

console.log(ProductOfArrayExceptSelf([1,2,3,4]));

