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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.pname = name;
        this.page = age;
    }
    Person.prototype.updateAge = function (newAge) {
        this.page = newAge;
    };
    return Person;
}());
var p = new Person("Hari", 32);
console.log(p);
p.updateAge(33);
console.log(p);
