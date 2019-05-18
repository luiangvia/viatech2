const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function (req, res) {
        if (req.projectId) {
            db.Project.findById(req.projectId).then(project => { return project.getStages() }) //get project id of specfic project and getstages for that project
                .then(stages => {
                    //console.log(stages);
                    res.json(stages)
                })
        } else {
            db.Stage.findAll().then(stage => {
                res.json(stage)
            })
        }
    },

    findOne: function (req, res) {
        db.Stage.findById(req.params.id).then(stage => { res.json(stage) })
    },

    appendStageId: function (req, res, next) { //we're appending projectid to our request and go on to next route with that projectid in the request
        req.stageId = req.params.id  //creating new property on projectid and setting to id coming from paramters / adding property of projectid to request , we're getting so we can look up the project in the stages route/controller
        next() //uses next route which finds stages / moves to stage route
        // appendProjectId,stage <---- this is the next route
    }
}
//use the above as an example for chaining for other routes/controllers that get project/stage/run data etc.

//need function to get stage ids from project id


/*
edits from bootcamp tutor below

const db = require("../models");


module.exports = {
    findAll: function(req, res) {
        db.Stage.findAll().then(stage => {
            res.json(stage);

          })
      },

      POST /projects/:reagent1/stage/:reagent2/run/:reagent_id/reagent (new reagent)
      findOne: function(req,res){
          db.Stage.findById(req.params.stage_id).then(stage=>{res.json(stage)})

      }
}

 */

