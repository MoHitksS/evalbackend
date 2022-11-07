const mongoose = require('mongoose');
const TodosSchema = mongoose.Schema({
    taskname: { type: String },
    status: { type: String, enum:["pending", "done"], default:"pending"},
    tag: { type: String, enum:["personal", "official", "family"], default:"personal"},
    email: { type: String }
})

const TodosModel = mongoose.model('todos', TodosSchema);

module.exports = {
    TodosModel
}