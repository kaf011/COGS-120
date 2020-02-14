'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// example: $("#div-id").click(functionToCall);
	//$(".record-btn").click(projectClick);
	$("a.record").click(addProjectDetails);

}

function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div date
	var recordDate = $(this).closest('.record').attr('Date');

  $.get("/profile/"+recordDate, callBackFn);

	console.log("User clicked on record " + recordDate);

	console.log("URL: " + "/profile/"+recordDate);
}


function callBackFn(result){
  console.log(result);
	var projectHTML = '<div class="record-detail"><h2>Meal Record</h2><p>Date: ' + record["Date"] + '</p><p>Time: " +${time}</p><p>Meal Ends: </p><p>Durition: </p><p>Health Rate: </p>';
  console.log(projectHTML);
	$("#project"+result["id"]+" .details").html(projectHTML);
}

function projectClick(e) {
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    //$(this).css("background-color", "#7fff00");

	  //var containingProject = $(this).closest(".record");
		var detail = $(this).find(".record-detail");
		var date = $(this).find(".date").text;
		var time = $(this).find(".time").text;
		if (detail.length == 0){
			var string = `<div class="record-detail"><h2>Meal Record</h2><p>Date: ${date}</p><p>Time: ${time}</p><p>Meal Ends: </p><p>Durition: </p><p>Health Rate: </p>`;
			$(this).append(string);
			// $(containingProject).append($(date).text);
			// $(containingProject).append("<text>Start Time: </text>");
			// $(containingProject).append($(time).text);
			// $(containingProject).append("<text>End Time: </text>");
		} else {
			$(".record-detail").hide();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }

}
