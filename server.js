var express = require("express");
var app = express();
var path = require('path');

app.set("port", process.env.PORT || 5000);

app.get("/*", function(req, res, next){
  var file = req.params[0] || "index.html";
  res.sendFile(path.join(__dirname, file))
});

app.listen(app.get("port"), function(req, res, next){
  console.log("Listening on port: " + app.get("port"));
});