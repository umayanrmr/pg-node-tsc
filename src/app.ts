
import express from 'express'
import todosRoutes from './routes/todo.route'
import bodyParser from 'body-parser';

import db from './config/db';
import './entities'


const app = express();

app.use(bodyParser.json());

app.use("/todos",todosRoutes)



db.sync({force: false})
  .then(() => {
    console.log('Models synced with the database.');
  })
  .catch((error) => {
    console.error('Error syncing models:', error);
  });

app.listen(8000)

