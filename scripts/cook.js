'use strict';

const Cook = function(id) {
	const cookImg = document.getElementById('cook' + id);

	const picNoArmLeft = 'images/pizza-man-left.gif';
	const picNoArmRight = 'images/pizza-man-right.gif';
	const picCarryingPizza = 'images/pizza-man.gif';
	const picCarryingFrozenPizza = 'images/pizza-man-frozen.gif';
	const picRightTyping = 'images/pizza-man-right-typing.gif';

	const aSteps = document.getElementById('footsteps' + id);
	const aOkeyDokey = document.getElementById('okeydokey');
	const aOrderUp = document.getElementById('orderUp');
	const aTyping = document.getElementById('type' + id);
	const HUDOnOrder = document.getElementById('PizzasOnOrder');

	this.OkeyDokey = function() {
		aOkeyDokey.play();
	}
	this.OrderUp = function() {
		aOrderUp.play();
	}
	this.Type = function() {
		aTyping.play();
	}
	this.StartWalk = function() {
		playWalk();
	}
	this.PauseWalk = function() {
		stopWalk();
	}
	function playWalk() {
		aSteps.play();
	}
	function stopWalk() {
		aSteps.pause();
	}
	this.ChangeImageLeft = function() {
		changeImage('left');
	}
	this.ChangeImageRight = function() {
		changeImage('right');
	}
	this.ChangeImageFrozen = function() {
		changeImage('frozen');
	}
	this.ChangeImagePizza = function() {
		changeImage('pizza');
	}
	this.ChangeImageRightTyping = function() {
		changeImage('righttyping');
	}
	function changeImage(imgName) {
		switch(imgName) {
			case 'left':
				cookImg.attributes.src.nodeValue = picNoArmLeft;
				break;

			case 'right':
				cookImg.attributes.src.nodeValue = picNoArmRight;
				break;

			case 'frozen':
				cookImg.attributes.src.nodeValue = picCarryingFrozenPizza;
				break;

			case 'pizza':
				cookImg.attributes.src.nodeValue = picCarryingPizza;
				break;

			case 'righttyping':
				cookImg.attributes.src.nodeValue = picRightTyping;
				break;

			default:
				throw 'Can\'t change the pizza in the manner you asked for';
		}
	}


	let p = document.getElementById("cook"+id);
    // let b = document.getElementById("pause");
    function cook1ActionsLeft() {
    	toggleCook();
		p.attributes['src'].nodeValue = "images/pizza-man-left.gif";
    }

	function cook1ActionsRight(e) {
    	cook1.togglecook();
    	cook1.ChangeImageRightTyping();
		//p.attributes['src'].nodeValue = "images/pizza-man-right-typing.gif";
		cook1.Type();
		// aTyping.play();
		
		var myTimeout = setTimeout(cook1goback,3000);
	}
	function cook1goback() {
		cook1.ChangeImageLeft();
		cook1.togglecook();
		cook1.StartWalk();
		pizza++;
		onOrder.push(pizza);
		var strHUDOnOrder = 'On Order';
		for (var i in onOrder) {
			i++;
			strHUDOnOrder = strHUDOnOrder +'<br>Pizza: '+i;
		}
		HUDOnOrder.innerHTML = strHUDOnOrder;
		cook2ActionsGetPizza();

	}
	function cook2ActionsGetPizza () {
    	//open freezer 1
    	freezer1.Open();
    	cook2.ChangeImageFrozen();
    	cook2.StartWalk();
    	cook2.togglecook();

    }
	function fnOK() {
		cook1.OkeyDokey();
		cook1.ChangeImageRight();
		cook1.StartWalk();
		cook1.togglecook();
	}

    this.togglecook = function(e) {
		p.classList.toggle('paused');
	}
	function toggleCook(e) {
        p.classList.toggle('paused');
    }

	function listener(e) {
		// console.dir(e);
		switch(e.type) {
			case "animationstart":
				toggleCook();
		  		// console.log('start');
		    	break;

		  	case "animationend":
		    	// console.log('end');
		    	break;

			case "animationiteration":
				if(p.attributes["src"].nodeValue.indexOf('right') > 0) {
					p.attributes['src'].nodeValue = "images/pizza-man-left.gif";
					cook1ActionsRight();
				}
			    else {
			    	p.attributes['src'].nodeValue = "images/pizza-man-right.gif";
				}

				let event = new Event('hi-pizza-man');
				event.pizzaOrderId = 1;
				p.dispatchEvent(event);
		    	
			    //console.log(`new loop started after ${e.elapsedTime} seconds`);
			    break;
		}
	}
	function SayHi(e) {
		alert('hi ron from the pizza man!'+e.pizzaOrderId);
	}
	p.addEventListener("animationstart",listener, false);
	p.addEventListener("animationend",listener, false);
	p.addEventListener("animationiteration",listener, false);
	p.addEventListener("hi-pizza-man", SayHi);
	// b.addEventListener("click", toggleCook, false);

	cookImg.style.position = 'absolute';
	
}	
