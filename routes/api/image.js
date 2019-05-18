//this is handling the route of /api/projects
const router = require("express").Router();
const imageController = require("../../db/controllers/imageController");

router.route("/")
    .get(imageController.findAll);


module.exports = router;