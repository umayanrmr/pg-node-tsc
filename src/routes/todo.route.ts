import { Router } from 'express';
import { routeHandler } from '../utils/helper';

import { body } from 'express-validator/lib/middlewares/validation-chain-builders';
import { TodoController } from '../controllers/todo.controller';




const router = Router();
const nameLength = {min: 5, max: 80}

const todos: any[] = [
    {
        "id": "1",
        "text": "45"
    }
];


router.post('/', [
        body('title').trim().isLength(nameLength)
    ], 
    routeHandler(TodoController.create)
);

export default router;
// HOW TO USE: import anyName from './routes/todo.route'