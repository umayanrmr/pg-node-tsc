import { AppError } from "./error";




// export function globalErrorHandler (err: AppError | Error, req: any, res: any, next: any){
//     const body: any = { message: err.message }
//     if(err instanceof AppError) {
//         if(err.data) body['errors'] = err.data;
//         res.status(err.code).json(body);
//     }
//     res.status(500).json(body);
// };