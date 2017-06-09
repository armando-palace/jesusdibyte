$(document).on("ready", function(){
	$(".front-text").mouseenter(function(){
		$(this).finish();
		$(this).animate({ color: "red" });
		$(this).animate({ color: "white" });
	});
	
	$(".thick").mouseenter(function(){
		$(this).finish();
		$(this).animate({ backgroundColor: "red" });
		$(this).animate({ borderColor: "red" }, { queue: false });
		$(this).animate({ backgroundColor: "white" });
		$(this).animate({ borderColor: "white" });
	});
	
	$(".left-box").mouseenter(function(){
		$(this).finish();
		//$(this).css("border", "solid 1px");
		$(this).animate({ borderColor: "white" });
	});
	$(".left-box").mouseleave(function(){
		$(this).finish();
		$(this).animate({ borderColor: "transparent" });
		$(this).animate({ borderLeftColor: "#990012" }, { queue: false });
		//$(this).css("border-left-color", "#990012");
	});
	
	$(".right-box").mouseenter(function(){
		$(this).finish();
		$(this).animate({ borderColor: "white" });
	});
	$(".right-box").mouseleave(function(){
		$(this).finish();
		$(this).animate({ borderColor: "transparent" });
		$(this).animate({ borderRightColor: "#990012" }, { queue: false });
	});
});