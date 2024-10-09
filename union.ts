// unions are used to define a type that can have one of several possible types are useful when we want to allow a variable or parameter to accept multiple values
// | to define a union

let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  first: "HuXn",
  last: "WebDev",
  age: 29,
  email: "something@fmail.com",
  password: `nothingbut123`
};

console.log(user);

const item: (number | string)[] = [1, 3, "hello"];
console.log(item);

