const routes = require("express").Router();

// importa o controller da pasta controller
const TaskController = require("../controller/TaskController");
const Task = require("../models/Task");

//
routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);


// exporta as rotas
module.exports = routes;
