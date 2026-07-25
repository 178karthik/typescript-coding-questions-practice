class poly{
    add(a:number,b:number) :number
   
    add(a:string,b:string) :string
   
    add(a:any,b:any):any
    {
        return a+b;
    }
}
const p = new poly();
console.log(p.add(2,3))
console.log(p.add('h','i'));