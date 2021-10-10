//chagig data of a HTMLElement
let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg" 
];


$(function(){
  const divGallery = $(".gallery");

  //specify a key
  divGallery.data("images", images);
  divGallery.data("name", "Image Gallery");

  console.log(divGallery.data("images"));

  //to return all the data associated with the element
  console.log(divGallery.data());

  //would also add data specified from HTML
  //so calling .data(), returns that also
  console.log( $("h2:first").data() );

  //for printing actual html
  const hFirst = $("h2:first");

  console.log(hFirst.text());
  console.log(hFirst.html());

  //changing content on the page
  hFirst.text("<strong>That's</strong> watsup");
  hFirst.text( `${hFirst.text()} true` );

  hFirst.html("<strong>Thats</strong> Watsup for the second time")

  //appending content
  hFirst.html( $("h2:first").html() + " false");
  hFirst.html( `${ $("h2:first").html() } maybe`);
});