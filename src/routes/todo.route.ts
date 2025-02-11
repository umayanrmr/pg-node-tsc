import { Router } from 'express';



const router = Router();

const todos: any[] = [
    {
        "id": "1",
        "text": "45"
    }
];


router.get('/', (req, res, next) => {
    console.log("test 123")
    res.status(200).json(todos)
})

export default router;
// HOW TO USE: import anyName from './routes/todo.route'