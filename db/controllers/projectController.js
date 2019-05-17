const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Project.findAll(/*put options to filter here*/).then(project => {
            res.json(project);
            // projects will be an array of all Project instances
            //this is used to list all projects after clicking project button
          })
      },
      findOne: function(req,res){
        db.Project.findById(req.params.id).then(project=>{res.json(project)})
    },
    //attach project id to request
    appendProjectId: function(req,res,next){ //we're appending projectid to our request and go on to next route with that projectid in the request
        req.projectId = req.params.id  //creating new property on projectid and setting to id coming from paramters / adding property of projectid to request , we're getting so we can look up the project in the stages route/controller
        next() //uses next route which finds stages / moves to stage route
        // appendProjectId,stage <---- this is the next route
    },
    
  // POST route for saving a new project
  createProject: function(req, res) {
    db.Project.create({
      name: req.body.name
    })
      .then(function(dbProject) {
        res.json(dbProject);
      });
  }
}

//need function to post project when project submitted after clicking add project

