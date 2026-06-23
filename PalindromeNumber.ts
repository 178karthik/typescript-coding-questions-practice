let num = 121;
let originalNum = num;
let sum = 0;
while(num > 0){
  let digit = num % 10;
    sum = (sum * 10) + digit;
    num = Math.floor(num / 10);
}
if(sum == originalNum)
{
    console.log("it's a palindrome number " + `${sum}`)
}
else
{
     console.log("it's not a palindrome number " + `${sum}`)
}