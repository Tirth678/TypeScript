// In TypeScript, a tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

let myTuple: [string, number] = ["hello", 12];
let [first, second] = myTuple;
console.log(first);
console.log(second);
