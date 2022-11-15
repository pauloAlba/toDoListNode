const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.nxadvid.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongDB Atlas CONTECADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDB;
