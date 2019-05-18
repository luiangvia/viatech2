const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Reagent.findAll(/*put options to filter here*/).then(reagent => {
            res.json(reagent);
            // reagent will be an array of all Reagent instances
            //this is used to list all regaents after clicking reagent button
          })
      },
      findOne: function(req,res){
        db.Reagent.findById(req.params.id).then(reagent=>{res.json(reagent)})
    }
}



//need function to post reagent ids and data to newly created run id inside of stage id inside of projectid    
    //hook/lifeycle - used after submitting new run, also submits new reagents to run created inside of tageid inside of projectid


    //need function for getting all reagent names from ids, and all runs with ids,
// from inside stage id inside project id
    //used for reagent summary




