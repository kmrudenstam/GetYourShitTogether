const router = require("express").Router();
const shitRoutes = require("./shit");
const userRoutes = require("./user");
const journalRoutes = require("./journal");

// Shit routes
router.use("/shit", shitRoutes);
router.use("/user", userRoutes);
router.use("/journal", journalRoutes);

module.exports = router;
