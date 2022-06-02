const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: String
});


exports.getTodoModel = mongoose.model('Todo', TodoSchema)