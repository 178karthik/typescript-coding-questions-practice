function BalancedParanthes(str:string):boolean{
    let result :string[] = [];
    for(let i=0; i<str.length;i++)
    {
        if(str[i]=='{' || str[i]=='(')
        {
            result.push(str[i]);
        }
        if(str[i]=='}' || str[i]==')')
        {
            result.pop();
        }
    }

    if(result.length==0)
    {
        return true;
    }
    return false;
}

console.log(BalancedParanthes("{{({})}"))