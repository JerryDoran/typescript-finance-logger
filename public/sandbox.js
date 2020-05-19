"use strict";
var character = 'luigi';
var age = 30;
var isBlackBelt = false;
character = 'mario';
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
var ninjas = [];
ninjas.push('yoshi');
console.log(ninjas);
names.push('toad');
var numbers = [10, 20, 30, 40];
numbers.push(60);
// numbers.push('peach')
console.log(names);
var mixed = ['ken', 4, 'ryu', 8, 9];
mixed.push(10);
mixed.push('toad');
// objects
var ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
};
// explicit types
var char;
var myAge;
var isLoggedIn;
myAge = 40;
isLoggedIn = false;
// union types
var mixedArray = [];
mixedArray.push('luigi');
mixedArray.push(50);
mixedArray.push(false);
var uid;
uid = '123';
uid = 345;
console.log(mixedArray);
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'Mario', age: 20, belt: 'black' };
var count = 25;
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
var greet;
greet = function () {
    console.log('Hello, again');
};
// Allways put default or optional (ex c?: number | string) at the end of the parameter
// list
var add = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'twenty');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// const sayHello = (user: { name: string; uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };
var sayHello = function (user) {
    console.log(user.name + " says hello");
};
// Function Signatures
var greeter;
greeter = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDeets;
logDeets = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
