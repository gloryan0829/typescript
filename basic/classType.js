var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(info) {
        this.info = info;
    }
    Person.prototype.getName = function () {
        return this.info.name;
    };
    Person.prototype.getSex = function () {
        return this.info.sex;
    };
    Person.prototype.getCitizenId = function () {
        return this.info.citizenId;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(info) {
        var _this = _super.call(this, info) || this;
        _this.info = info;
        return _this;
    }
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    ;
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.toString = function () {
        return "I am " + this.info.name;
    };
    return Student;
}(Person));
var lee = new Student({
    name: 'lee',
    citizenId: '123',
    sex: 'male'
});
console.log(lee.toString());
//# sourceMappingURL=classType.js.map