const router = require("express").Router();
const userController = require("../../controllers/userController");

router.get('/test', (req, res) => {
  console.log("test");
  res.json('working')
});

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/shit/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);




module.exports = router;
