import { Router } from 'express';
import { routeHandler } from '../utils/helper';

import { body } from 'express-validator/lib/middlewares/validation-chain-builders';
import { TodoController } from '../controllers/todo.controller';

const router = Router();
const validations = [
    body('title').trim().isLength({min: 5, max: 80})    
]

router.put('/:id', validations, routeHandler(TodoController.update));
router.delete('/:id', routeHandler(TodoController.delete));
router.get('/', routeHandler(TodoController.search));
router.post('/', validations, routeHandler(TodoController.create));



export default router;
// HOW TO USE: import anyName from './routes/todo.route'