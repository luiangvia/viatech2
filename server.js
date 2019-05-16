const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
var models = require("./db/models");
const routes = require("./routes");
//dependancy to be added to README below
const mysql_import = require('mysql-import');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sync Database
//var sequelize = new Sequelize("./db/config")
//var sequelize = require("./db/connection.js")

// Routes - TODO: these should be the gets and posts below,
// and you'll have to move them
// =============================================================
//require("./routes/index.js")(app);
//require("./routes/users.js")(app);

models.sequelize.sync({ force: true }).then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes/api
app.use(routes);


//gets all projects from projects
/*
app.get("/projects",function(req,res){
  console.log("this is getting")
  models.Project.findAll().then(Projects=>{
    console.log(Projects);
  })
});
*/
/*
old routes
app.get("/projects",function(req,res){
  console.log("this is getting")
  models.User.findAll().then(Users=>{
    console.log(Users);
  })
});
*/

/*
old routes
app.post("/projects",function(req,res){
  req.body.projectname;
  models.Project.create({projectname : req.body.projectname}).then(Projects=>{
        //find object then return as json: (look up) sequelize docs for "create"
  })
  
  //console.log(req.body.projectname);
  res.end();
  //console.log("this is posting")
});
*/


/*
Project.findAll().then(projects => {
  // projects will be an array of all Project instances
})
*/

//app.put for update

// Send every request to the React app
// Define any API routes before this runs

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//below is just a placeholder for seeding the db....should use migrations

setTimeout(seedDB, 10000);

function seedDB(){
require('mysql-import').config({
	host: '127.0.0.1',
	user: 'root',
	password: 'figwin',
	database: 'viatech',
	onerror: err=>console.log(err.message)
}).import('seed.sql').then(()=> {
	console.log('all sql statements have been executed')
});

}


//USE SEQUELIZE INCLUDE OR SEQUELIZE FILTER TO GRAB DB INFO 

// run ids are attached to projects, and to display from stages, just grab the stages assocoated with the runs