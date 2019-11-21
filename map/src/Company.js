"use strict";
exports.__esModule = true;
// @ts-ignore
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1["default"].company.companyName();
        this.catchPhrase = faker_1["default"].company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "Company : " + this.companyName;
    };
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=Company.js.map