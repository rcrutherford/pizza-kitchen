'use strict';

const Cook = function(id) {
	var cookImg = document.getElementById('cook' + id);

	var picNoArmLeft = 'images/pizza-man-left.gif';
	var picNoArmRight = 'images/pizza-man-right.gif';
	var picCarryingPizza = 'images/pizza-man.gif';
	var picCarryingFrozenPizza = 'images/pizza-man-frozen.gif';
	var picRightTyping = 'images/pizza-man-right-typing.gif';
	var picLeftTyping = 'images/pizza-man-left-typing.gif';

	var aSteps = document.getElementById('footsteps' + id);
	var aOkeyDokey = document.getElementById('okeydokey');
	var aOrderUp = document.getElementById('orderup');
	var aTyping = document.getElementById('type' + id);
	var HUDOnOrder = document.getElementById('PizzasOnOrder');


	//console.log(cookImg.style.animationDuration);
	var cook1AnimationDuration = 3000;
	var cook2AnimationDuration = 2000;
	var cook3AnimationDuration = 2500;
	
	let p = document.getElementById("cook"+id);
    // let b = document.getElementById("pause");

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
	this.ChangeImageLeftTyping = function() {
		changeImage('lefttyping');
	}
	
	function getRandom(min, max) {
			    var result = Math.random() * (max - min) + min;
			    return Math.round(result);
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

			case 'lefttyping':
				cookImg.attributes.src.nodeValue = picLeftTyping;
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
		var myTimeout = setTimeout(cook1ActionsRight,cook1AnimationDuration);
	}

	
    function cook1ActionsLeft() {
    	toggleCook();
		p.attributes['src'].nodeValue = "images/pizza-man-left.gif";
    }

	function cook1ActionsRight () {
    	cook1.togglecook(); //stop moving
    	cook1.ChangeImageRightTyping();
		cook1.Type();
		var myTimeout = setTimeout(cook1goback,cook1AnimationDuration); //after 3 seconds head back left
	}
	function cook1goback () {
		cook1.ChangeImageLeft();
		cook1.togglecook();
		cook1.StartWalk();
		pizza++;
		onOrder.push(pizza);
		HUD();
		cook1.OrderUp();
		while (oven1busy) {
			var myTimeout = setTimeout(function(){},1000);
			console.log('waiting on oven');
			break;
		}
		if (!oven1busy) {
			var myTimeout = setTimeout(cook2ActionsGetPizza,1250)
		}
		
		var myTimeout = setTimeout(cook1.togglecook,cook1AnimationDuration)

	}
	function cook2ActionsGetPizza () {
    	freezer1.Open(); //open freezer 1
    	let fclose = setTimeout(freezer1.Close,cook2AnimationDuration/2)
    	cook2.ChangeImageFrozen();
    	cook2.StartWalk();
    	cook2.togglecook(); //start walking with pizza
    	let c2Return= setTimeout(cook2.cook2Return,cook2AnimationDuration);
    	
    }
    this.cook2Return = function () {
    	//console.log('cook2Return');
    	onOrder.pop();
		inOven.push(pizza);
		HUD();
    	cook2.ChangeImageRight();
    	oven1.Close();
    	oven1busy = true;
    	cook2.StartWalk(); 
    	console.log('cook2 walk back sound');

    	let c2Stop = setTimeout(cook2.togglecook,cook2AnimationDuration);
    	let otimer = setTimeout(cook3.cook3removepizza,getRandom(3,6)*1000);
    }

    this.cook3removepizza = function () {
    	oven1.Done();
    	var myTimeout = setTimeout(function(){
    		oven1.Open();
	    	oven1busy = false;
	    	cook3.ChangeImagePizza();
	    	cook3.togglecook(); //start walking left
	    	cook3.StartWalk();
	    	let c3type = setTimeout(cook3.cook3starttyping,cook3AnimationDuration);
	    },1000);
	}

    this.cook3starttyping = function () {
    	cook3.togglecook(); //stop at computer
    	cook3.ChangeImageLeftTyping();
    	cook3.Type();
    	inOven.pop();
    	ready.push(pizza);
    	HUD();
    	document.getElementById('pizzabox1').style.display='flex';
    	let c3finishtyping = setTimeout(function(){
    		cook3.ChangeImageRight();
    		cook3.StartWalk();
    		cook3.togglecook(); //walk right
    		let c3stop = setTimeout(cook3.togglecook,cook3AnimationDuration);
    	}, 2200)
    	let custpickup = setTimeout(custpickup1.Pickup,getRandom(3,9)*1000);
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
