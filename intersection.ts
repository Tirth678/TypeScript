// a way to combine to combine multiple types into one and define that includes all the properties and methods of each constitute type

// 1.
type Person = {
    name: string,
    age: number,
    employeeId: number,
};

type Employee = {
    id: number,
    ClassNo: number,
    divsion: string,
};

// 2.

type PersonAndEmployee = Person & Employee;


// 3.
const merge: PersonAndEmployee = {
    name: "Aniket",
    age: 12,
    employeeId: 46,
    id: 32,
    ClassNo: 12,
    divsion: "A",
};
