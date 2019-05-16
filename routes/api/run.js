//this is handling the route of /api/run
const router = require("express").Router();
const runController = require("../../db/controllers/runController");
const reagent = require("./reagent");

router.route("/")
    .get(runController.findAll);

    router.route("/:id")
    .get(runController.findOne);

    router.use("/:id/reagent",runController.appendRunId,reagent); 

 

module.exports = router;