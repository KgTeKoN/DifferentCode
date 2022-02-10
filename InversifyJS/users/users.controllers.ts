import { BaseController } from "../common/base.controller";
import { ILogger } from "../logger/logger.interface";
import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../errors/http-error.class";
import { TYPES } from "../types";
import { inject, injectable } from "inversify";
import 'reflect-metadata';

@injectable()
export class UsersControllers extends BaseController {
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService);
        this.bindRoutes([
            { path: '/register', func: this.register, method: 'post' },
            { path: '/login', func: this.login, method: 'post' }
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, 'Error of authorization', 'login'));
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }
}