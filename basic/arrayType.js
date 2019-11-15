"use strict";
exports.__esModule = true;
var carMakers = ['ford', 'toyota', 'bmw'];
var dates = [new Date(), new Date()];
var carsByMake = [['model1', 'model2']];
// type inference (추론) 하면 string type 이라는 것을 알 수 있음
var car = carMakers[0];
var myCar = carMakers.pop();
// carMakers.push(200);
// map 을 사용해보자.
var carMakersUpperCase = carMakers.map(function (car) {
    return car.toUpperCase();
});
console.log(carMakersUpperCase);
// flexible Type
var flexibleDate = [];
flexibleDate.push('2019-11-15');
flexibleDate.push(new Date());
// Tuple type
var coke = ['black', true, 40];
var sprite = ['clear', true, 10];
var coffee = ['black', false, 3];
//# sourceMappingURL=arrayType.js.map