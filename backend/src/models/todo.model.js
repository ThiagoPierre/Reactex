const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    isCompleted: Boolean,
    title: String,
 },
);

const TodoModel = mongoose.model("atividade4", TodoSchema);

module.exports = TodoModel;