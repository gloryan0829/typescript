/*
    Primitive Type
 */
var yourName = 'lee';
var count = 0;
var rate = 0.123;
var nullType = null;
var undefinedType = undefined;
/*
   Object Type
 */
var now = new Date();
var colors = ['red', 'green', 'blue'];
var nums = [1, 3, 5, 7];
var isBoolArr = [true, false, true];
/*
   Class Type
 */
var User = /** @class */ (function () {
    function User() {
        this.name = function () {
            return 'lee';
        };
    }
    return User;
}());
var lee = new User();
console.log(lee.name());
/**
 Object literal
 */
var point = {
    x: 10,
    y: 300
};
// Function
var getLog = function (_line) {
    console.log(_line);
};
console.log(getLog(1));
// Function that return 'any' type
var json = '{"x":10, "y": 20}';
var pared = JSON.parse(json);
pared.a;
console.log(pared);
// Initialization later..
var laterSet;
laterSet = true;
// Multiple Inference
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    if (num > 0) {
        numberAboveZero = num;
    }
}
//# sourceMappingURL=variables.js.map