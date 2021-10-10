   let nameFeedback;
   let passwordFeedback;
   let messageFeedback;
   let checkedFeedback;

   let listFeedback;
$(function(){
   nameFeedback = $("#name-feedback");
   passwordFeedback = $("#password-feedback");
   messageFeedback = $("#message-feedback");
   checkedFeedback = $("#checked-feedack");

   listFeedback = [nameFeedback, passwordFeedback, messageFeedback, checkedFeedback];
   listFeedback.forEach((feedback)=> feedback.css("color", "red") );

  const form = $("#form");
  enableFastFeedback(form);


 $("#form").submit((event)=>{
   const name = $("#name").val();
   const password = $("#password").val();
   const message = $("#message").val();
   const isChecked = $("#checkbox").is(":checked");

   const condition1 = check(name.trim(), nameFeedback, event);
   const condition2 = check(password.trim(), passwordFeedback, event);
   const condition3 = check(message.trim(), messageFeedback, event);
   const condition4 = check(isChecked, checkedFeedback, event);
   
   const condition = condition1 && condition2 && condition3 &&condition4; 
   
   if(!condition){
      return;
   }
  });
});

function check(input,inputFeedback, event){
  let _input;
  if(input instanceof Boolean){
    if(!input){
      inputFeedback.text("Please check this box to submit");
      event.preventDefault();
      return false;
    }
  }
  if(input.length <= 3){
    inputFeedback.text("Please enter at least 3 characters");
    inputFeedback.append('<br>');
    event.preventDefault(); 
    return false;
  }

  inputFeedback.text("");
  return true;
}

function enableFastFeedback(form){
  const inputName = form.find("#name");
  const inputPassword = form.find("#password");
  const inputMessage = form.find("#message");
  const cbChecked = form.find("#checkbox");

  const listInput = [inputName, inputPassword, inputMessage];
  listInput.forEach((input,index)=>{
     input.blur(function(event){
       const name = $(this).val();
       console.log(`this is the input:${name}`);

       const feedback = listFeedback[index];
       if(!check(name, feedback,  event )){
         $(this).css({"box-shadow": "0 0 4px #811",
                       "border": "1px solid #600"});
       }else{
        $(this).css({"box-shadow": "0 0 4px #181",
        "border": "1px solid #600"});
       }
     });
  });
}