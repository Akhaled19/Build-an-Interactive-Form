//Global variables(goes by sections)
  const $cornflowerblue = jQuery('#color option[value="cornflowerblue"]');
  const $darkslategrey = jQuery('#color option[value="darkslategrey"]');
  const $gold = jQuery('#color option[value="gold"]');
  const $tomato =  jQuery('#color option[value="tomato"]');
  const $steelblue = jQuery('#color option[value="steelblue"]');
  const $dimgrey = jQuery('#color option[value="dimgrey"]');
  
  const $jsFrameworks =jQuery('.activities input[name="js-frameworks"]');
  const $jsLibs= jQuery('.activities input[name="js-libs"]');
  const $express= jQuery('.activities input[name="express"]');
  const $node= jQuery('.activities input[name="node"]');
  
  const $cost = jQuery('.activities input[data-cost]');

  const $creditCard = jQuery('#payment option[value="Credit Card"]');
  const $selectPaymentMethod = jQuery('#payment option[value="select method"]');
  
  const $name = jQuery('input [name="user-name"]');
  const $email = jQuery('input [name="user-name"]');
  const $cardNum = jQuery('input [name="user-cc-num"]');
  const $zipNum = jQuery('input [name="user-zip"]');
  const $cvvNum = jQuery('input [name="user-cvv]');

                     //FOCUS ON THE FIRST FIELD//
//using jQuery focus method to set the cursor on the Name field on page load
jQuery('#name').focus();

                          //JOB ROLE SECTION//
// first using jQuery hide method to hide the other title input field. a new element (text field) when user select 'other' from the Job Role menu 
jQuery('#other-title').hide();
//then, using jQuery on change handler (eventObject) on the job role drop down menu to reveal the other title input field
jQuery('#title').on('change', function(){
  if(jQuery(this).val()==='other') {
    jQuery('#other-title').show();
  }else{
    jQuery('#other-title').hide();
   }
});

                             //T-SHIRT SECTION//
//using jQuery attr method to disable color options until t-shirt theme is selected
jQuery('#color').attr('disabled', 'disabled');
//& the color filed reads "Please select a T-shirt theme" 
jQuery('#color').prepend('<option value="select a theme" selected="selected">Please select a T-shirt theme</option>');


//using jQuery on change handler (eventObject) to show color options once t-shirt theme is selected 
//using if, else if, and else conditions to show colors only for corresponding themes
jQuery('#design').on('change',function(){
  //If the user selects "Theme - JS Puns"- the color menu should display the following: "Cornflower Blue," "Dark Slate Grey," and "Gold."
  if(jQuery(this).val()==='js puns'){
    jQuery('#color').attr('disabled', false);
    jQuery($dimgrey).hide();
    jQuery($steelblue).hide();
    jQuery($tomato).hide();
    jQuery($gold).show();
    jQuery($darkslategrey).show();
    jQuery($cornflowerblue).show();
  //else if If the user selects "Theme - I ♥ JS" - the color menu should display the following: "Tomato," "Steel Blue," and "Dim Grey."
  }else if(jQuery(this).val()==='heart js'){
    jQuery('#color').attr('disabled', false);
    jQuery($gold).hide();
    jQuery($darkslategrey).hide();
    jQuery($cornflowerblue).hide();
    jQuery($dimgrey).show();
    jQuery($steelblue).show();
    jQuery($tomato).show();
  //else disabled the select t-shirt color menu  
  }else{
    jQuery('#color').attr('disabled', 'disabled');
  }
});

                    //ACTIVITY REGISTRATION//
//using jQuery on change handler (eventObject) w/if & else conditions to prevent users from selecting two or activities that are at the same time 

// first, JavaScript Frameworks 
jQuery($jsFrameworks).on('change',function(){
if(jQuery(this).is(':checked')) {
  jQuery($express).attr("disabled", "disabled");
} else{
  jQuery($express).attr("disabled", false);
}
});
// second, JavaScript Libraries 
jQuery($jsLibs).on('change',function(){
  if(jQuery(this).is(':checked')) {
    jQuery($node).attr("disabled", "disabled");
  } else{
    jQuery($node).attr("disabled", false);
  }
  });
  // third, Express 
