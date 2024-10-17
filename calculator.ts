// Create a function and develop a calculator app.



function calc(n1 : number , op: string, n2 : number){
    if(op=="+"){
        return n1+n2;
    }
    else if(op=="-"){
        return n1-n2;
    }
    else if(op=="*"){
        return n1*n2;
    }
    else if(op=="/"){
        return n1/n2;
    }
}


console.log(calc(10,"*",5));
console.log(calc(10,"-",5));
console.log(calc(10,"+",5));
console.log(calc(10,"/",5));