const express = require("express");
const path = require("path");
const routes = require("./routes/routes"); //importa todas as rotas
const connectToDB = require("./database/db");

connectToDB();
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // informa o tipo de arquivo que está sendo utilizado
app.use(express.static(path.join(__dirname, "public")));

// ROTA

app.use(express.urlencoded({extended: true})) // permite que o servidor mongoDB receba uma div html
app.use(routes); // usa todas as rotas importadas

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
