function isPalindrome(str:string,start:number,end:number):boolean{

    if(start>=end)
    {
       return true;
    }

    if(str[start]!=str[end])
    {
        return false;
    }

    return isPalindrome(str,start+1,end-1)

}

let word = "radar";
if(isPalindrome(word,0,word.length-1))
{
    console.log("it's a palidrome");
}