"use strict";
let character = "marios";
let age = 30;
let isBlackBelt = false;
let mixed = [];
mixed.push('hello');
mixed.push(true);
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(2));
//This function has a optional paramtere called c and returns a number type value
const add = (a, b, c = 10) => {
    console.log(a, b);
    console.log(c);
    return a + b;
};
add(10, 20, 10);
//TYPE ALIAS
