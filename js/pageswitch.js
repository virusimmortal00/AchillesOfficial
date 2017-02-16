$('.music').click( function() {
  var pos = $(".musicContent").css("transform");
  if(pos == "matrix(1, 0, 0, 1, 0, 0)")
  {
    $(".musicContent").css("transform","translateY(2000px)");
  }
  else {
    $(".videoContent").css("transform","translateY(2000px)");
    $(".picContent").css("transform","translateY(2000px)");
    $(".bioContent").css("transform","translateY(2000px)");
    $(".merchContent").css("transform","translateY(2000px)");
    $(".musicContent").css("transform","translateY(0px)");
  }
});

$('.videos').click( function() {
var pos = $(".videoContent").css("transform");
if(pos == "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".videoContent").css("transform","translateY(2000px)");
}
else {
  $(".musicContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(2000px)");
  $(".merchContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(0px)");
}
});

$('.pics').click( function() {
var pos = $(".picContent").css("transform");
if(pos == "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".picContent").css("transform","translateY(2000px)");
}
else {
  $(".musicContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(2000px)");
  $(".merchContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(0px)");
}
});

$('.bio').click( function() {
var pos = $(".bioContent").css("transform");
if(pos == "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".bioContent").css("transform","translateY(2000px)");
}
else {
  $(".musicContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(2000px)");
  $(".merchContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(0px)");
}
});

$('.merch').click( function() {
var pos = $(".merchContent").css("transform");
if(pos == "matrix(1, 0, 0, 1, 0, 0)")
{
  $(".merchContent").css("transform","translateY(2000px)");
}
else {
  $(".musicContent").css("transform","translateY(2000px)");
  $(".videoContent").css("transform","translateY(2000px)");
  $(".picContent").css("transform","translateY(2000px)");
  $(".bioContent").css("transform","translateY(2000px)");
  $(".merchContent").css("transform","translateY(0px)");
}
});
