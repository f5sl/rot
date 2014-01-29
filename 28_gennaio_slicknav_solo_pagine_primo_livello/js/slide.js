$(document).ready(function(){
	$(window).load(function() {
	  $('.flexslider').flexslider({
	    animation: "slide"
	  });
	});

		$('#menu').slicknav();
		$(".non_clicca").click(function( event ) {
		event.preventDefault();
	});
		$('#menu_2').slicknav({
		prependTo:'#nav_locale_ridotta'
	});
});