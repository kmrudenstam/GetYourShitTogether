const router = require("express").Router();
const shitRoutes = require("./shit");
const userRoutes = require("./user")

// Shit routes
router.use("/shit", shitRoutes);
router.use("/user", userRoutes);

module.exports = router;
