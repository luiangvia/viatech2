const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Run.findAll(/*put options to filter here*/).then(controller => {
            res.json(controller);
            // controller will be an array of all Controller instances
          })
      }
}

//need function to get runs from stage id that belong to project id
    //used after clicking stage inside of project

//need function to get run id and all run data from stage id from projectid 
    //- used to list runs from stages, also used in summary of regaents

//need function to post run id with all run data, (and reagent ids?), into stage id inside of projectid
    //used after clicking on add run and submitting

