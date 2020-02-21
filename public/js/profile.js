'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
  //$('#profile_record').hide();
  $('ul li:gt(3)').hide();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  // example: $("#div-id").click(functionToCall);
  //$(".record-btn").click(addProjectDetails); //TODO
  $(".record-btn").click(projectClick); //

}


function projectClick(e) {
  // prevent the page from reloading

  e.preventDefault();
  // In an event handler, $(this) refers to

  // the object that triggered the event

  //$(this).css("background-color", "#7fff00");

  var record = $(this).closest(".record");
  var id = record.attr('id');
  var date = $(this).find(".date").html();
  var duration = $(this).find(".duration").html();
  console.log(duration);
  var time = $(this).find(".time").html();
  var health = $(this).find(".health").html();
  var detail = $(this).find(".record-detail");
  if (detail.length == 0) {
    var string = `<div class="record-detail"><h2>Meal Record</h2><p>Date: ${date}</p><p>Time: ${time}</p><p>Durition: ${duration} </p><p>Health Rate: ${health} </p>`;
    $(this).append(string);

  } else {
    $(".record-detail").toggle(); //toggle

  }

}

// TODO: function to use later, new files required.
function addProjectDetails(e) {
  // Prevent following the link
  e.preventDefault();

  // Get the div ID, e.g., "project3"
  var projectID = $(this).closest('.record').attr('id');
  // get rid of 'project' from the front of the id 'project3'
  var idNumber = projectID.substr('record'.length);
  $.get("/record/" + idNumber, callBackFn);

  console.log("User clicked on record " + idNumber);

  console.log("URL: " + "/record/" + idNumber);
}

function callBackFn(result) {
  console.log(result);
  var projectHTML = "";
  console.log(projectHTML);
  $("#record" + result["id"] + " .details").html(projectHTML);
}

// // index.handlebars
// {{#each projects}}
// <div class="project" id="{{id}}">
// 	<div class="thumbnail">
// 		<a href="#">
// 			<img src="images/{{image}}" alt="Lorem Pixel image" class="img">
// 			<p>{{name}}</p>
// 		</a>
// 		<div class="details"></div>
// 	</div>
// </div>
// {{/each}}
//
//
// // introHCI.js
// function initializePage() {
// 	$('.project a').click(addProjectDetails);
//
// 	// $('#colorBtn').click(randomizeColors);
// }
//
// /*
//  * Make an AJAX call to retrieve project details and add it in
//  */
// function addProjectDetails(e) {
// 	// Prevent following the link
// 	e.preventDefault();
//
// 	// Get the div ID, e.g., "project3"
// 	var projectID = $(this).closest('.project').attr('id');
// 	// get rid of 'project' from the front of the id 'project3'
// 	var idNumber = projectID.substr('project'.length);
//   $.get("/project/"+idNumber, callBackFn);
//
// 	console.log("User clicked on project " + idNumber);
//
// 	console.log("URL: " + "/project/"+idNumber);
// }
//
// function callBackFn(result){
//   console.log(result);
// 	var projectHTML = '<img src="' + result["image"] + '" class="detailsImage">' + "<h5>" + result["title"] + "</h5> <h6>" + result["date"] + "</h6> <p>" + result["summary"] + "</p>";
//   console.log(projectHTML);
// 	$("#project"+result["id"]+" .details").html(projectHTML);
// }