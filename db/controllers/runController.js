const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Controller.findAll(/*put options to filter here*/).then(controller => {
            res.json(controller);
            // controller will be an array of all Controller instances
          })
      }
}