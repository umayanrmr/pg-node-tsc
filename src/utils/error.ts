export class AppError extends Error {
    constructor(message: string, public code: number = 500, public data: any = null) {
        super(message);    
    }
}

export class NotFoundError extends AppError {
    constructor(message = "Resource not found.", data: any = null) {
        super(message, 404, data);
    }
}

export class DuplicateError extends AppError {
    constructor(message = "Data already exist.", data: any = null) {
        super(message, 400, data);
    }
}
