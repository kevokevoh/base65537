"use strict";

require("../src/eq-array.js");
var conv = require("../src/conv.js");

console.log("conv(6, 8)");
var six2eight = conv(6, 8);
console.log(six2eight([          ]).equals([       ]));
console.log(six2eight([         5]).equals([      5]));
console.log(six2eight([      1, 0]).equals([      6]));
console.log(six2eight([      1, 1]).equals([      7]));
console.log(six2eight([      1, 2]).equals([   1, 0]));
console.log(six2eight([1, 2, 1, 3]).equals([4, 5, 1]));
console.log();

console.log("conv(8, 6)");
var eight2six = conv(8, 6);
console.log(eight2six([       ]).equals([          ]));
console.log(eight2six([      5]).equals([         5]));
console.log(eight2six([      6]).equals([      1, 0]));
console.log(eight2six([      7]).equals([      1, 1]));
console.log(eight2six([   1, 0]).equals([      1, 2]));
console.log(eight2six([4, 5, 1]).equals([1, 2, 1, 3]));
console.log();

console.log("conv() 6 to 10 to 8");
console.log(conv(6, 10)([1, 2, 1, 3]).equals([2, 9, 7]));
console.log(conv(10, 6)([2, 9, 7]).equals([1, 2, 1, 3]));
console.log(conv(8, 10)([4, 5, 1]).equals([2, 9, 7]));
console.log(conv(10, 8)([2, 9, 7]).equals([4, 5, 1]));
console.log();

console.log("conv() bug");
console.log(conv(5, 65537)([1]).equals([1]));
console.log(conv(65537, 5)([1]).equals([1]));
console.log();
