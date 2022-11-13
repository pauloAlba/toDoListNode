const routes = require("express").Router();

// importa o controller da pasta controller
const TaskController = require("../controller/TaskController")

//
routes.get("/home", TaskController.getAll)

// exporta as rotas
module.exports = routes