              //GLOBAL Variables//
  const $cornflowerblue = jQuery('#color option[value="cornflowerblue"]');
  const $darkslategrey = jQuery('#color option[value="darkslategrey"]');
  const $gold = jQuery('#color option[value="gold"]');
  const $tomato =  jQuery('#color option[value="tomato"]');
  const $steelblue = jQuery('#color option[value="steelblue"]');
  const $dimgrey = jQuery('#color option[value="dimgrey"]');
  

                     //FOCUS ON THE FIRST FIELD//
//using jQuery (focus), have the cursor appear on the Name field
jQuery('#name').focus();


                            //JOB ROLE SECTION//
//using function & jQuery create a new element (text field) when user select 'other' from the Job Role menu 

jQuery('#other-title').hide();

jQuery('#title').on('change', function(){
  if(jQuery(this).val()==='other') {
    jQuery('#other-title').show();
  }else{
    jQuery('#other-title').hide();
   }
});


                             //T-SHIRT SECTION//
//using jQuery attr property to hide color options until t-shirt theme is selected
//& the color filed reads "Please select a T-shirt theme" 
jQuery('#color').attr('disabled', 'disabled');
jQuery('#color').prepend('<option value="select a theme" selected="selected">Please select a T-shirt theme</option>');


//using jQuery(function?) to show color options once t-shirt theme is selected 
//using a function & declared global variables to show colors only for corresponding themes
jQuery('#design').on('change',function(){
  if(jQuery(this).val()==='js puns'){
    jQuery('#color').attr('disabled', false);
    jQuery($dimgrey).hide();
    jQuery($steelblue).hide();
    jQuery($tomato).hide();
    jQuery($gold).show();
    jQuery($darkslategrey).show();
    jQuery($cornflowerblue).show();

  }else if(jQuery(this).val()==='heart js'){
    jQuery('#color').attr('disabled', false);
    jQuery($gold).hide();
    jQuery($darkslategrey).hide();
    jQuery($cornflowerblue).hide();
    jQuery($dimgrey).show();
    jQuery($steelblue).show();
    jQuery($tomato).show();
    
  }else{
    jQuery('#color').attr('disabled', 'disabled');
  }
});



//using jQuery(what?) to prevent users from selecting two or activities that are at the same time 


                             //ACTIVITY REGISTRATION//
//using a jQuery(function?) to calculate & displays the cost of the selected activities right below the list 


                            //DISPLAYING PAYMENT SECTIONS// 
//using a jQuery(addEventListener?) (add e) to select credit card by default [like now w/out changes]

//using a jQuery(function?) to match the payment option to payment option displayed on the page 

//something about hidden other payment options once user select a payment option 


                            //FORM VALIDATION//
//using regexp to prevent refreshing the page when SUBMIT button is clicked UNTIL all the requirements have been filled 
       //name field isn't empty 
       //verified email address (name@email.com)
       //at least one 'Register for Activities' checkbox is selected 
       //credit card payment option: credit card num field contains 13 to 16 DIGITs, zip code contains  5-digit c, and cvv contains 3-digit


                               //Form Validation Messages
// same as above, but this is about filling out each filed (red until corrected)
   //add a error message to each filed: the error message appears when the user begin to type & disappears later 
   // add at least one error message that changes depending on the error. email field displays a different error message when the email field is empty than it does when the email address is formatted incorrectly.


                            //Form Works Without JavaScript
   //using the JQuery element that prevent web from breaking down when JS is disabled 
     //all forms fields and payment information is displayed 
     //including the 'other' field                          