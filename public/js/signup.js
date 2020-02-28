//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var imageId;



// $(".submit1").click(function() {
//   var name = $("#field1").find(".name").val();
//   var pw = $("#field1").find(".pw").val();
//   var email = $("#field1").find(".email").val();
//   console.log(name);
//   var newUser = {
//     // "Username": name,
//     // "Password": pw,
//     // "Email": email,
//     "Date": name,
//     "Time": pw,
//     "Duration": email,
//     "Health": ""
//   };
//
//
//   // data.records.reverse();
//   // data.records.push(newUser);
//   // data.records.reverse();
//   // response.render('profile', data);
// });

// function submitClick(e) {
//   // prevent the page from reloading
//   e.preventDefault();
//   var name = $("#field1").find(".name").val();
//   var pw = $("#field1").find(".pw").val();
//   var email = $("#field1").find(".email").val();
//   console.log(name);
//   var newUser = {
//     "Username": name,
//     "Password": pw,
//     "Email": email,
//   };
//   // data.records.reverse();
//   // data.records.push(newRecord);
//   // data.records.reverse();
//   // response.render('profile', data);
//   fs.writeFile('../../data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
//     if (err) throw err
//     console.log('Done!')
//   })
//
// }



// $(".next").click(function() {
//   if (animating) return false;
//   animating = true;
//
//   current_fs = $(this).parent();
//   next_fs = $(this).parent().next();
//
//   //activate next step on progressbar using the index of next_fs
//   $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
//
//   //show the next fieldset
//   next_fs.show();
//   //hide the current fieldset with style
//   current_fs.animate({
//     opacity: 0
//   }, {
//     step: function(now, mx) {
//       //as the opacity of current_fs reduces to 0 - stored in "now"
//       //1. scale current_fs down to 80%
//       scale = 1 - (1 - now) * 0.2;
//       //2. bring next_fs from the right(50%)
//       left = (now * 50) + "%";
//       //3. increase opacity of next_fs to 1 as it moves in
//       opacity = 1 - now;
//       current_fs.css({
//         'transform': 'scale(' + scale + ')',
//         'position': 'absolute'
//       });
//       next_fs.css({
//         'left': left,
//         'opacity': opacity
//       });
//     },
//     duration: 800,
//     complete: function() {
//       current_fs.hide();
//       animating = false;
//     },
//     //this comes from the custom easing plugin
//     easing: 'easeInOutBack'
//   });
// });
//
// $(".previous").click(function() {
//   if (animating) return false;
//   animating = true;
//
//   current_fs = $(this).parent();
//   previous_fs = $(this).parent().prev();
//
//   //de-activate current step on progressbar
//   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
//
//   //show the previous fieldset
//   previous_fs.show();
//   //hide the current fieldset with style
//   current_fs.animate({
//     opacity: 0
//   }, {
//     step: function(now, mx) {
//       //as the opacity of current_fs reduces to 0 - stored in "now"
//       //1. scale previous_fs from 80% to 100%
//       scale = 0.8 + (1 - now) * 0.2;
//       //2. take current_fs to the right(50%) - from 0%
//       left = ((1 - now) * 50) + "%";
//       //3. increase opacity of previous_fs to 1 as it moves in
//       opacity = 1 - now;
//       current_fs.css({
//         'left': left
//       });
//       previous_fs.css({
//         'transform': 'scale(' + scale + ')',
//         'opacity': opacity
//       });
//     },
//     duration: 800,
//     complete: function() {
//       current_fs.hide();
//       animating = false;
//     },
//     //this comes from the custom easing plugin
//     easing: 'easeInOutBack'
//   });
// });
//
// $(".submit").click(function() {
//   return false;
// })
//
//
// $(".avatar-img").click(function(e) {
//   $(".avatar-img").removeClass("avatar-img-selected");
//   $(this).toggleClass("avatar-img-selected");
//   imageId = $(this).attr('id')
//   // $(this).css({'border-radius': '50%', 'width': '6rem',
//   //
//   // 'border': 4px solid #494949,
//   // 'margin':10px,
//   // 'padding':2px});
// });