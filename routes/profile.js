var data = require('../data.json');

exports.viewProject = function(req, res) {
  // controller code goes here 
  var name = req.params.name;
  console.log("the project name is: " + name);
  res.render("profile",data);
};
