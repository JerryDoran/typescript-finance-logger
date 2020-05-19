let character = 'luigi';
let age = 30;
let isBlackBelt = false;

character = 'mario';

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7));

// arrays
let names = ['luigi', 'mario', 'yoshi'];

let ninjas: string[] = [];

ninjas.push('yoshi');

console.log(ninjas);

names.push('toad');

let numbers = [10, 20, 30, 40];
numbers.push(60);
// numbers.push('peach')

console.log(names);

let mixed = ['ken', 4, 'ryu', 8, 9];

mixed.push(10);
mixed.push('toad');

// objects
let ninja = {
  name: 'Mario',
  belt: 'black',
  age: 30
};

// explicit types
let char: string;
let myAge: number;
let isLoggedIn: boolean;

myAge = 40;
isLoggedIn = false;

// union types
let mixedArray: (string | number | boolean)[] = [];
mixedArray.push('luigi');
mixedArray.push(50);
mixedArray.push(false);

let uid: string | number;

uid = '123';
uid = 345;

console.log(mixedArray);

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  belt: string;
};

ninjaTwo = { name: 'Mario', age: 20, belt: 'black' };

let count: any = 25;

count = true;
console.log(count);

count = 'Mario';
console.log(count);

count = { age: 50, name: 'luigi' };
console.log(count);

console.log('test');

// const greet = () => {
//   console.log('hello world');
// };

let greet: Function;

greet = () => {
  console.log('Hello, again');
};

// Allways put default or optional (ex c?: number | string) at the end of the parameter
// list
const add = (a: number, b: number, c: number | string = 20) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, 'twenty');

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);

// Aliases
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

// const sayHello = (user: { name: string; uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };

const sayHello = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// Function Signatures
let greeter: (a: string, b: string) => void;
greeter = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let logDeets: (obj: { name: string; age: number }) => void;
logDeets = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
