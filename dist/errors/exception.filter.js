"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionFilter = void 0;
const http_error_class_1 = require("./http-error.class");
class ExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(err, req, res, next) {
        if (err instanceof http_error_class_1.HTTPError) {
            this.logger.error(`[${err.context}] Error ${err.statusCode}: ${err.message}`);
            res.status(err.statusCode).send({ err: err.message });
        }
        else {
            this.logger.error(`${err.message}`);
            res.status(500).send({ err: err.message });
        }
    }
}
exports.ExceptionFilter = ExceptionFilter;
//# sourceMappingURL=exception.filter.js.map