import { validationResult } from "express-validator/lib/validation-result";
import { AppError } from "./error";
import { Request, Response, NextFunction } from 'express';



export function validateModel (req: any){
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new AppError('Model validation failed.', 422, errors.array());
        throw error;
    }
}


type AsyncMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export function routeHandler<T>(middleware: AsyncMiddleware): AsyncMiddleware {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await middleware(req, res, next);
        } catch (err: any) {
            const body: any = { message: err.message }
            if(err instanceof AppError) {
                if(err.data) body['errors'] = err.data;
                res.status(err.code).json(body);
                return
            }
            res.status(500).json(body);
        }
    }
}



