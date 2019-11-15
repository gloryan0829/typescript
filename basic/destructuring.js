"use strict";
exports.__esModule = true;
var todayWeather = {
    date: new Date(),
    weather: 'sunny'
};
var loggerWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
loggerWeather(todayWeather);
// another ex
var personInfo = {
    name: 'doublej',
    sex: 'male',
    age: 36,
    address: {
        addr1: 'Seoul',
        addr2: 'KangNam'
    },
    setAge: function (_age) {
        this.age = _age;
    }
};
var age = personInfo.age, name = personInfo.name;
console.log(age + " // " + name);
var _a = personInfo.address, addr1 = _a.addr1, addr2 = _a.addr2;
console.log(addr1 + " // " + addr2);
//# sourceMappingURL=destructuring.js.map