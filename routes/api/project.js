//this is handling the route of /api/project
const router = require("express").Router();
const projectController = require("../../db/controllers/projectController");
const stage = require("./stage");

router.route("/")
  .get(projectController.findAll);

router.route("/:id")
  .get(projectController.findOne);

  router.use("/:id/stage",projectController.appendProjectId,stage); //',stage" sets value of next() for findStags fucntion
/* example code below
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;


*/
module.exports = router;