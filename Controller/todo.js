const todoModel = require('../Model/todoModel').getTodoModel;

exports.getTodos = async (req, res) => {
    try {
        const data = await todoModel.find()
        res.status(200).send({ data, status: true, message: "get todo sucessfully" })
    } catch (err) {
        res.status(400).send({ status: false, err })
    }
}

exports.createTodo = async (req, res) => {
    console.log("BODY--->", req.body)
    try {
        const todo = req.body?.todo;
        if (todo) {
            const result = await todoModel.create({ todo: todo });
            console.log(result);
            res.status(200).send({ result, status: true, message: "created todo sucessfully" })
        } else {
            res.status(400).send({ status: false, err: "todo parameter in body is missing" })    
        }
    } catch (err) {
        console.log(err)
        res.status(400).send({ status: false, err })
    }
}