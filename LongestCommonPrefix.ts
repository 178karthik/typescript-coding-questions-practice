let str :string[] = ["flower", "flow", "flight"];
let prefix = str[0];

for(let s of str)
{
    while(s.indexOf(prefix)!=0)
    {
       prefix = prefix.substring(0,prefix.length-1)
}
}
console.log(prefix)