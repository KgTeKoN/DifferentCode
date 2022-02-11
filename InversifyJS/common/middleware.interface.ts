import { NextFunction, Request, Response } from 'express';

export interface IMiddleware {
	execute(req: Request, res: Response, nex: NextFunction) => void;
}