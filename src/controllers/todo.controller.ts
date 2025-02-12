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
        obj.title = title;
        await obj.save();
        AppResponse.updated(res, obj);
    }


    public static async delete(req: Request, res: Response) {
        const { id } = req.params;
        const obj = await TodoModel.findByPk(id);
        if(!obj) throw new NotFoundError();
        await obj.destroy();
        AppResponse.deleted(res, obj);
    }


    public static async search(req: Request, res: Response) {
        const { title } = req.query;
        const page = req.query.page || 1;
        const size = req.query.size || 20;
        const items = await TodoService.search(title, +page, +size);
        AppResponse.data(res, items);
    }
}



