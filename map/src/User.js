"use strict";
exports.__esModule = true;
// @ts-ignore
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.firstName();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude()),
        };
    }
    User.prototype.markerContent = function () {
        return "UserName : " + this.name;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map