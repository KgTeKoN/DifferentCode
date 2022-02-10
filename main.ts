import { App } from './app';
import { LoggerService } from "./logger/logger.service";
import {UsersControllers} from "./users/users.controllers";
import {ExceptionFilter} from "./errors/exception.filter";

async function bootstrap() {
    const logger = new LoggerService();
    const app = new App(logger,
        new UsersControllers(logger),
        new ExceptionFilter(logger)
    );
    await app.init();
}

bootstrap();