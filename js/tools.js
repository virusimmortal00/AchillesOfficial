$(function() {

	function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};

	var isMobile = isMobileDevice();
	if(isMobile)
	{
		window.location.href = "http://m.achillesofficial.com/";
	}

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

	$('.listenToMore').click( function() {
		window.open("http://rpa.life/2lhz5yK");
	});

	$('.close-btn').click(function(){
		$(".modal").css("transition","transform 1s");
		$(".modal").css("transform","translateY(2000px)");
		$(".overlay").fadeOut();
	});

	$("form").submit(function(event) {
	var email = $("#email").val();
  event.preventDefault();
	var formURL = "https://docs.google.com/forms/d/e/1FAIpQLScynG8cF30Kdwqt4mZYP45Wwl1x4Ks2SwmTHsaCUHdyJy2xhg/formResponse";
	var inputField = "entry.1348504284";

	$.ajax({
		url: formURL,
		data: {"entry.1348504284": email},
		type: "POST",
		dataType: "xml",
	});

	$(".thanks").css("transform","translateY(0px)").delay(1000).fadeOut(1000).delay(1000);
	$(".overlay").fadeOut(1000);

	});

	$('#pic1').click(function(){
    $.fancybox({
        href: "img/img1.jpg"
    });
	});
	$('#pic2').click(function(){
		$.fancybox({
				href: "img/img2.jpg"
		});
	});
	$('#pic3').click(function(){
		$.fancybox({
				href: "img/img3.jpg"
		});
	});
	$('#pic4').click(function(){
		$.fancybox({
				href: "img/img4.jpg"
		});
	});

});