jQuery($express).on('change',function(){
  if(jQuery(this).is(':checked')) {
    jQuery($jsFrameworks).attr("disabled", "disabled");
  } else{
    jQuery($jsFrameworks).attr("disabled", false);
  }
  });
  // fourth, Node 
jQuery($node).on('change',function(e){
  let $target = jQuery(e.target);
  if($target.is(':checked')) {
    jQuery($jsLibs).attr("disabled", "disabled");
  } else if($target.not(':checked')){
    jQuery($jsLibs).attr('disabled', false);
  }
  });
 
                 //COST
// created a div to display cost 
jQuery('.activities').append('<br><div class="costDiv"></div>');
// created a div to display error 
jQuery('.activities').append('<br><div class="errorDiv"><font color="#ff0000">Please select an activity.</div>');                  

//global variables 
const $costDiv = jQuery('.costDiv');
const $errorDiv = jQuery('.errorDiv');

//let cost be equal to 0
let $activityTotal = 0;

//hide the new cost div on load 
$costDiv.hide();


//using a jQuery on change handler (eventObject) w/ click event method to calculate & displays the cost of the selected activities right below the list 
jQuery('.activities').on('change', function(e) {
    let $target = jQuery(e.target);
    let $dataCost = parseInt($target.attr('data-cost').slice(-3)); //parsing the input clicked to an intege
    if ($target.is(':checked')) { //activity will be added if checked
      $costDiv.show();
      $errorDiv.hide();
      $activityTotal += $dataCost  
    } else if($target.not(':checked')){ //activity will be subtracted if unchecked
      $activityTotal -= $dataCost 
    } 
    //total cost of activities will be printed to cost div string
   jQuery($costDiv).text('Total cost: $' + $activityTotal); 
  });


                      //DISPLAYING PAYMENT SECTIONS

//using a jQuery attr selected method to select credit card by default 
jQuery($creditCard).attr("selected", "selected");

//hides other payment options 
jQuery('#paypal, #bitcoin').hide();

//disables the select payment method option
jQuery($selectPaymentMethod).attr("disabled", "disabled");

//using a jQuery change handler (eventObject) to match the payment option selected to payment option displayed on the page. 
jQuery('#payment').on('change', function(e){
  let $target = jQuery(e.target);
  if(jQuery($target).val()==="Credit Card") {
    jQuery('#credit-card').show();
    jQuery('#paypal, #bitcoin').hide();
  } else if(jQuery($target).val()==='PayPal'){
    jQuery('#paypal').show();
    jQuery('#credit-card, #bitcoin').hide();
  }else if(jQuery($target).val()==='Bitcoin'){
    jQuery('#bitcoin').show();
    jQuery('#credit-card, #paypal').hide();
  }
});

                   //FORM VALIDATION
//using regexp & :clicked method to prevent refreshing the page when SUBMIT button is clicked UNTIL ALL requirements have been filled 


//Part A, user input validation

//Step 1, regexp validation
//First, name can only have letters a-z. First and last name starts with capcase 
function isValidName(name) {
  return /^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(name);
}
//Second, email must be in a valid format
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
//Third, credit card number must be valid-13 to 16 digits 
function isValidCardNum(cardNum) {
  return /^\d{13,16}$/.test(cardNum);
}
//Fourth, credit card zip number must be valid-5 digits
function isValidZip(cardZip) {
  return /^\d{5}$/.test(cardZip); 
}
//Fifth, credit card cvv number must be valid-3 digits   
function isValidCVV(cardCvv) {
  return /^\d{3}$/.test(cardCvv);
} 

//Step 2, set up events

//function used to show messages when felids are invalid or empty 
function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}
//function used to listen to user input
function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling; 
    showOrHideTip(showTip, tooltip);

  }
}
//Event listeners on all five items(listed above)
$name.addEventListener("input", createListener(isValidName));

