const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: String,
    topics: [String],
});

module.exports = mongoose.model("Company", companySchema);
