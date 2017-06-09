$(document).on("ready", function(){
  $(".left-button").mouseenter(function(){
		$(this).finish();
		$(this).animate({
      backgroundColor: "transparent",
      color: "#d9534f",
      borderColor: "#d9534f"
    }, 500);
    $(this).animate({ borderColor: "white", color: "white" });
	});
	$(".left-button").mouseleave(function(){
		$(this).finish();
		$(this).animate({
			borderColor: "#d9534f",
			color: "white",
			backgroundColor: "#d9534f"
		});
	});
	
	$(".me-button").css("background-color", "#990012");
	$(".me-button").css("border", "solid 1px");
	$(".me-button").css("border-color", "#FFCCCC");
	$(".me-button").mouseenter(function(){
		$(this).finish();
		$(this).animate({
      backgroundColor: "#FFCCCC",
      borderColor: "#990012",
      color: "#990012",
    }, 500);
	});
	$(".me-button").mouseleave(function(){
		$(this).finish();
		$(this).animate({
			color: "#FFCCCC",
			backgroundColor: "#990012",
			borderColor: "#FFCCCC"
		});
	});
	
	$(".right-button").mouseenter(function(){
		$(this).finish();
		$(this).animate({
      backgroundColor: "transparent",
      color: "#d9534f",
      borderColor: "#d9534f"
    }, 500);
    $(this).animate({ borderColor: "white", color: "white" });
	});
	$(".right-button").mouseleave(function(){
		$(this).finish();
		$(this).animate({
			borderColor: "#d9534f",
			color: "white",
			backgroundColor: "#d9534f"
		});
	});
  
  $(".left-content").css("display", "none");
	$(".left-button").click(function(){
    $(".right-content").css("display", "none");
    $(".left-content").toggle("slide", {
      direction: "up",
      duration: 500,
      easing: 'easeOutQuint'
    });
  });
  
  $(".right-content").css("display", "none");
	$(".right-button").click(function(){
    $(".left-content").css("display", "none");
    $(".right-content").toggle("slide", {
      direction: "up",
      duration: 500,
      easing: 'easeOutQuint'
    });
  });
  
  $(".profile").css("display", "none");
  $(".me-button").click(function(){
    $(".profile").toggle("slide", {
      direction: "up",
      duration: 500,
      easing: 'easeOutQuint'
    });
  });
});