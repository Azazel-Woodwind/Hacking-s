const mongoose = require("mongoose");

const skillLevels = {
    skill: String,
    level: Number,
    lastDate: String,
};

const applicantModel = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    certificates: [skillLevels],
});

module.exports = mongoose.model("Applicant", applicantModel);
