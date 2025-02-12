import { Request, Response } from "express";
import { validateModel } from "../utils/helper";
import { TodoService } from "../services/todo.service";
import { DuplicateError, NotFoundError } from "../utils/error";
import TodoModel from "../models/todo.model";
import { AppResponse } from "../utils/response";


export class TodoController {    
    constructor() {}

    public static async create(req: Request, res: Response) {
        validateModel(req);
        const { title } = req.body;
        const match = await TodoService.findByTitle(title);
        if(match.length > 0) throw new DuplicateError();
        const obj = await TodoModel.create({title: title});
        AppResponse.created(res, obj)
    }


    public static async update(req: Request, res: Response) {
        validateModel(req);
        const { id } = req.params;
        const { title } = req.body;
        const match = await TodoService.findByTitle(title, +id);
        if(match.length > 0) throw new DuplicateError();

        const obj = await TodoModel.findByPk(id);
        if(!obj) throw new NotFoundError();
        obj.title = title
    }

}


