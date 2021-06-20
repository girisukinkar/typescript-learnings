"use strict";
var character = "marios";
var age = 30;
var isBlackBelt = false;
var mixed = [];
mixed.push('hello');
mixed.push(true);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(2));
//This function has a optional paramtere called c and returns a number type value
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a, b);
    console.log(c);
    return a + b;
};
add(10, 20, 10);
