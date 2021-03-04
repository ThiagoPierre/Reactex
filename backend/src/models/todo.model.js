const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    title: String,
    edit: Boolean,
    isCompleted: Boolean,
 },
);

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;