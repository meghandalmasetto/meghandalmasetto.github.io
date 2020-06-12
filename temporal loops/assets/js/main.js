$(document).ready(function(){
	console.log("I'm Ready!");

	$('.toggle').click(function(){
		$('.quote').slideToggle("1sec");
	});
});

$(document).ready(function(){
  $(".earth").click(function(){
    $(".population").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function(){
    $(".population").removeClass("slide");
    $(".close").removeClass("show");
  });
});

$(document).ready(function(){
  $(".rocket").click(function(){
    $(".distance").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function(){
    $(".distance").removeClass("slide");
    $(".close").removeClass("show");
  });
});

$(document).ready(function(){
  $(".mars").click(function(){
    $(".life").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function(){
    $(".life").removeClass("slide");
    $(".close").removeClass("show");
  });
});