const { Router } = require('express');
const { TodosModel } = require('../Models/Todos.model');
const { UserModel } = require('../Models/User.model');
const TodosRouter = Router();

TodosRouter.get('/get', async (req, res) => {
    const { email } = req.body;
    const todos = await TodosModel.find({ email: email })
    res.send({ todos: todos })
})


TodosRouter.post('/add', async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
        const todo = new TodosModel(req.body)
        await todo.save();
        res.send({ msg: "Todo added", todo: req.body })
    } else {
        res.send("Please Login Again")
    }
})

TodosRouter.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const todos = await TodosModel.replaceOne({ email: email, _id: id }, req.body)
    res.send("Todo Updated")
})

TodosRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const todos = await TodosModel.deleteOne({ email: email, _id: id })
    res.send("Todo Deleted")
})

module.exports = {
    TodosRouter
}