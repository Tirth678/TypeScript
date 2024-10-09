// allow you to specify only one specific value and no others
let color:  `red` | `crimson` | `blusha`;
color = `red`; // valid
color = `green`; // invalid
console.log(color);

let myFavNum: 69 | 12 | 11
myFavNum = 69; // valid
myFavNum = 10; // invalid
console.log(myFavNum);

let isBruh: true | false;
isBruh = true; // valid
isBruh = null; // invalid
console.log(isBruh);

