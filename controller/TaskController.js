// renderiza a página index
const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", {tasksList, task: null, taskDelete: null});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};



const getById = async (req, res) => {
  try{
    const tasksList = await Task.find();
    if(req.params.method == "update"){ // se for para mudar o formulário
      const task = await Task.findOne({_id: req.params.id})
      res.render("index", {task, taskDelete: null, tasksList})
    } else { // se for para apresentar o modal
      const taskDelete = await Task.findOne({_id: req.params.id})
      res.render("index", {task: null, taskDelete, tasksList})
    }
    
  }catch (err){
  res.status(500).send({ error: err.message });
  }
}


// update
const updateOneTask = async (req, res) => {
  try{
    const task = req.body; // pega o que vem do corpo da requisição
    await Task.updateOne({_id: req.params.id}, task); // quem será atualizado e onde
    res.redirect("/")
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
// delete
const deleteOneTask = async (req, res) => {
  const id = req.params.id;
  try{
    await Task.deleteOne({_id: req.params.id})
    res.redirect("/")
  } catch (err){
    res.status(500).send({ error: err.message });
  }
}


// exporta o controller
module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask
};
