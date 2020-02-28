var users = require('../users.json')
exports.view = function(req, res){
  
  users["viewB"]=false;
  res.render('step3',users);
  console.log(users["viewB"]);
};

exports.viewB = function(req, res){
  
  users["viewB"]=true;
  res.render('step3',users);
  console.log(users["viewB"]);
};
