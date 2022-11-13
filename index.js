const express = require("express");
const path = require("path");
const routes = require("./routes/routes") //importa todas as rotas

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // informa o tipo de arquivo que está sendo utilizado
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)// usa todas as rotas importadas
// ROTA
app.use(routes)

app.listen(3000, () => console.log(`O servidor está rodando na porta ${port}`));
