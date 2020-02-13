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
	$("button.record-btn").click(projectClick);

}


function projectClick(e) {
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    //$(this).css("background-color", "#7fff00");

		var containingProject = $(this).closest(".record");
		var detail = $(containingProject).find(".record-detail");
		var date = $(containingProject).find(".date");
		var time = $(containingProject).find(".time");
		if (detail.length == 0){
			$(containingProject).append("<div class='record-detail'><h1>Meal Record</h1><p>Date: </p><p>Meal Starts: </p><p>Meal Ends: </p><p>Durition: </p><p>Health Rate: </p>");
			// $(containingProject).append($(date).text);
			// $(containingProject).append("<text>Start Time: </text>");
			// $(containingProject).append($(time).text);
			// $(containingProject).append("<text>End Time: </text>");
		} else {
			$(".record-detail").hide();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }

}
