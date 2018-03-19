var currentSegment=0;
var animationFinished=true;
var numOfSegments=4;
var endPosition;

$(document).ready(function(){
//  $("p").click(function(){
//    $(this).hide();
//  });
  //scrolling functions
  endPosition=$("#t"+numOfSegments.toString()).offset().top
  function scrollToSegment(pos){
    if (!animationFinished) return;
    animationFinished = false;
    currentSegment = pos;
    var positTop = $("#t"+currentSegment.toString()).offset().top;
    $("#progressBar").animate({
      "width": Math.floor(positTop/endPosition*100).toString()+"%"
    });
    $("html, body").animate({
      scrollTop: positTop
    }, 400, "swing", function(){animationFinished=true});
  }
  function scrollToTop(){
    if (!animationFinished) return;
    animationFinished = false;
    currentSegment = 0;
    $("#progressBar").animate({
      "width": "0%"
    });
    $("html, body").animate({
      scrollTop: 0
    }, 400, "swing", function(){animationFinished=true});    
  }
  function scrollUp(){
    if (!animationFinished) return;
    if (currentSegment > 0){
      scrollToSegment(currentSegment-1);
    }
    else {
      scrollToTop();
    }
  }
  function scrollDown(){
    if (!animationFinished) return;
    if (currentSegment == numOfSegments){
      scrollToSegment(currentSegment);
    }
    else {
      scrollToSegment(currentSegment+1);
    }
  }
  
  //binding the scroll functions
  $("html").on("scroll", function(e){e.preventDefault();});
  $("html").on('mousewheel', function(e){
    e.preventDefault();
    if(e.originalEvent.wheelDelta > 0){scrollUp();}
    else{scrollDown();}
  });
  $("html").on("keydown", function(e){
    if ([38, 33].indexOf(event.which) != -1){
      scrollUp();
    }
    else if ([34, 40, 32].indexOf(event.which)!= -1) {
      scrollDown();
    }
  });
  $("#topbtn").on("click", scrollToTop);
  $("#upbtn").on("click", scrollUp);
  $("#downbtn").on("click", scrollDown);
  
  //showhide navbar
  $("#hidebtn").on("click", function(){
    $("#navbar").hide();
    $("#navalert").show();
  });
  $("html").on("dblclick", function(){
    $("#navbar").show();
  })

});
