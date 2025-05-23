const express = require('express');
const router = express.Router();
const { getTodos , createTodo , deleteTodo } = require('../controllers/todoController');

router.get('/todos', getTodos);
router.post('/todos/add', createTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
