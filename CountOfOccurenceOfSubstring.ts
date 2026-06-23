let s = "ababccccababb";
let index =0;
let count =0;
let sub = "ab"

while(index!=-1)
{
    index = s.indexOf(sub,index);
    if(index!=-1)
    {
        count++;
        index = index+ sub.length;
    }
}
console.log("The count is"+ `${count}`)