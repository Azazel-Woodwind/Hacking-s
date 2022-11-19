const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
    title: String,
    desc: String,
    topics: [String],
    difficulty: Number,
    timeToDo: Number,
});

module.exports = mongoose.model("Problem", problemSchema);
