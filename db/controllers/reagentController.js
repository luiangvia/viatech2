const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Reagent.findAll(/*put options to filter here*/).then(reagent => {
            res.json(reagent);
            // reagent will be an array of all Reagent instances
          })
      }
}