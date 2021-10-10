//removing elements from the page
$(function(){
   $("li").remove();

   $("form").children().not("input:text, textarea, br").remove();

   //removes the element but keeps its info, eventListeners and
   //allow for re-insertion
   const listItemDetached = $("li").detach();

   $("#content").append(listItemDetached);

   //emptying the tag
   $("p:first").empty();
   $(".red-box, .green-box, .blue-box").empty();

  });