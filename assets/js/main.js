"use strict";

//Toggle navigation

$(".nav-open").on("click", function(e){
 e.preventDefault();
 $(".fullscreen-nav").addClass("active");
})

$(".nav-close").on("click", function(e){
 e.preventDefault();
 $(".fullscreen-nav").removeClass("active");
})


//Toggle collapsible navigation

$(".collapsible-nav li").on("click", function(){
		$(this).toggleClass("nav-active");
	})




  $(document).ready(function(){

	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });

  $('.lazy').Lazy({
	scrollDirection: 'vertical',
	effect: 'fadeIn',
	visibleOnly: true,
	onError: function(element) {
		console.log('error loading ' + element.data('src'));
	}
});