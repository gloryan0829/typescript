"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (_id, _title, _completed) {
    console.log("ID : " + _id + " TITLE : " + _title + " COMPLETED : " + _completed);
};
//# sourceMappingURL=index.js.map