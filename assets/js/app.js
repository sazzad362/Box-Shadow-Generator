// IIFE with jQuery Wrapper
(function($) {
  'use strict';

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
	$(document).ready(function() {
  
	  $('.operational_box').change( function(){
      
      // Geting all variables
      var horizontal = $('#horizontal-length').html();
      var vertical   = $('#vertical-length').html();
      var blur       = $('#blur-radius').html();
      var spread     = $('#spread-radius').html();
      var data       = $('#custom').val();

      // Store all values
      var proparty = 'box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+spread+'px  '+data+'';

      // Apply on preview area
      $('#box').attr('style', proparty);
      // Get data on input field
      $('#out_code').val(proparty);

    })

    //Initialize Spectrum Color Picker
    $("#custom").spectrum({
        color: "#000",
        showAlpha: true,
        preferredFormat: "rgb",
    });
		
	});// DOM Ready

}(jQuery)); // IIFE

