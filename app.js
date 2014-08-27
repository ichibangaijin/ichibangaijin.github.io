$(document).ready(function(){
	$("#portfolioButton").click(function(){
		$(".portfolio-box").css("display", "none");
		$(".page-title").text("Some of my recent projects...");
		$(".page-description").hide();
		$(".hidden-slide-show").show();
		

		});
});

