// In TypeScript, annotations are used to specify the data type of a variable, parameter, function return value, and other types of values. Annotations help developers catch errors early in development by allowing them to specify what types of values can be assigned to a given variable or passed as an argument to a function.

// Annotations are specified using a syntax that involves placing a colon : followed by the data type after the variable name or argument name. For example, the following code declares a variable named name with a type of string:
// numbers
let number: number = 32;
number = 43;
console.log(number);
// strings
let NewName: string = "lol";
NewName = "HuXn";
console.log(NewName);
// boolean
let MyChoice: boolean = true;
MyChoice = false;
console.log(MyChoice);

// infering
// will choose auto datatype unless not defined
let bruh = 32;
console.log(typeof(bruh)); // it is defined as number

let bruhtwo = "let it be a string";
console.log(typeof(bruhtwo)); // it is defined as string

let bruhthree = true;
console.log(typeof(bruhthree)); // it is defined as boolean

// any type 'warning'
let random: any = "32";
random = "bruh";
console.log(typeof(random));