//$name.focusout(function(e){
 //   const nameformat= /^[A-Z][a-z]*\s[A-Z][a-z]*$/;
    //check if name input is verified and not empty 
   // if(!nameformat.test(jQuery('$name').val())){
     // jQuery('input #name').addClass('invalid');  
      //create a element with the class above 
      //jQuery('label [for="name"]').html('Name:<br>[Please enter a first and last name]').addClass("invalid");   
      
    //} else{
     // jQuery('input #name').removeClass('invalid');
     // jQuery('label[for="name"]').html('Name:').removeClass('invalid');
      

  //  }
 // }); 
  //function validEmail(){
    //formated email 
    //const emailFormat= /^[^@]+@[^@.]+\.[a-z]+$/i;
    //check if email address is valid (name@email.com)
    //if(!emailFormat.test(jQuery($email))){
      // jQuery('input #mail').addClass('invalid');
      // jQuery('label [for="mail"]').html('Email:<br>[Please enter a valid email address]').addClass("invalid");
       //return false;
     //} else{
      // jQuery('input #mail').removeClass('invalid');
      // jQuery('label [for="mail"]').html('Email:').removeClass("invalid");
      // return true;
    // }
  // }
  //at least one 'Register for Activities' checkbox is selected 
  // function Validactivity() {

  //if the activities selected is less than 0 
  // if (jQuery('.activities input:checkbox:checked').length > 0) {
  // create an invalid error
 //  jQuery('.checkbox legend').html('Register for Activities:<br> [You must at least select one activity]').addClass("invalid");
 //  return false;
 //  }else{
  //   jQuery('.checkbox legend').html('Register for Activities:').removeClass("invalid");
   //  return true;
  // }
  // }  
                 //credit card payment option validation:  

 //credit card num field contains 13 to 16 DIGITs, 
 // function validCardNum() {
  //  const cardNumFormat = /^\d{13,16}$/;
   //if the card number does not equal to 13 to 16 digits  
  // if (!cardNumFormat.test(jQuery($cardNum))) {
     //create an invalid error
     // jQuery('input #cc-num').addClass("invalid");
     // jQuery('label [for="cc-num"]').html('Card Number:<br> [Please enter a credit card number between 13 to 16 numbers]').addClass("invalid");
     //return false;
     //remove invalid error
    // } else {
     //  jQuery('input #cc-num').removeClass("invalid");
    //  jQuery('label [for="cc-num"]').html('Card Number:').removeClass("invalid");
    //  return true;
    // }
 // }
//zip code contains  5-digit c, 
 //function validZip() {
  // const zipNumFormat = /^\d{5}$/;
  //if the zip number does not equal to 5 digits 
  // if(!zipNumFormat.test(jQuery($zipNum))){
    //create an invalid error
  //   jQuery('input #zip').addClass("invalid");
  //   jQuery('label [for="zip"]').html('Zip Code:<br>[Please enter a 5 digit number]').addClass("invalid");
  // return false;
  // }else {
  //   jQuery('input #zip').removeClass("invalid");
   //  jQuery('label [for="zip"]').html('Zip Code:').removeClass("invalid");
  //   return true;
  // } 
 //}

//and cvv contains 3-digit
 //function validCVV() {
 //  const cvvFormat = /^\d{3}$/;
  //if the cvv number does not equal to 3  digits 
   //if (!cvvFormat.test(jQuery($cvvNum))) {
    //create an invalid error
   //  jQuery('input #cvv').addClass("invalid");
    // jQuery('label [for="cvv"]').html('cvv:<br>[Please enter a 3 digit number]').addClass("invalid");
    // return false;
   //} else{
    //remove an invalid error
     //jQuery('input #cvv').removeClass("invalid");
    // jQuery('label [for="cvv"]').html('cvv:').removeClass("invalid");
    // return true;
    
  // }
 //}


 //$name.addEventListener("input", createListener(validName));



                               //Form Validation Messages
// same as above, but this is about filling out each filed (red until corrected)
   //add a error message to each filed: the error message appears when the user begin to type & disappears later 
   // add at least one error message that changes depending on the error. email field displays a different error message when the email field is empty than it does when the email address is formatted incorrectly.


                            //Form Works Without JavaScript
   //using the JQuery element that prevent web from breaking down when JS is disabled 
     //all forms fields and payment information is displayed 
     //including the 'other' field                          