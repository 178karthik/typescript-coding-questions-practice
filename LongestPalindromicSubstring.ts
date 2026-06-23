 let str1:string = "bbabbad"

 let longest = "";

 for(let i=0;i<str1.length;i++)
 {
    for(let j=i;j<str1.length;j++)
    {
        let substr = str1.substring(i,j+1);
        if(isPalindrome(substr,0,substr.length-1) && substr.length>longest.length)
        {
            longest = substr;
        }
        
    }
 }

 console.log(longest)

 function isPalindrome(str:string,start:number,end:number):boolean
 {
    if(start>=end)
    {
        return true;
    }
    if(str[start]!=str[end])
    {
        return false;
    }
    return isPalindrome(str,start+1,end-1);
 }