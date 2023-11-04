"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStr = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function addStr(string1, string2) {
    if (string2 == undefined) {
        return string1;
    }
    else {
        return string1 + string2;
    }
}
exports.addStr = addStr;
