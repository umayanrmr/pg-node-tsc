
import { DataTypes, FindOptions, Sequelize } from "sequelize";
import db from "../config/db";
import { Op } from "sequelize";



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