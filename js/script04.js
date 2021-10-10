//for traversig the DOM
$(function(){
   $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)" );

   //to check only the direct children
   $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8" );

   //select paret that matches div
   $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)" );
  
   //for a sigle elemet
   $("#list").parent("div").css("background-color", "rgba(180, 180, 30, 0.8)" );
 
   //siligs (h1-h6)
   $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8" );
  
   //previous ad next
   $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8" );
   $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8" );
  });