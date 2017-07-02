'use strict';

const Pizzabox = function(id) {
	const pizzaboxImg = document.getElementById('pizzabox'+id);
	const pizzaboxLeft = 'images/pizza-box-left.png';
	const pizzaboxRight = 'images/pizza-box-right.png';
	

	if (id % 2 == 0) {
		pizzaboxImg.attributes.src.nodeValue = pizzaboxLeft;
	}
	
	if (id % 2 == 1) {
		pizzaboxImg.attributes.src.nodeValue = pizzaboxRight;
	}
	

	var bottom = (id * 10) + 30;
	var zindex = id;
	// console.log(maxWH +' '+bl+' '+zindex);
	pizzaboxImg.style.maxWidth = '50%';
    pizzaboxImg.style.bottom = bottom+'px';
    pizzaboxImg.style.zIndex = zindex;


}



// let event = new Event(‘customer-placing-order’);
// element.dispatchEvent(event);