// var n: number = 12;
// console.log(n);

// interface person{
//     name: string;
//     age:  number;
// }

// let p1: person={
//     name:"Sugu",
//     age:45
// };

// console.log(p1.name);

// function add(a:number,b:number) : number{
//     return a+b;
// }

// console.log(add(5,3));

class erson{
    pname : string;
    page : number;

    constructor(name: string, age: number){
        this.pname=name;
        this.page=age;
    }

    updateAge(newAge: number){
        this.page=newAge;
    }
}

let person = new erson("Hari",32);
console.log(person);
person.updateAge(33);
console.log(person);