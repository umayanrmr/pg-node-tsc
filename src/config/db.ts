import { Sequelize } from "sequelize";


const db = new Sequelize({
    database: 'test_db',
    username: 'root',
    password: 'P@ssw0rd',
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log
});

export default db
