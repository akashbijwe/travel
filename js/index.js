$(document).ready(function(){
      $(".first").addClass("active");
      $(".navigations .right").on("click", function(){
        next();
      });
      $(".navigations .left").on("click", function(){
        prev();
      });

      function next(){
        $('.left').show();
        var current_element = $("body").find(".active");
        changeColorNext(current_element);
        current_element.removeClass("active").next().addClass("active");
        current_element.animate({left: "-310px"}, 500).next().animate({left: "0px"}, 500);    
        if(current_element.attr("class") == 'second'){
          $(".right").hide();
        }
      }

      function prev(){
        $('.right').show();
        var current_element = $("body").find(".active");
        changeColorPrev(current_element);
        current_element.removeClass("active").prev().addClass("active");
        current_element.animate({left: "310px",}, 500).prev().animate({left: "0px"}, 500);
        if(current_element.attr("class") == 'second'){
          $(".left").hide();
        }        
      }
      function changeColorNext(current_element){
        if(current_element.next().attr("class") == "first"){
          $("body").css({"background-color": "#BD667D"});
        }
        if(current_element.next().attr("class") == "second"){
          $("body").css({"background-color": "#797CA0"});
        }
        if(current_element.next().attr("class") == "third"){
          $("body").css({"background-color": "#4D9AAE"});
        }
      }
      function changeColorPrev(current_element){
        if(current_element.prev().attr("class") == "first"){
          $("body").css({"background-color": "#BD667D"});
        }
        if(current_element.prev().attr("class") == "second"){
          $("body").css({"background-color": "#797CA0"});
        }
        if(current_element.prev().attr("class") == "third"){
          $("body").css({"background-color": "#4D9AAE"});
        }
      }
    });