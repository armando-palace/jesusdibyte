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
});