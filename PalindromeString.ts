function isPalindrome(str:string):boolean
{
 let reverse : string="";

 for(let i=str.length-1;i>=0;i--)
 {
    reverse= reverse+str[i];
 }

 if(reverse.toLowerCase()===str.toLowerCase())
 {
    return true;
 }
 return false;
}

let word:string = "radara";
if(isPalindrome(word))
{
    console.log("it's a palindrome")
}
else{
    console.log("it's not a palindrome")
}