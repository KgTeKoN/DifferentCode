import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import {UsersControllers} from "./users/users.controllers";
import {ExceptionFilter} from "./errors/exception.filter";
import {ILoger} from "./logger/logger.interface";

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: ILoger;
    userController: UsersControllers;
    exceptionFilter: ExceptionFilter;

    constructor(logger: ILoger,
                userController: UsersControllers,
                exceptionFilter: ExceptionFilter
    ) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
    }

    public async init() {
        this.useRoutes();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server was started on http://localhost:${this.port}`)
    }
}