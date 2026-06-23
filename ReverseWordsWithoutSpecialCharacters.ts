function ReverseWordsWithoutSpecialCharacters(str:string)
{
 let words:string[] = str.split(" ");
 let result:string = "";
 for(let word of words)
 {
    let reverse = reverse1(word,0,word.length-1);
    result = result.concat(reverse).concat(" ");

 }

 return result.trim();

}


function reverse1(str:String,left:number,right:number)
{
    let arr = str.split('');
while(left<right)
{
    if(!isLetter(arr[left]))
    {
        left++;
    }
    else if(!isLetter(arr[right]))
    {
        right--;
    }
    else
    {
        let temp = arr[left];
        arr[left] = arr [right];
        arr[right] =temp;
        left++;
        right--;

    }
}
return arr.join('');
}
function isLetter(ch:string):boolean
{
    if((ch>='a'&&ch<='z') || (ch>='A' && ch<='Z')){

        return true;
    }
    else
    {
        return false;
    }

}

console.log(ReverseWordsWithoutSpecialCharacters("I love abc$%d my country"))