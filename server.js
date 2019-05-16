const express = require("express");
const path = require("path");
var db = require("./db/models");
const app = express();
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;
const mysql_import = require('mysql-import');

const routes = require("./routes");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`App listening on PORT" + ${PORT}!`);
  });
});

setTimeout(seedDB, 10000);

function seedDB(){
require('mysql-import').config({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'viatech',
	onerror: err=>console.log(err.message)
}).import('seed.sql').then(()=> {
	console.log('all sql statements have been executed')
});
}