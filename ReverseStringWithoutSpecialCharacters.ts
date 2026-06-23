function ReverseStringWithoutSpecialCharacters(str:string)
{

let left =0;
let right = str.length-1;

let arr = str.split('');

while(left<right)
{

     if(!isCharacter(arr[left]))
     {
        left++;
     }
     else if(!isCharacter(arr[right]))
     {
        right--;
     }

     let temp =arr[left];
     arr[left] = arr[right];
     arr[right] = temp;
     left++;
     right--;


}
return arr.join('');
}
function isCharacter(ch:string)
{
if((ch>='a' && ch <='z') ||ch>='A' && ch<='Z' )
{
  return true
}
return false;
}
console.log(ReverseStringWithoutSpecialCharacters("a,b$c"));