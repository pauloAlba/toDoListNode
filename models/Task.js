const mongoose = require("mongoose");

// é o equivalmente a uma tabela mo MySQL
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Task", taskSchema);
