const express = require("express");

const TodoRouter = require("./todos.router");
const UserRouter = require("./user.router");

const Routes = express.Router();

Routes.use(TodoRouter);
Routes.use(UserRouter);

module.exports = Routes;