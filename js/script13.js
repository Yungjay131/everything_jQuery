///adding click handlers

let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg" 
];


$(function(){
   const boxRed =  $(".red-box:first");
   boxRed.click( function(event){
    console.log("red-box was clicked");

    $(this).fadeTo(1000,0.5);
    event.preventDefault();
   });

   //triggering your own events
   boxRed.click();

   //testing hover
   //note that hover event fires twice, once when it is
   //entered and once when leaving it
   $("#btn-hover").hover((event)=>{
      alert("Hover ");    
   });

   const boxGreen = $('.green-box');
   let boxGreen_status = true;
  boxGreen.hover(function (event) {
    if(boxGreen_status)  $(this).text("This was hovered");
    else  $(this).text("Green");

    boxGreen_status = !boxGreen_status;
  });

  boxGreen.unbind('hover');//should be off() and on()

  //using hover() like mouseenter and mouseleave
  boxGreen.hover( (event)=>{
   //on mouseennter
    boxGreen.text('mouse entered');
  }, (event)=>{
   //on mouseleave
   boxGreen.text('mouse left');
  });

  //onMouseEnter and onMouseLeave
  const boxBlue = $(".blue-box");
  boxBlue.mouseenter( (event)=>{
      boxBlue.stop().fadeTo(500,0.5);
  });

  //first stoping any animation running
  boxBlue.mouseleave( (event)=>{
      boxBlue.stop().fadeTo(500,1);
  });

  //using the same handler for multiple event types
  $("html").on("click keydown", function(){
   console.log("Mouse was clicked or key was pressed");
  });

  let index = 1;

  // $(".gallery").find("img").on("click", function(){
  //    $(this).fadeOut(100, function(){
  //        index = index < 2 ? index : 0;

  //        console.log(`current index is: ${index}`);

  //        $(this).attr("src", images[index])
  //               .fadeIn();       

  //        index++;
  //    });

  // });
  
  //using different selectors
  $(".gallery img:first").on("click", function(){
    $(this).fadeOut(100, function(){
        index = index < 2 ? index : 0;

        console.log(`current index is: ${index}`);

        $(this).attr("src", images[index])
               .fadeIn();       

        index++;
    });
  });


});