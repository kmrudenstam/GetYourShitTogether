const router = require("express").Router();
const shitController = require("../../controllers/shitController");

// Matches with "/api/shit"
router.route("/")
  .get(shitController.findAll)
  .post(shitController.create);

// Matches with "/api/shit/:id"
router
  .route("/:id")
  .get(shitController.findById)
  .put(shitController.update)
  .delete(shitController.remove);

module.exports = router;
