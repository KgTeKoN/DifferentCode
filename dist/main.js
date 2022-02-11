"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const logger_service_1 = require("./logger/logger.service");
const users_controllers_1 = require("./users/users.controllers");
const exception_filter_1 = require("./errors/exception.filter");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new logger_service_1.LoggerService();
        const app = new app_1.App(logger, new users_controllers_1.UsersControllers(logger), new exception_filter_1.ExceptionFilter(logger));
        yield app.init();
    });
}
bootstrap();
//# sourceMappingURL=main.js.map