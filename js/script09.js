//manipulating HTMLElement attributes
$(function(){
  //attr(), prop(), val();

  const link = $("a:first");
   
  console.log(link.attr("href"));
  console.log(link.attr("title"));

  //to set the attribute to a new value
  link.attr("href", "https://www.google.com");

  //testing selectors and attributes
  const inputCheck = $("input[type='checkbox']:last");
  console.log(inputCheck.attr("name"));

  //checking out the prop() function
  try {
    inputCheck.addEventListener('click', (event)=>{
      console.log(event.target.prop("checked"));  
      event.preventDefault();
    });  
  } catch (error) {
    console.log(error);
  }

  //using val
  const inputText = $("input:text");//jQuery convienence syntax not an actual CSS Selector
  console.table(inputText);
  inputText.val("Joshua Sylvanus");
  console.log(inputText.val());

  //for the range
  const inputRange = $("input[type='range']:first");
  console.log(inputRange.val());

});