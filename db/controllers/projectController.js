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
      }
}

//need function to post project when project submitted after clicking add project

