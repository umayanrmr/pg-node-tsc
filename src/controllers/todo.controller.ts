import { Request, Response } from "express";
import { validateModel } from "../utils/helper";
import { TodoService } from "../services/todo.service";
import { DuplicateError } from "../utils/error";
import TodoEntity from "../entities/todo.entity";
import { AppResponse } from "../utils/response";


export class TodoController {    
    constructor() {}

    public static async create(req: Request, res: Response) {
        validateModel(req);
        const { title } = req.body;
        const match = await TodoService.findByTitle(title);
        if(match.length > 0) throw new DuplicateError();
        const obj = await TodoEntity.create({title: title});
        AppResponse.created(res, obj)
    }

}


