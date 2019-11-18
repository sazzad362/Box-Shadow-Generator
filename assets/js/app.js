// IIFE with jQuery Wrapper
(function($) {
  'use strict';

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
	$(document).ready(function() {

	  $('.range-slider__range').change( function(){

      var horizontal = $('#horizontal-length').html();
      var vertical   = $('#vertical-length').html();
      var blur       = $('#blur-radius').html();
      var spread     = $('#spread-radius').html();

      $('#box').attr('style', 'box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+spread+'px #000');

    })
		
	});// DOM Ready

}(jQuery)); // IIFE

