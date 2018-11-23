$(document).ready(function () {
    
    // ANIMATION SCROLL
  	$('#fullpage').fullpage({
		anchors: ['_iwik', '_agency', '_services', '_projects'],
        fixedElements: '#header',
		navigation: false,
		verticalCentered: false,	
	});
    
    // ANIMATION BURGER
    $('#burger').click(function(){
        $('nav').toggleClass('active');
    });
    
    // PEPIN ANIM
    particlesJS.load('pepin','pepin.json'); 
    
});