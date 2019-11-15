"use strict";
exports.__esModule = true;
var car1 = {
    name: 'Carnival',
    toString: function () {
        return "this car's name is " + this.name;
    }
};
var stu1 = {
    name: "이정주",
    "class": "3학년6반",
    age: 36,
    grade: "A",
    toString: function () {
        return "Name: " + this.name;
    }
};
var printInfo = function (report) {
    console.log(report.toString());
};
printInfo(stu1);
printInfo(car1);
//# sourceMappingURL=interfaceType.js.js.map