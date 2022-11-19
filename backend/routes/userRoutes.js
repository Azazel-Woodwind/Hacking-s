const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Company = require("../models/companyModel");
const Applicant = require("../models/applicantModel");
const PendingProblem = require("../models/pendingProblemModel");
const protect = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

// @desc register new applicant
// @route POST /api/users
// @access PUBLIC
router.post("/users", async (req, res) => {
    let user = await User.create({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });

    if (req.body.role === "Company") {
        console.log("here");
        user = await Company.create({
            _id: user._id,
            name: req.body.name,
            topics: [],
        });
    } else if (req.body.role === "Applicant") {
        user = await Applicant.create({
            _id: user._id,
            certificates: [],
        });
    }

    res.status(201).json({ ...user, token: generateToken(user._id) });
});

// @desc register new applicant
// @route get /api/me
// @access PRIVATE
router.get("/me", protect, async (req, res) => {
    if (req.user.role === "Applicant") {
        const user = await Applicant.findOne({ _id: req.user._id });
        if (user) {
            req.user = { ...req.user, certificates: user.certificates };
        }
    } else if (req.user.role === "Company") {
        const user = await Company.findOne({ _id: req.user._id });
        if (user) {
            req.user = { ...req.user, name: user.name, topics: user.topics };
        }
    }

    res.status(200).json(req.user);
});

// @desc creates problem for admin to assess
// @route POST /api/pending-problems
// @access PRIVATE
router.post("/pending-problems", async (req, res) => {
    const { problem, user, githubHTTP, githubSSH } = req.body;

    const pendingProblem = await PendingProblem.create({
        problem,
        user,
        githubHTTP,
        githubSSH,
    });

    res.status(201).json(pendingProblem);
});

// @desc updates list of desired topics for a co
// @route PUT /api/topics
// @access PRIVATE
router.put("/topics", protect, async (req, res) => {
    const { topics } = req.body;
    const company = await Company.findById(req.user._id);
    company.topics = topics;
    company.save();
    res.status(200).json(company);
});

const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

module.exports = router;
