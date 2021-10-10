let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg" 
];

function displaySequence( imgGallery ){
  let index = 0;
   setTimeout(()=>{
      imgGallery.show(); 

      const interval = setInterval(function(){
        index = (++index) % images.length;
  
        imgGallery.fadeOut(function(){
          $(this).attr("src", images[index])
          $(this).fadeIn();
        }); 

        //once it has displayed all images, hide
        if( index === 2 ){
          clearInterval(interval);
          $(".gallery").hide();
          console.log("done with clearing interval")
        }

      }, 2000);
   }, 2000);
}

$(function(){
   const imgGallery = $(".gallery").find("img").first();
   imgGallery.css("display", "none");//same as .hide();
   
   displaySequence( imgGallery );

  
   const boxRed = $(".red-box:first");
   console.log(boxRed.css("width")); //returns the unit as well
   

   //increasing all the paragraph's font-size
   $("p").css("font-size", "18px");
   
   //can also set relative values
   boxRed.css("width", "+=20px");

   //changing many properties at once
   const properties = $("p").css(["font-size", "line-height", "color"]);
   console.log(properties);
   console.log(properties["font-size"]);

   //making the text unselectable
   //and adapts it to moz or webkit according to the browser
   boxRed.css("user-select", "none" );

   //also takes functions
   boxRed.css("user-select", ()=>{

   });

   //adding CSS classes

  $("a").addClass("fancy-link");
  $("p:first").addClass("large emphasize");
 

  //using functions
  $("li li").addClass( function(){
    $(this).addClass(`item-${index}`);
  });

  //selecting via functions
  $("div").addClass((index, currentClass)=>{
    if( currentClass === "dummy") return "red-box";
  });

  //to remove a jQuery class
  $(".red-box dummy").removeClass("dummy").addClass("new-box");
});