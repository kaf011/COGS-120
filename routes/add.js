var data = require("../data.json");

exports.addRecord = function(request, response) {  
	var newDate = request.query.name;
    var newTime = request.query.description;
    var rate = request.query.Health
	var newRecord = {
	 'Date': newDate,
	 'Time': newTime,
	 'Health': rate,
	};
	data.friends.push(newRecord);
	response.render('profile', data);
}	