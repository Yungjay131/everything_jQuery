$(function() {
  // jQuery goes here...
 //selecting all anchor elements with class of 'external'
  //$("a.external").fadeOut(2000);

  //Uncomment this line to fade out the red box on page load
 $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(3000);

  $(".red-box").fadeIn(3000);

  //fading to specific opacity
  $(".red-box").fadeTo(1000, 0.5);//50% opacity for red box

  //toggle fade State
  $(".blue-box").fadeToggle();//always rememer to toggle ack

  //hiding elements 
  $(".blue-box").hide();
  $(".blue-box").hide(1000);//add a small animation

  //show all elements that are hidden and hide all shown elements
 $(".blue-box").toggle();

  $(".blue-box").slideUp(2000);
  $(".blue-box").slideDown(2000);

  $("p").hide();
  $("p").slideDown(1000);

  $(".blue-box").slideToggle(2000);

   //testing custom aimations
   console.log("about to test animate");
   $("p").slideDown(500);
   $(".blue-box").fadeToggle(); 

   $(".blue-box").animate({
     "margin-left":"+=200px"
   }, 1000, "linear"); //default is swing

   //custom animation
   $('.blue-box').animate({
       "margin-left":"+=200px",
       "opacity": "0",
       "height": "50px",
       "width": "50px",
       "margin-top":"25px"
   }, 1000);

   $('p').animate({
     fontSize: "20px",
   }, 2000);

   //delaying and chainig aimations
   $(".red-box").fadeTo(1000, 0.2);
   $(".green-box").delay(1000)
                  .fadeTo(1000, 0.5);
   $(".blue-box").delay(2000)
                 .fadeTo(1000, 0.8)
                 .fadeOut()
                 .delay(500)
                 .fadeIn();


  //timing aimations using callack functions
   $(".red-box").fadeTo(1000, 0, ()=>{
      alert("This is the callBack: Animation finished");    
   });     
   
   //using callBack fuctios istead of delay()
   $(".red-box").fadeTo(1000, 0, ()=>{
         $(".green-box").fadeTo(1000, 0, ()=>{
            $(".blue-box").fadeTo( 1000, 0);
         });
   });
  });