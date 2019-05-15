const express = require("express");
const path = require("path");
var db = require("./db/models");
const app = express();
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;

const routes = require("./routes");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());




if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
});