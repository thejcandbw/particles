jQuery(document).ready(function() {
	//Global
	var windowWidth = jQuery(window).innerWidth();
	var windowHeight = jQuery(window).innerHeight();
	var windowCenterX = windowWidth/2;
	var windowCenterY = windowHeight/2;
	//Preload	
	function preload() {
		setTimeout(titleIn,250);
			
	}		
	//Start
	setTimeout(preload,50);
	
	if (document.getElementById('logo-animation') !== null ) {
		setTimeout(initialiseAnimatedImages,2000);
	}
		
	function titleIn() {			
			if (document.getElementById('title') !== null ) {
				setTimeout(particles,500);
			}
	}
	//GSAP Particles
	function particles() {
		var density = 60,
			speed = 1,
			body = jQuery("#particles"),
			i, 
			particle;
		function spawn(particle) {
			var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
				partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);
	
			//set the starting values
			gsap.set(particle, {y:getRandom(windowCenterY-50, windowCenterY+50), x:getRandom(windowCenterX-(250), windowCenterX+(250)), scale:(getRandom(2, 16)/10)});
			gsap.to(particle, {physics2D:{velocity:getRandom(25,75), angle:getRandom(-180,180), gravity:-15}, duration:getRandom(8,12), onComplete:spawn, onCompleteParams:[particle]});
	
		}
		gsap.set(jQuery("#particles"), {rotation: 0.01,force3D: true});
		
		for (i = 0; i < density; i++) {
			spawn( jQuery("<div />", {id:"particle"+i}).addClass("particle").appendTo(body) );
		}
	}
	//Utilities
	function getRandom(min, max) {
	  return min + Math.random() * (max - min);
	}
});