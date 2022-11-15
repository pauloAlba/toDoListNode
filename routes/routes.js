const routes = require("express").Router();

// importa o controller da pasta controller
const TaskController = require("../controller/TaskController");
const Task = require("../models/Task");

//
routes.get("/", TaskController.getAllTasks)
routes.post("/create", TaskController.createTask)

// exporta as rotas
module.exports = routes