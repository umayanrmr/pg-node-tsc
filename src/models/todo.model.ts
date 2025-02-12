
import db from "../config/db";

import { Model, DataTypes } from 'sequelize';

class TodoModel extends Model {
  public id!: number;
  public title!: string;
}

TodoModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, 
{
  sequelize: db,
  modelName: 'todo',
  indexes: [
        {
            unique: false,
            fields: ['title']
        }
    ]
});

// const TodoEntity = db.define('todo', {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: DataTypes.STRING(80),
//         allowNull: false
//     }
    
// }, {
//     indexes: [
//         {
//             unique: false,
//             fields: ['title']
//         }
//     ]
// });



export default TodoModel;