// renderiza a página index 
const getAll = (req, res) => {
return res.render("index");
};



// exporta o controller
module.exports = {
  getAll, 
}