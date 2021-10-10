//filtering selected elements
$(function(){
   $("#list").find("li")
             .filter(":even")
             .css("background-color", "rgba(180, 180, 30, 0.8");
  

  $("#list").find("li")
             .filter(":even")
             .css("background-color", "rgba(180, 180, 30, 0.8");


  $("li").filter(function(index){
       return true;//to keep the element
  }).css("background-color","rgba(180, 180, 30, 0.8");           


  $("li").first().css("background-color", "rgba(180, 180, 30, 0.8");
  $("li").last().css("background-color", "rgba(180, 180, 30, 0.8");
  
  //returns the 2nd element
  $("li").eq(1).css("background-color", "rgba(180, 180, 30, 0.8");
  
  //goig from back to front
  $("li").eq(-1).css("background-color", "rgba(180, 180, 30, 0.8");
  
  //returning all except
  $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8");
  $("li").not((index)=>{
       return true;//means include in 'not' list
  }).css("background-color", "rgba(180, 180, 30, 0.8");
});
