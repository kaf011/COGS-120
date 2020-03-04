$(document).ready(function() {
  initializePage();
  //$('#profile_record').hide();
  $(".food-btn-chosen").click(projectClick);
})


function projectClick(e) {
  // prevent the page from reloading
  var timeSincePageLoad = Math.round(performance.now());
  //ga('send', 'event', 'Timer', 'set');
  ga('send', 'timing', 'Timer', 'set', timeSincePageLoad);
  console.log(timeSincePageLoad);

  e.preventDefault();
  // In an event handler, $(this) refers to
  //var chosen = $(this).find(".food-btn-chosen-chosen");
  // if (chosen.length == 0) {
  //
  //   $(this).addClass("food-btn-chosen-chosen");
  //
  // } else {
  $(this).toggleClass("food-btn-chosen-chosen");
  //
  // }



}