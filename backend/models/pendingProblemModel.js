const mongoose = require("mongoose");

const pendingProblemSchema = mongoose.Schema({
    problem: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Problem",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    githubHTTP: String,
    githubSSH: String,
});

module.exports = mongoose.model("PendingProblem", pendingProblemSchema);
