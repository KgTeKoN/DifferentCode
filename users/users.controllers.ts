import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error.class';

export class UsersControllers extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ path: '/register', func: this.register, method: 'post' },
			{ path: '/login', func: this.login, method: 'post' },
		]);
	}

	login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, 'Error of authorization', 'login'));
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register');
	}
}
