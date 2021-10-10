//replacing elements and content
$(function(){
   $("li").replaceWith("<li> Replaced </li>");

   //using function
   $("li").replaceWith(()=>{
       return "<li> Replaced </li>";
   });

   //storing in a variable
   const listItemFirst = $("li:first");
   $("p:first").replaceWith(listItemFirst);

   //replacing multiple elements
   $(".red-box, .blue-box" ).replaceWith("<div class='green-box'>More Green</div>");

   //doing it the other way 
   $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");
});