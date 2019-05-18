//this is handling the route of /api/reagent
const router = require("express").Router();
const reagentController = require("../../db/controllers/reagentController");

router.route("/")
    .get(reagentController.findAll);

    router.route("/:id")
    .get(reagentController.findOne);

module.exports = router;