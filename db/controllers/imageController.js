const db = require("../models");

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function(req, res) {
        db.Image.findAll(/*put options to filter here*/).then(image => {
            res.json(image);
            // image will be an array of all image instances
          })
      }
}