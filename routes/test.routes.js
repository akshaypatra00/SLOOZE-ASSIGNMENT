const express = require("express");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

// ONLY ADMIN
router.get("/admin", auth, role(["ADMIN"]), (req, res) => {
  res.json({
    message: "Welcome Admin",
    user: req.user,
  });
});

// ADMIN + MANAGER
router.get("/admin-manager", auth, role(["ADMIN", "MANAGER"]), (req, res) => {
  res.json({
    message: "Welcome Admin or Manager",
    user: req.user,
  });
});

module.exports = router;
