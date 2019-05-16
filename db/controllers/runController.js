const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Run.findAll(/*put options to filter here*/).then(controller => {
            res.json(controller);
            // controller will be an array of all Controller instances
          })
      },
      findAll: function(req, res) { //check for projectid if appended or on the request
        if(req.stageId){ //if the projectid is on the request, then we use it to get the stages in that projectid
            db.Project.findById(req.projectId)
            .then(project=>{project.getStages({where:"id ="+req.stageId})})
            .then(stage=>{stage.getRuns()})
            .then(runs=>{
                res.json(runs) //respond with stages
            })
        }
    },
    findOne: function(req,res){
        db.Run.findById(req.params.id).then(run=>{res.json(run)})
    },
    
    appendRunId: function(req,res,next){ //we're appending projectid to our request and go on to next route with that projectid in the request
    req.runId = req.params.id  //creating new property on projectid and setting to id coming from paramters / adding property of projectid to request , we're getting so we can look up the project in the stages route/controller
    next()
    }
}

//need function to get runs from stage id that belong to project id
    //used after clicking stage inside of project

//need function to get run id and all run data from stage id from projectid 
    //- used to list runs from stages, also used in summary of regaents

//need function to post run id with all run data, (and reagent ids?), into stage id inside of projectid
    //used after clicking on add run and submitting

