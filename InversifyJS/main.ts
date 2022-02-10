import { App } from './app';
import { LoggerService } from "./logger/logger.service";
import { UsersControllers } from "./users/users.controllers";
import { ExceptionFilter } from "./errors/exception.filter";
import { Container } from "inversify";
import { ILogger } from "./logger/logger.interface";
import { IExceptionFilter } from "./errors/exception.filter.interface";
import { TYPES } from "./types";


const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
appContainer.bind<UsersControllers>(TYPES.UserController).to(UsersControllers);
appContainer.bind<App>(TYPES.Application).to(App);
const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer }
