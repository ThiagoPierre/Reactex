const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    title: String,
    edit: Boolean,
    isCompleted: Boolean,
 },
);

const TodoModel = mongoose.model("atividade4", TodoSchema);

module.exports = TodoModel;