var data = require("../data.json");

exports.addRecord = function(request, response) {  
    var d = new Date();
	var newDate = d.getDate();
    var newTime = d.getTime();
    var rate = "fas fa-star-half-alt";
	var newRecord = {
	 "Date": newDate,
	 "Time": newTime,
	 "Health": rate,
	};
	data.friends.push(newRecord);
	response.render('profile_records', data);
}	