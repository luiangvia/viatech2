//this is handling the route of /api/user
const router = require("express").Router();
const userController = require("../../db/controllers/userController");

router.route("/")
    .get(userController.findAll);


module.exports = router;