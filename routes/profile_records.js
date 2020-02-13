var data = require('../data.json');

exports.viewProject = function(req, res) { 
  // controller code goes here 
  //var name = req.params.name;
  console.log(data);

  res.render("profile_records", data);
  //res.render("profile", {"DuoDuo": name});
};
