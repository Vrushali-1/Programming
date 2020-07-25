"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuClass = /** @class */ (function () {
    function MenuClass() {
    }
    MenuClass.prototype.addMenu = function () {
        console.log("inside add menu");
    };
    MenuClass.prototype.editMenu = function () {
        console.log("inside edit menu");
    };
    MenuClass.prototype.deleteMenu = function () {
        console.log("inside delete menu");
    };
    return MenuClass;
}());
exports.MenuClass = MenuClass;
