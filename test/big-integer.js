"use strict";

require("../src/eq-array.js");
var bigInteger = require("../src/big-integer.js");

console.log("bigInteger(10).increment()");
var ten = bigInteger(10);
console.log(ten.increment([]).equals([1]));
console.log(ten.increment([1]).equals([2]));
console.log(ten.increment([8]).equals([9]));
console.log(ten.increment([9]).equals([1, 0]));
console.log(ten.increment([5, 6, 7]).equals([5, 6, 8]));
console.log(ten.increment([9, 9, 9, 9]).equals([1, 0, 0, 0, 0]));
console.log();

console.log("bigInteger(10).decrement()");
console.log(ten.decrement([1]).equals([]));
console.log(ten.decrement([2]).equals([1]));
console.log(ten.decrement([9]).equals([8]));
console.log(ten.decrement([1, 0]).equals([9]));
console.log(ten.decrement([5, 6, 8]).equals([5, 6, 7]));
console.log(ten.decrement([1, 0, 0, 0, 0]).equals([9, 9, 9, 9]));
console.log();

console.log("bigInteger(10).add()");
console.log(ten.add([], []).equals([]));
//console.log(ten.add([], [1]).equals([1]));
console.log(ten.add([1], []).equals([1]));
console.log(ten.add([2], [4]).equals([6]));
console.log(ten.add([9, 9], [9, 9]).equals([1, 9, 8]));
//console.log(ten.add([1, 3, 7], [2, 8, 0, 5]).equals([2, 9, 4, 2]));
console.log(ten.add([2, 8, 0, 5], [1, 3, 7]).equals([2, 9, 4, 2]));
console.log();

console.log("bigInteger(10).multiplyX()");
console.log(ten.multiplyX([2, 7, 3], 8).equals([2, 1, 8, 4]));
console.log(ten.multiplyX([9, 9], 9).equals([8, 9, 1]));
console.log(ten.multiplyX([9, 9], 1).equals([9, 9]));
console.log(ten.multiplyX([9, 9], 0).equals([]));
console.log();

console.log("bigInteger(10).multiply()");
console.log(ten.multiply([], []).equals([]));
console.log(ten.multiply([], [1]).equals([]));
console.log(ten.multiply([], [73]).equals([]));
console.log(ten.multiply([1], [1]).equals([1]));
console.log(ten.multiply([1], [6]).equals([6]));
console.log(ten.multiply([6], [1]).equals([6]));
console.log(ten.multiply([1, 0], [1, 0]).equals([1, 0, 0]));
console.log(ten.multiply([6, 1], [6]).equals([3, 6, 6]));
console.log(ten.multiply([2, 7, 3], [8]).equals([2, 1, 8, 4]));
console.log(ten.multiply([7, 3], [2, 2]).equals([1, 6, 0, 6]));
console.log();

console.log("bigInteger(10).represent()");
console.log(ten.represent(0).equals([]));
console.log(ten.represent(1).equals([1]));
console.log(ten.represent(9).equals([9]));
console.log(ten.represent(10).equals([1, 0]));
console.log(ten.represent(35981).equals([3, 5, 9, 8, 1]));
console.log();

console.log("bigInteger(8).<most things>");
var eight = bigInteger(8);
console.log(eight.increment([]).equals([1]));
console.log(eight.increment([1]).equals([2]));
console.log(eight.increment([6]).equals([7]));
console.log(eight.increment([7]).equals([1, 0]));
console.log(eight.increment([5, 6, 5]).equals([5, 6, 6]));
console.log(eight.increment([7, 7, 7, 7]).equals([1, 0, 0, 0, 0]));
console.log(eight.decrement([1]).equals([]));
console.log(eight.decrement([2]).equals([1]));
console.log(eight.decrement([7]).equals([6]));
console.log(eight.decrement([1, 0]).equals([7]));
console.log(eight.decrement([5, 6, 6]).equals([5, 6, 5]));
console.log(eight.decrement([1, 0, 0, 0, 0]).equals([7, 7, 7, 7]));
console.log();

console.log("bigInteger(8).add()");
console.log(eight.add([], []).equals([]));
//console.log(eight.add([], [1]).equals([1]));
console.log(eight.add([1], []).equals([1]));
console.log(eight.add([4, 4, 6], []).equals([4, 4, 6]));
console.log(eight.add([4, 4, 6], [1]).equals([4, 4, 7]));
console.log(eight.add([4, 4, 7], [1]).equals([4, 5, 0]));
console.log(eight.add([4, 4, 6], [2]).equals([4, 5, 0]));
console.log(eight.add([4, 4, 6], [3]).equals([4, 5, 1]));
console.log();

console.log("bigInteger(8).multiply()");
console.log(eight.multiply([1, 0], [1, 0]).equals([1, 0, 0]));
console.log(eight.multiply([6, 1], [6]).equals([4, 4, 6]));
console.log();

console.log("bigInteger(8).represent()");
console.log(eight.represent(0).equals([]));
console.log(eight.represent(64).equals([1, 0, 0]));
console.log(eight.represent(297).equals([4, 5, 1]));
console.log();

console.log("bigInteger(65537)");
console.log(bigInteger(65537).multiply([], [4, 0, 4, 4, 1, 2, 2]).equals([]));
console.log(bigInteger(65537).multiply([1], [4, 0, 4, 4, 1, 2, 2]).equals([4, 0, 4, 4, 1, 2, 2]));
console.log();
