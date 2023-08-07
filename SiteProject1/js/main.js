$(function () {
	
	$("a.btn").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  	});

  	$("a.arrow").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  	});

  	$("a.navigation").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  	});
  	
  	$("a.navi_paragraph").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  	});

	$('a.call_btn').click( function(event){
		event.preventDefault();
	    $('#myOverlay').fadeIn(297,	function(){
	    	$('#myModal') 
			.css('display', 'block')
			.animate({opacity: 1}, 198);
	    });
	});

	$('a.phone').click( function(event){
		event.preventDefault();
	});

	$('a.trevels_btn').click( function(event){
		event.preventDefault();
		$('.trevels_more').toggleClass('trevels_visible');
	});

	$('.navi_btn').click(function(){
		$('.navi_gamburger').toggleClass('navi_active');
	});

	$('#myModal__close, #myOverlay').click( function(){
		$('#myModal').animate({opacity: 0}, 198, function(){
			$(this).css('display', 'none');
			$('#myOverlay').fadeOut(297);
	    });
	});	
});