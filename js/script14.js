//delegated events
$(function(){
  $("p").click(function(){
     $(this).slideUp();
  });

  //this would not have the eventListener above
  let divContent = $("#content");
  divContent.append("This was a dynamically added <p> tag");

  //the solution is to delgate the eventListener to the parent
  divContent.on("click", "p", function(event){
     //$(this) now refers to <p>
     $(this).slideUp();
  });

  let pNew = '<br><p> This is a dynamically added paragraph at the end of the page</p>';
  divContent.html( divContent.html() + pNew );

  $('body').on("mouseenter", "li", function(){
    //this now refers to the <li>
     $(this).css("color", "#666");
  });

});