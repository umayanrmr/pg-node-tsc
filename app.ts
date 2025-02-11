
// const express = require('express');
import express from 'express'

import todosRoutes from './routes/todo.route'


const app = express();

app.use(todosRoutes)
app.listen(3000)

