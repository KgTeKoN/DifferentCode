"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersControllers = void 0;
const base_controller_1 = require("../common/base.controller");
const http_error_class_1 = require("../errors/http-error.class");
class UsersControllers extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bindRoutes([
            { path: '/register', func: this.register, method: 'post' },
            { path: '/login', func: this.login, method: 'post' },
        ]);
    }
    login(req, res, next) {
        next(new http_error_class_1.HTTPError(401, 'Error of authorization', 'login'));
    }
    register(req, res, next) {
        this.ok(res, 'register');
    }
}
exports.UsersControllers = UsersControllers;
//# sourceMappingURL=users.controllers.js.map