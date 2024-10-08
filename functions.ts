// this is a regular function
function addOne(num: number){
    return num+1;
}
const result = addOne(2);
console.log(result);


// arrow function
const double = (x: number,y: number) => x * y;
const result2 = double(1,2);
console.log(result2);


// default parameter values
function greet(person: string){
    return `Hello ${person}`;
}
console.log(greet("huxn"));


// functions return types

// normal function
// arrow function

// void return
// void is the type which does not return anything or any value
function printVoid(message: string): void{
    console.log(`this function dosent give a ${message}`);
}
printVoid("nothing");


// never
// this is when function will not return anything
// never:
// a function has an infinte loop
// a function that throws an error
// variable that can never have a value

function error(msg: string): never {
    while (true) {};
}

// example
let x: never;
function returnValue(): never {
    while(true){};
}
x = returnValue();
// this line will cause a compile time error cause function never returns

