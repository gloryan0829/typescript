"use strict";
exports.__esModule = true;
var User_1 = require("./src/User");
var Company_1 = require("./src/Company");
var CustomMap_1 = require("./src/CustomMap");
var user = new User_1.User();
var company = new Company_1.Company();
var customMap = new CustomMap_1.CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
//# sourceMappingURL=index.js.map