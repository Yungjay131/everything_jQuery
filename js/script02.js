$(function(){
    $(".lightbox").delay(2000)
                  .fadeIn(3000, ()=>{
                    $(".lightbox").delay(1000);
                    $(".lightbox").fadeOut(1000);
                  });

});