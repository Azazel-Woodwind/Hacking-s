const express = require("express");
const router = express.Router();
const PendingProblem = require("../models/pendingProblemModel");
const User = require("../models/userModel");
const Applicant = require("../models/applicantModel");
const moment = require("moment");

// @desc deletes pending problem after assessed by admin
// @route POST /admin/pending-problems/:id
// @access ADMIN
router.delete("/pending-problems/:id", async (req, res) => {
    const problem = PendingProblem.findByIdAndDelete(req.params.id);
    res.status(200).json(problem);
});

// @desc updates certificates of a user
// @route PUT /admin/users/:id
// @access ADMIN
router.put("/users/:id", async (req, res) => {
    const { userID, skill, level } = req.body;
    const applicant = Applicant.findById(req.params.id);
    applicant.certificates.push({
        skill,
        level,
        lastDate: moment().toISOString(),
    });
    applicant.save();
    res.status(200).json(applicant);
});

// @desc creates a problem that can be assigned to an applicant
// @route POST /admin/problems
// @access ADMIN
router.post("/problems", async (req, res) => {});

module.exports = router;
