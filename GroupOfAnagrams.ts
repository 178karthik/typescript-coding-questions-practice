let hash = new Map<string,string[]>();

let str:string[]  = ["eat", "tea", "tan", "ate", "nat", "bat"];

for(let s of str)
{
    const sorted = s.split('').sort().join('');
    if(!hash.has(sorted))
    {
          hash.set(sorted,[]);

    }
    hash.get(sorted)?.push(s)
}

// hash.forEach((key,value)=>{

//     console.log(key);

// })

for(const value of hash.values())
{
    console.log(value)
}

