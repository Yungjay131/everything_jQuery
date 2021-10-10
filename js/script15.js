//passing additional data to elements
function displayGreetingToUser( user ){
 let { name } = user;
   alert( `good day ${name}`);
}

$(function(){
 $(".red-box").click({
    name:"Joshua",
    email: "talk2joshuasylvanus@gmail.com"
 }, function(event){
    displayGreetingToUser( event.data );
 });
});