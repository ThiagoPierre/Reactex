const { Router } = require('express')
const TodoController = require('../controllers/todo.controller')

const router = Router();

router.get("/atividade4/", TodoController.index)
router.get("/atividade4/:id", TodoController.getOne)
router.put("/atividade4/:id", TodoController.update)
router.delete("/atividade4/:id", TodoController.remove)
router.post("/atividade4/", TodoController.store)

module.exports = router;
