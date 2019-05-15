//this is handling the route of /api/run
const router = require("express").Router();
const runController = require("../../db/controllers/runController");

router.route("/")
    .get(runController.findAll);


module.exports = router;