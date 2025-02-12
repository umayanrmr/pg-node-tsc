import { Response } from "express";

export class AppResponse {


    public static data(res: Response, data: any) {
        res.status(200).json(data);
    }

    public static success(res: Response, message: string) {
        return this.default(res, 200, message, null)
    }

    public static created(res: Response, data: any | null, message = "Resource created succesfully.") {
        return this.default(res, 201, message, data)
    }
    public static updated(res: Response, data: any | null, message = "Resource updated succesfully.") {
        return this.default(res, 204, message, data)
    }
    public static deleted(res: Response, data: any | null, message = "Resource deleted succesfully.") {
        return this.default(res, 204, message, data)
    }



    public static default(res: Response, code: number = 200, message:  string | null, data: any | null) {
        const body: any = { };
        if(message) body['message'] = message;
        if(data) body['data'] = data
        res.status(code).json(body);
    }
}