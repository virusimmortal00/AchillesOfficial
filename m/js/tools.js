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


});
