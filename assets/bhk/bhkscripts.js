var currentPosition=0;
var animationFinished=true;
var numOfSegments=4;
var endPosition;

$(document).ready(function(){
//  $("p").click(function(){
//    $(this).hide();
//  });
  endPosition=$("#t"+numOfSegments.toString()).offset().top
  $("html").on('mousewheel', function(e){
    e.preventDefault();
    if(e.originalEvent.wheelDelta > 0) {
      //code for scrolling up
      if(animationFinished){
        if (currentPosition > 0){
          currentPosition --;
        }
        else{
          currentPosition=0;
        }
        animationFinished=false;
        var positTop = $("#t"+currentPosition.toString()).offset().top;
        $("#progressBar").animate({
          "width": Math.floor(positTop/endPosition*100).toString()+"%"
        })
        $("html, body").animate({
          scrollTop: positTop
        }, 400, "swing", function(){animationFinished=true});
      }
      //console.log('scrolling up !');
    }
    else{
      //code for scrolling down
      if(animationFinished){
        if(currentPosition<numOfSegments){
          currentPosition++;
        }
        else {
          currentPosition=numOfSegments;
        }
        animationFinished=false;
        var positTop = $("#t"+currentPosition.toString()).offset().top;
        $("#progressBar").animate({
          "width": Math.floor(positTop/endPosition*100).toString()+"%"
        })
        $("html, body").animate({
          scrollTop: positTop
        }, 400, "swing", function(){animationFinished=true});
      }
      //console.log('scrolling down !');
    }
  });

  $("#topbtn").on("click", function(){
    currentPosition=0;
    animationFinished=false;
    $("#progressBar").animate({
      "width": "0%"
    })
    $("html, body").animate({
      scrollTop: 0
    }, 400, "swing", function(){animationFinished=true});
  });
  $("#upbtn").on("click", function(){
    if (currentPosition > 0){
      currentPosition--;
      animationFinished=false;
      var positTop = $("#t"+currentPosition.toString()).offset().top;
      $("#progressBar").animate({
        "width": Math.floor(positTop/endPosition*100).toString()+"%"
      })
      $("html, body").animate({
        scrollTop: positTop
      }, 400, "swing", function(){animationFinished=true});
    }
  });
  $("#downbtn").on("click", function(){
    if (currentPosition < numOfSegments){
      currentPosition++;
      animationFinished=false;
      var positTop = $("#t"+currentPosition.toString()).offset().top;
      $("#progressBar").animate({
        "width": Math.floor(positTop/endPosition*100).toString()+"%"
      })
      $("html, body").animate({
        scrollTop: positTop
      }, 400, "swing", function(){animationFinished=true});
    }
  });


});
