let rightBtn=document.querySelector('#rightBtn');
let leftBtn=document.querySelector('#leftBtn'); 
let carouselSlide=document.querySelectorAll('.carousel-slide');
let carouselImages=document.querySelectorAll('.carousel-slide img')

let counter=0;
let size=carouselImages[0].clientWidth; //1355

rightBtn.addEventListener('click',function(){
    counter++;
    if (counter==carouselImages.length) {
    	counter=0;
    }
	carouselSlide.forEach( function(element, index) {
		element.style.transform='translateX('+(-size*counter)+'px)';
	    element.style.transition="transform 0.33s ease-in-out"; 
	});
});



leftBtn.addEventListener('click',function(){
	counter--;
	if (counter<0) {
		counter=carouselImages.length-1;	
	}
	carouselSlide.forEach( function(element, index) {
		element.style.transform='translateX('+(-size*counter)+'px)';
	    element.style.transition="transform 0.33s ease-in-out"; 
	});
		
})
