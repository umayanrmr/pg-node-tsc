import { FindOptions, Op, where, WhereOptions } from "sequelize";
import TodoEntity from "../entities/todo.entity";

export class TodoService {


    public static async findByTitle(title: string, exceptId: number | null = null) {
        const whereOptions: WhereOptions  = {
            title: {
                [Op.eq]: title
            }
        }
        if (exceptId) whereOptions.id = { [Op.ne]: exceptId }
        return await TodoEntity.findAll({
            where: whereOptions
        });
    }
}