var data = require("../data.json");

exports.addRecord = function(request, response) {
    var d = new Date();
	var newDate = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
    var newTime = d.getHours()+":"+d.getMinutes();
    var rate = "fas fa-star-half-alt";
	var newRecord = {
	 "Date": newDate,
	 "Time": newTime,
	 "Health": rate,
    };
    data.records.reverse();
    data.records.push(newRecord);
    data.records.reverse();
	response.render('profile', data);
}
