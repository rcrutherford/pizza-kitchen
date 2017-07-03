'use strict';

const Cook = function(id) {
	var cookImg = document.getElementById('cook' + id);

	var picNoArmLeft = 'images/pizza-man-left.gif';
	var picNoArmRight = 'images/pizza-man-right.gif';
	var picCarryingPizza = 'images/pizza-man.gif';
	var picCarryingFrozenPizza = 'images/pizza-man-frozen.gif';
	var picRightTyping = 'images/pizza-man-right-typing.gif';

	var aSteps = document.getElementById('footsteps' + id);
	var aOkeyDokey = document.getElementById('okeydokey');
	var aOrderUp = document.getElementById('orderUp');
	var aTyping = document.getElementById('type' + id);
	var HUDOnOrder = document.getElementById('PizzasOnOrder');

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


	this.fnOK = function () {
		cook1.OkeyDokey();
		cook1.ChangeImageRight();
		cook1.StartWalk(); //start walking sound
		cook1.togglecook(); //start moving
		var myTimeout = setTimeout(cook1ActionsRight,3000);
	}

	let p = document.getElementById("cook"+id);
    // let b = document.getElementById("pause");
    function cook1ActionsLeft() {
    	toggleCook();
		p.attributes['src'].nodeValue = "images/pizza-man-left.gif";
    }

	function cook1ActionsRight() {
    	cook1.togglecook(); //stop moving
    	cook1.ChangeImageRightTyping();
		cook1.Type();
		var myTimeout = setTimeout(cook1goback,3000); //after 3 seconds head back left
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
		var myTimeout = setTimeout(cook1.togglecook,3000)

	}
	function cook2ActionsGetPizza () {
    	freezer1.Open(); //open freezer 1
    	var fclose = setTimeout(freezer1.Close,2000)
    	cook2.ChangeImageFrozen();
    	cook2.StartWalk();
    	cook2.togglecook();
    	var myTimeout = setTimeout(cook2.togglecook,2000)
    	var oclose = setTimeout(oven1.Close,2000)
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
					// let event = new Event('cook1ActionsRight');
					// event.pizzaOrderId = 1;
					// p.dispatchEvent(event);
				}
			    else {
			    	p.attributes['src'].nodeValue = "images/pizza-man-right.gif";
				}

				
		    	
			    //console.log(`new loop started after ${e.elapsedTime} seconds`);
			    break;
		}
	}
	// function SayHi(e) {
	// 	alert('hi ron from the pizza man!'+e.pizzaOrderId);
	// }
	p.addEventListener("animationstart",listener, false);
	p.addEventListener("animationend",listener, false);
	//p.addEventListener("animationiteration",listener, false);
	 // p.addEventListener("cook1ActionsRight", cook1ActionsRight);
	// b.addEventListener("click", toggleCook, false);

	cookImg.style.position = 'absolute';
	
}	
