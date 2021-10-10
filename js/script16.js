//code along challenge
$(function(){
 const divGallery = $(".gallery");
 const imgGallery = divGallery.find("img");//should get all 3 of them

//  imgGallery.css("width", "33%")
//            .css("opacity", "0.7");

           
imgGallery.css({
  "width":"33%",
  "opacity":"0.7"
});

imgGallery.hover( function(){
  $(this).stop().fadeTo(500, 1);
}, function(){
   $(this).stop().fadeTo(500, 0.7);
});

imgGallery.click( function(){
   let imgSource = $(this).attr("src");
   let img = $("<img>").attr("src", imgSource)
                       .css("width", "100%"); 

   $(".lightbox").empty()
                 .append(img)
                 .fadeIn(2000);

});

$(".lightbox").click(function(){
  $(this).stop().fadeOut();
})


//handling keyoard events
//recommended to use keydown
//key codes let you know which key was pressed
const key_arrow_right = 39;
$("html").keydown( function(event){
   console.log(event.which)

   if(event.which === key_arrow_right){
     $(".blue-box").animate({
        marginLeft : "+=10px"
     });
   }
});

const inputFields = $("input:text, input:password, textarea");
inputFields.focus( function(){
  $(this).css("box-shadow", "0 0 4px #666");
});

//for the blur event which is like the opposite of focus
inputFields.blur(function(){
  $(this).css("box-shadow", "none");
});

$("#name").blur( ()=>{
  let inputText = $(this).val();

  if(inputText.length < 3) $(this).css("box-shadow", "0 0 4px #811");
  else $(this).css("box-shadow", "0 0 4px #181"); 


});

//to notify users once there is a change to a form checkox or something???
$("#checkbox").change( function(){
   let isChecked = $(this).is(":checked");//same as .prop("checked")

   if(isChecked){
     //selecting more than one input
     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");  
   }else{
     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
   }
});


//assuming there was a form with different options
// $("#selection").change( function(){
//    const selectedOption = $(this).find(":selected").text();
//    alert(selectedOption);   
// });


//handling form submission
 $("#form").submit( function(event){
     const textarea = $("#message");

     if(textarea.val().trim() === ""){
        //meaning the textarea is empty
        textarea.css("box-shadow", "0 0 4px #881");

        event.preventDefault();
     }
 });

});