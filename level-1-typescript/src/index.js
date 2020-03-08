"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
// 3 Basic Types
var isOpen = true;
var username = 'Jack';
var height = 168;
var list = [1, 2, 3, 4];
var job = interfaces_1["default"].Developer;
var meaningless1 = 'sdfa';
var meaningless2 = 254;
// 4 TypeScript At Compile Time With Parcel
// tsc
// parcel-plugin-typescript
// 5 Functions In TypeScript
// const sayHello = (word: string): string => {
//   console.log(word)
//   return word
// }
// sayHello('hi')
// 6 Optional, Default & Rest Params
// * ? for optional
// * ...rest for Rest Params
var sayHello = function (word) {
    if (word === void 0) { word = 'Hello'; }
    console.log(word);
    return word;
};
// sayHello('dfasd')
// 7 Implicit Types
// let newName = 'John'
// newName = 'Sherlock' // good
// newName = 8 // wrong
// 8 Union Types
// | for union type
var newName = 'John';
newName = 'Sherlock'; // good
newName = 8; // good
var newName2 = newName;
// newName2 = 'Jack' // !!wrong
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
// Null Types
// strict non type check
// 9 Interfaces
var sayPerson = function (_a) {
    var name = _a.name, age = _a.age, job = _a.job;
    // console.log(name, age, job)
    return name + ", " + age + ", " + job;
};
sayPerson({
    name: 'John Watson',
    age: 40
});
// 10 Enums
// Numeric Enums
var Sport;
(function (Sport) {
    Sport[Sport["Basketball"] = 0] = "Basketball";
    Sport[Sport["Football"] = 1] = "Football";
    Sport[Sport["Tennis"] = 2] = "Tennis"; // 2
})(Sport || (Sport = {}));
// console.log(Sport.Tennis)
var makeSport = function (sport) {
    console.log(sport);
};
// makeSport(-1) // work!
// makeSport(0)
// makeSport(3) // work!
// String Enums
var Sport2;
(function (Sport2) {
    Sport2["Basketball"] = "BASKETBALL";
    Sport2["Football"] = "FOOTBALL";
    Sport2["Tennis"] = "TENNIS";
})(Sport2 || (Sport2 = {}));
// console.log(Sport2.Tennis)
var makeSport2 = function (sport) {
    console.log(sport);
};
// makeSport2(Sport2.Football) // work!
// makeSport2('FOOTBALL') // not work!
// 11 Classes In TypeScript
var Team = /** @class */ (function () {
    // SAME AS public teamName: string
    // private teamName: string
    // readonly teamName: string
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log("Goal for " + this.teamName);
    };
    return Team;
}());
var lakers = new Team('Lakers');
console.log(lakers.score());
// 12 Modules In TypeScript
// import { Person } from 'interfaces'
// 13 TSC
// npm install --save-dev typescript
// tsc
// tsconfig.json
// 14 Generics
// 15 Duck Typing & Classes with Interfaces
// 16 TypeScript with WebPack
// 17 Create React App with TypeScript
// 18 Where To Go Next
