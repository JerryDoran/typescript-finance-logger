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
