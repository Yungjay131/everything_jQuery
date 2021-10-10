//jQuery selectors
$(function(){
     $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
   
     $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");

     $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
   
     $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");

     //selecting only the first paragraph
     $("p:first").css("background-color", "rgba(180, 180, 30, 0.8)" );

     $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)" );
     $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)" );

     $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)" );
     $("input:selected").css("background-color", "rgba(180, 180, 30, 0.8)" );
     $("input:checked").css("background-color", "rgba(180, 180, 30, 0.8)" );
});