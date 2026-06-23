function firstNonRepeatingCharacter(str:string):string
{
  let map = new Map<string,number>();

  for(let i=0;i<str.length;i++)
  {
    if(map.has(str[i]))
    {
      map.set(str[i],map.get(str[i])!+1)
    }
    else
    {
      map.set(str[i],1);
    }
  }


  for(const [key,value] of map.entries())
  {
    console.log(key+":"+value)
  }

  for(const key of map.keys())
  {
    if(map.get(key)==1)
    {
      return key;
    }
  }

  return "";
}
console.log(firstNonRepeatingCharacter("computer"))