//this is handling the route of /api/stage
const router = require("express").Router();
const stageController = require("../../db/controllers/stageController");
const run = require("./run");

router.route("/")
    .get(stageController.findAll);

    router.route("/:id")
    .get(stageController.findOne);

    router.use("/:id/run",stageController.appendStageId,run); 



module.exports = router;
