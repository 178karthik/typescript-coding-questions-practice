interface user{
    name:string,
    age:number
    sum(a:number,b:number):number
}
class Student implements user
{
    name: string="karthik"
    age: number=20;
    sum(a:number,b:number):number
    {
        return a+b;
    }
}

let arr :number[] = [1,3,3];
let arrString :Array<string> = ['a','b'];
const student = new Student();
console.log(student.name)
console.log(student.sum(2,3))
console.log(arrString)