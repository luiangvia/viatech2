//this is handling the route of /api/stage
const router = require("express").Router();
const stageController = require("../../db/controllers/stageController");

router.route("/")
    .get(stageController.findAll);


module.exports = router;