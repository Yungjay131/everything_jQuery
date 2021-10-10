//mini slideshow project
let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg" 
];

$(function(){
   const imgGallery = $(".gallery").find("img").first();

   //switching the image every 2 secs
   let index = 0;
   setInterval(()=>{
    index = (++index) % images.length; //0,1,2 repeatedly
    
    imgGallery.fadeOut(function(){
      $(this).attr("src", images[index])
      $(this).fadeIn();
    })
  },2000);
});