$(document).ready(function () {
    
    // ANIMATION SCROLL
  	$('#fullpage').fullpage({
		anchors: ['_iwik', '_agency', '_services', '_projects'],
        fixedElements: '#header',
		navigation: false,
		verticalCentered: false,	
	});
    $('.btn').click(function(){
        $('#services').css('left','-55vw');
        //$('#services').css('transform','translateX(-55vw)');
    });
    
    
    // ANIMATION BURGER
    $('#burger').click(function(){
        $('nav').toggleClass('active');
    });
    
    
    
    // PEPIN ANIM
    particlesJS.load('pepin','pepin.json'); 
    
});