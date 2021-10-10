//adding new elements to the DOM
$(function(){
   $("ul ul:first").append("<li> last sub-item </li>");

   //creating a new HTMLElement
   $("<li> new last item </li>").appendTo($("ul ul:first"));

   //adding element as the first child
   $("ul ul:first").prepend("<li> this is the last sub-item </li>");
  
   $("<li> new last item </li>").prependTo($("ul ul:first"));


   //adding elements as sibings
   //adds a new red div as a sibling of all red divs
   $(".red-box").after("<div class='red-box'>Another Red </div>");
  
  
   //adding sibling before
   $(".blue-box").before("<div class='blue-box'>Another Blue </div>");

   //using functions to add elements
   $(".blue-box").before(()=>{
       return "<div class='blue-box'>Blue 2</div>";
   });

   //using already existing UI components, it makes it move not duplication
   $(".blue-box").before($(".red-box"));
  });