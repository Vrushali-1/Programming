"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminClass = /** @class */ (function () {
    function AdminClass(name) {
        this.name = name;
    }
    AdminClass.prototype.login = function () {
        console.log("logged in successfully");
    };
    return AdminClass;
}());
exports.AdminClass = AdminClass;
