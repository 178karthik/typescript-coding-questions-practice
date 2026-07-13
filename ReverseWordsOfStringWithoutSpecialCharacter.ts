function reversewords(str:string)
{
    let words:string[] = str.split(" ");
    let result = "";
    for(let word of words)
    {  
        
        result = result.concat(reverse2(word)).concat(" ");
    }
    return result;
}
function isLetter2(ch:string):boolean
{
    if((ch>='a' && ch<='z') ||(ch>='A' && ch<='Z'))
    {
        return true;
    }
    return false;
}
function reverse2(str:string):string
{
let arr = str.split('');
let left =0;
let right = str.length-1;
while(left<right)
    {
       if(!isLetter2(arr[left]))
       {
        left++;
       }
       else if(!isLetter2(arr[right]))
       {
        right--;
       }
       else{
       let temp = arr[left];
       arr[left] = arr[right];
       arr[right] = temp;
       left++;
       right--;
       }
    } 

    return arr.join('');

}
console.log(reversewords("I love abc$%d my country"))