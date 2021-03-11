const TodoModel = require('../models/todo.model')

class TodoController {
    // Pegar as informações de todos os Todos
    async index(req, res) {

        const {
            headers: {
              loggedUser: { _id: userId },
            },
          } = req;

          const data = await TodoModel.find({ userId });
    
        res.send({ data });
      }
      // Salva os Todos
    async store(req, res) {

        const {
            body: data,
            headers: {
              loggedUser: { _id: userId },
            },
          } = req;

          data.userId = userId;

        const newTodo = await TodoModel.create(data)

        res.send({todo: newTodo});
    }
    // Pegar apenas um Todo
    async getOne(req, res) {
        const { id } = req.params;
        try {
            const user = await TodoModel.findById(id);
            res.send({ user });
          } catch (e) {
            res.status(400).send({ message: "Todo does not exist" });
          }
    }
    // Remoção de Todos
    async update(req, res) {
        const { 
            params: { id },
            body,
        } = req;

        const todo = await TodoModel.findOneAndUpdate(id, body).lean();

        res.send({
        todo: {
            ...todo,
            ...body,
        },
        });
    }
    // Função para remover o Todo
    async remove(req, res) {
        const { id } = req.params;
        try{
            const todo = await TodoModel.findByIdAndDelete(id);
            if(!todo){
                throw new Error("Todo does not exist")
            } 
            res.send({ message:"Todo Removed" })
            
        } catch(error){
            res.status(400).send({ message: error })
        }
    }
}

module.exports = new TodoController();