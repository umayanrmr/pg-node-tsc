import { FindOptions, Op, where, WhereOptions } from "sequelize";
import TodoModel from "../models/todo.model";
import { PaginatedResponse } from "../contracts/paginated-response";
import { calculateOffset } from "../utils/helper";

export class TodoService {


    public static async findByTitle(title: string, exceptId: number | null = null): Promise<TodoModel[]> {
        const whereOptions: WhereOptions  = {
            title: {
                [Op.like]: title
            }
        }
        if (exceptId) whereOptions.id = { [Op.ne]: exceptId }
        return await TodoModel.findAll({
            where: whereOptions
        });
    }


    public static async search(title: any | null, page: number= 1, size:number = 20): Promise<PaginatedResponse<TodoModel>> {
        const offset = calculateOffset(page ?? 1, size ?? 20);
        const whereOptions: WhereOptions  = {}
        if(title) whereOptions.title = {[Op.like]: `%${title}%`}

        const items = await TodoModel.findAndCountAll({
            where:  whereOptions,
            limit: size,
            offset: offset,
            order: [
                ['title', 'ASC']
            ]
        });
        const totalPages = Math.ceil(items.count / size);
        return {
            data: items.rows,
            page: page,
            size: size,
            totalCount: items.count,
            totalPages: totalPages,
            hasPreviosPage: page > 1,
            hasNextPage: page > totalPages
        };
    }
}