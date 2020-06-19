$(document).ready(function(){
	console.log("I'm Ready!");

	$('.toggle').click(function(){
		$('.quote').slideToggle("show");
	});

	$('.planets').click(function(){
		$('.content').slideToggle("slow");
	});

	// start shape popup
	$('.b-1').click(function() {
  	$('.p-1').toggleClass('show');
	});
	// end shape popup

	// start shape popup
	$('.b-2').click(function() {
	  $('.p-2').toggleClass('show');
	});
	// end shape popup

	// start shape popup
	$('.b-3').click(function() {
	  $('.p-3').toggleClass('show');
	});
	// end shape popup

	// start shape popup
	$('.b-4').click(function() {
	  $('.p-4').toggleClass('show');
	});
	// end shape popup


	// CLOSE ANY OPEN SHAPE

	// CLOSE ANY OPEN SHAPE

	 $('.popup').draggable();
	});

