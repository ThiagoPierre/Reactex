const { Router } = require('express')
const TodoController = require('../controllers/todo.controller')

const router = Router();

router.get("/user/todo", TodoController.index)
router.get("/user/todo/:id", TodoController.getOne)
router.post("/user/todo/", TodoController.store)
router.put("/user/todo", TodoController.update)
router.delete("/user/todo/", TodoController.remove)
