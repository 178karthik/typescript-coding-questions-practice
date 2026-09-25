function anagram(str1:string,str2:string)
{
if(str1.length!=str2.length)
{
    return false
}
let map = new Map<string,number>();
for(let i=0; i<str1.length;i++)
{
    if(map.has(str1[i]))
    {
      map.set(str1[i],map.get(str1[i])!+1);
    }
    else
    {
        map.set(str1[i],1)
    }
}
for(let j=0;j<str2.length;j++)
{
    
    if(map.has(str2[j]))
    {
        map.set(str2[j],map.get(str2[j])!-1);
    }
    if(map.get(str2[j])==0)
    {
       map.delete(str2[j])
    }
}

 return map.size===0
}
console.log(anagram("NAT","TAN"));