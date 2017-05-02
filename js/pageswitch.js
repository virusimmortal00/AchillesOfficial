
function moveTabs(page){
  var navOptions = $('.leftMenu-nav li');
  var navArray = $.makeArray(navOptions);

  var rightContentDivs = $('div[class*="Content"]');
  var contentNodes = [].slice.call(rightContentDivs, 1);
  var skip = contentNodes[0].className;
  var newRay = [];
  for(i = 0; i<contentNodes.length; i++){
    if(contentNodes[i].className != `${page}Content`)
    {
      newRay.push(contentNodes[i].className);
    }
  }
  var pos = $(`.${page}Content`).css("transform");
  //If the position of the current tab is not in the middle, then bring it to center
  if(pos != "matrix(1, 0, 0, 1, 0, 0)")
  {
    for(i=0; i <newRay.length; i++){
      $(`.${newRay[i]}`).css("transform","translateY(2000px)");
    }
    $(`.${page}Content`).css("transform","translateY(0px)");
    $('li[class*="selected"]').toggleClass("selected");
    $(`#${page}li`).toggleClass("selected");
  }
};


$('.music').click( function() {
  return moveTabs(`${this.className}`);
});

$('.video').click( function() {
  return moveTabs(`${this.className}`);
});

$('.pic').click( function() {
  return moveTabs(`${this.className}`);
});

$('.bio').click( function() {
  return moveTabs(`${this.className}`);
});
