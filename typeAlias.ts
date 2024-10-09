// a new way to create a new name for an existing type.
type Mystring = string;


type User = {
    name: string;
    age: number;
    location: string;
  };

  const printUserInfo = (user: User) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
  };

  const result = printUserInfo({ name: "Alex", age: 20, location: "USA" });
  console.log(result);

  type person = {
    Name: string,
    Gender: string,
    Enroll: number,
    email?: string,
  };

  // now we are gonna make an object of a person we can choose weather to include email or not
  const alice: person = {
    Name: "Alice",
    Gender: "Male",
    Enroll: 12,
  };
  const Harman: person = {
    Name: "Harman",
    Gender: "Female",
    Enroll: 320,
    email: "example@service.com"
  };
  // here email is with ? which means that object property is optional to include as in ts whatever is defined has to be used stricly
  
