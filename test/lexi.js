"use strict";

require("../src/eq-array.js");
var lexi = require("../src/lexi.js");
var b = lexi(256);

console.log("lexi(256).values2lexi()");
console.log(b.values2lexi([            ]).equals([          ]));
console.log(b.values2lexi([           0]).equals([         1]));
console.log(b.values2lexi([           1]).equals([         2]));
console.log(b.values2lexi([          37]).equals([        38]));
console.log(b.values2lexi([          38]).equals([        39]));
console.log(b.values2lexi([     37,   0]).equals([    38,  1]));
console.log(b.values2lexi([     37,   1]).equals([    38,  2]));
console.log(b.values2lexi([     37, 255]).equals([    39,  0]));
console.log(b.values2lexi([     38,   0]).equals([    39,  1]));
console.log(b.values2lexi([     38, 255]).equals([    40,  0]));
console.log(b.values2lexi([37,   0,   0]).equals([38,  1,  1]));
console.log(b.values2lexi([37,   0, 255]).equals([38,  2,  0]));
console.log(b.values2lexi([37,   1,   0]).equals([38,  2,  1]));
console.log(b.values2lexi([37, 255,   0]).equals([39,  0,  1]));
console.log();

console.log("lexi(256).lexi2values()");
console.log(b.lexi2values([          ]).equals([            ]));
console.log(b.lexi2values([         1]).equals([           0]));
console.log(b.lexi2values([         2]).equals([           1]));
console.log(b.lexi2values([        38]).equals([          37]));
console.log(b.lexi2values([        39]).equals([          38]));
console.log(b.lexi2values([    38,  1]).equals([     37,   0]));
console.log(b.lexi2values([    38,  2]).equals([     37,   1]));
console.log(b.lexi2values([    39,  0]).equals([     37, 255]));
console.log(b.lexi2values([    39,  1]).equals([     38,   0]));
console.log(b.lexi2values([    40,  0]).equals([     38, 255]));
console.log(b.lexi2values([38,  1,  1]).equals([37,   0,   0]));
console.log(b.lexi2values([38,  2,  0]).equals([37,   0, 255]));
console.log(b.lexi2values([38,  2,  1]).equals([37,   1,   0]));
console.log(b.lexi2values([39,  0,  1]).equals([37, 255,   0]));
console.log();

console.log("lexi(65537) bug");
console.log(lexi(65537).values2lexi([]).equals([]));
console.log(lexi(65537).values2lexi([0]).equals([1]));
console.log(lexi(65537).values2lexi([1]).equals([2]));
console.log(lexi(65537).lexi2values([]).equals([]));
console.log(lexi(65537).lexi2values([1]).equals([0]));
console.log(lexi(65537).lexi2values([2]).equals([1]));
console.log();
