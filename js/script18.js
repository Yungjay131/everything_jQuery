// AJAX -> Asychroous JS and XML
$(function(){
//$.get(), $.post(), $.ajax(), $.getJSON()

//$.load();->retrievig content from server
$("#code").load("js/script18.js");

$("#code").load("does_not_exist.php", (response, status)=>{
   if(status  === "error"){
     alert("Could not find does_not_exist.php");
   }

   console.log(response);
});

const flickrAPIUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
$.getJSON(flickrAPIUrl,
   {
  //config options
  tags: "sun, beach",
  tagmode: "json"
  }
).done((response)=>{
  const { items } = response;

  //for jQuery iterating
  $.each(response.items, (index, item)=>{
    const { m } = item;
    $("<img>").attr("src", m ).appendTo("#flickr");

    //returning false terminates the each()
    if(index === 5) return false;
  });

  console.log(response); 
}).fail(()=>{
   alert("AJAX call failed");
}).always(()=>{
  //executed no matter what
});
});