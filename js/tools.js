$(function() {
	$(".modal").css("transform","translateY(0px)");

	$('.iconBox').click( function() {
	var linkSelection= $(this).attr('class').split(' ')[1];
	if(linkSelection=="icon-soundcloud")
	{
		window.open("http://rpa.life/2lhz5yK");
	}
	if(linkSelection=="icon-facebook-squared")
	{
		window.open("http://rpa.life/2lhC1vm");
	}
	if(linkSelection=="icon-instagram")
	{
		window.open("http://rpa.life/2lhL2Vj");
	}
	if(linkSelection=="icon-youtube-squared")
	{
		window.open("http://rpa.life/2kfBR7n");
	}
	});

	$('.music').click( function() {
		var pos = $(".musicContent").css("transform");
		if(pos == "matrix(1, 0, 0, 1, 0, 0)")
		{
			$(".musicContent").css("transform","translateY(2000px)");
		}
		else {
			$(".videoContent").css("transform","translateY(2000px)");
			$(".musicContent").css("transform","translateY(0px)");
		}
	});

	$('.videos').click( function() {
	var pos = $(".videoContent").css("transform");
	console.log("video");
	console.log(pos);
	if(pos == "matrix(1, 0, 0, 1, 0, 0)")
	{
		$(".videoContent").css("transform","translateY(2000px)");

	}
	else {
		$(".musicContent").css("transform","translateY(2000px)");
		$(".videoContent").css("transform","translateY(0px)");
	}
	});

	$('.close-btn').click(function(){
		$(".modal").css("transition","transform 1s");
		$(".modal").css("transform","translateY(2000px)");
		$(".overlay").fadeOut();
	})
});
