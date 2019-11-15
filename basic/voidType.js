// void and never
var logger = function (msg) {
    console.log(msg);
};
logger('에러 메시지!');
var throwErr = function (msg) {
    throw new Error(msg);
};
throwErr('에러');
//# sourceMappingURL=voidType.js.map