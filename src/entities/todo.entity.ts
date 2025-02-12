
import { DataTypes } from "sequelize";
import db from "../config/db";



const TodoEntity = db.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
    
}, {
    indexes: [
        {
            unique: false,
            fields: ['title']
        }
    ]
});



export default TodoEntity;