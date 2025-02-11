
import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db";

// , {
//     indexes: [
//         {
//             unique: false,
//             fields: ['title']
//         }
//     ]
// }

const Todo = db.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
    
});
export default Todo;