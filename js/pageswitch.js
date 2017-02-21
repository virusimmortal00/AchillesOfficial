var navSelected = "#musicli";

$('.music').click( function() {
  var pos = $(".musicContent").css("transform");
  if(pos != "matrix(1, 0, 0, 1, 0, 0)")
  {
    $(".videoContent").css("transform","translateY(2000px)");
    $(".picContent").css("transform","translateY(2000px)");
    $(".bioContent").css("transform","translateY(2000px)");
    $(".musicContent").css("transform","translateY(0px)");
    $(navSelected).toggleClass("selected");
    $('#musicli').toggleClass("selected");
    navSelected = "#musicli";
  }
});

$('.videos').click( function() {
var pos = $(".videoContent").css("transform");
if(pos != "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".musicContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(0px)");
  $(navSelected).toggleClass("selected");
  $('#videosli').toggleClass("selected");
  navSelected = "#videosli";
}
});

$('.pics').click( function() {
var pos = $(".picContent").css("transform");
if(pos != "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".musicContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(0px)");
  $(navSelected).toggleClass("selected");
  $('#picsli').toggleClass("selected");
  navSelected = "#picsli";
}
});

$('.bio').click( function() {
var pos = $(".bioContent").css("transform");
if(pos != "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".musicContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(0px)");
  $(navSelected).toggleClass("selected");
  $('#bioli').toggleClass("selected");
  navSelected = "#bioli";
}
});
/*
$('.merch').click( function() {
var pos = $(".merchContent").css("transform");
if(pos == "matrix(1, 0, 0, 1, 0, 0)")
{
  //$(".merchContent").css("transform","translateY(2000px)");
}
else {
  $(".musicContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(2000px)");
  $(".merchContent").css("transform","translateY(0px)");
}
});
*/
