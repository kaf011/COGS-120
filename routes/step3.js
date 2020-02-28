var users = require('../users.json')
exports.view = function(req, res){
  res.render('step3',users);
  users["viewB"]=false;
  console.log(users["viewB"]);
};

exports.viewB = function(req, res){
  res.render('step3',users);
  users["viewB"]=true;
  console.log(users["viewB"]);
};
