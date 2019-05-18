//this is handling the route of /api/project
const router = require("express").Router();
const projectController = require("../../db/controllers/projectController");
const run = require("./run");

router.route("/")
  .get(projectController.findAll);

router.route("/:id")
  .get(projectController.findOne);

  router.use("/:id/run",projectController.appendProjectId,run); 


router.route("/create").post(projectController.createProject);

module.exports = router;