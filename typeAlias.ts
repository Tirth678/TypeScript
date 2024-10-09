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
