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
//using regexp & focusout() method to check for valid inputs


//Part A, user input validation

//Step 1, regexp validation
//First, name can only have letters a-z. First and last name starts with capcase 
let isNameValid = false; //set name input value to false 
$name.focusout(function(e) {
  let $nameValid = jQuery($name).val();
  let $nameReg= new RegExp('^[A-Z][a-z]*\s[A-Z][a-z]*$');
  if(!$nameReg.test($nameValid)){
    isNameValid = false; 
    $name.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter your first and last name'}); 
} else {
    isNameValid = true;
    $name.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).removeAttr({placeholder: 'Please enter your first and last name'}); 
}    
});

//Second, email must be in a valid format
let isEmailValid = false;
$email.focusout(function(e){
  let $emailValid = jQuery($email).val();
  let $emailReg = new RegExp('^[^@]+@[^@.]+\.[a-z]+$/i');
  if(!$emailReg.test($emailValid)) {
    isEmailValid = false;
    $email.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter a valid email address'}); 
  }else {
    isEmailValid = true;
    $email.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).removeAttr({placeholder: 'Please enter a valid email address'}); 
  }
});
 
//Third, credit card number must be valid-13 to 16 digits 
let isCardNumValid = false;
$cardNum.focusout(function(e){
  let $cardNumValid = jQuery($cardNum).val();
  let $cardNumReg = new RegExp('^\d{13,16}$');
  if(!$cardNumReg.test($cardNumValid)) {
    isCardNumValid = false;
    $cardNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter a 13-16 digit number'});
  }else {
    isCardNumValid = true;
    $cardNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).removeAttr({placeholder: 'Please enter a 13-16 digit number'});
  }
}); 

//Fourth, credit card zip number must be valid-5 digits
let isZipNumValid = false;
$zipNum.focusout(function(e){
  let zipNumValid = jQuery($zipNum).val();
  let zipNumReg = new RegExp('^\d{5}$');
  if (!$zipNumReg.test(zipNumValid)) {
    isCardNumValid = false;
    $zipNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter a 5 digit number'});
  } else {
    isCardNumValid = true;
    $zipNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).removeAttr({placeholder: 'Please enter a 5 digit number'});
  }

//Fifth, credit card cvv number must be valid-3 digits   
let isCvvNumValid = false;
$cvvNum.focusout(function(e){
  let $cvvNumValid = jQuery($cvvNum).val();
  let $cvvNumReg = new RegExp('^\d{3}$');
  if(!$cvvNumReg.test($cvvNumValid)) {
    isCvvNumValid = false;
    $cvvNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).attr({placeholder: 'Please enter a 3 digit number'});
  } else {
    isCvvNumValid = true;
    $cvvNum.css({backgroundColor: '#ff6666', border: "2px solid #ff0000"}).removeAttr({placeholder: 'Please enter a 3 digit number'});
  }
});  

//Step 2, set up events

//Event listeners on all five items(listed above)


//Part B, checkbox and other selectable options. Using on click handler (eventObject)  

// First, at least one 'Register for Activities' checkbox is selected 
let isCheckboxValid = false;

jQuery('form').submit(function(e){
  if(jQuery('.activities input:checkbox:checked').length < 1) {
    //prevent page refresh on default 
    e.preventDefault();
    isCheckboxValid = false;
    $errorDiv.show();
  } else {
    isCheckboxValid = true;
  } 
  if (!isNameValid || !isEmailValid || !isCardNumValid || !isZipNumValid || !isCvvNumValid) {
    e.preventDefault(); 
    jQuery('button [type="submit"]').attr("disabled", "disabled");

});
