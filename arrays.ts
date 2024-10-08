// type of object that can store multiple values of same data type in ts you have to specify the datatype
// using square bracket notation
// using array<type>

const nums: number[] = [1,2,3];
console.log(nums);

const arrays: string[] = ["this", "is", "nothing"];
console.log(arrays);

const newN: string[] = [];
newN.push("mouse");
console.log(newN);


// new way to define any type of array
const items : Array<string> = [];
console.log(items);


const items2: Array<number> = [1,2,3,"nothing"];
// string will not be taking as a element
console.log(items2);

// multi-dimensional arrays
