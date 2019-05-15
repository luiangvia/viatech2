//this is handling the route of /api/project
const router = require("express").Router();
const projectController = require("../../db/controllers/projectController");

router.route("/")
    .get(projectController.findAll);

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