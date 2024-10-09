// object is a structured datatype that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annoted with a type, often defined using an interface or a type alias.

// type varname (annotations/type) = {property: value}
const person: {firstName: string, lastName: string, age: number} = {
    firstName: "Not here",
    lastName: "Anything",
    age: 30,
};
console.log(`name = ${person.firstName}, age = ${person.age}`);
