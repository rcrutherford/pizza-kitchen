'use strict';

const Custpickup = function(id) {
	const custpickupImg = document.getElementById('custpickup'+id);
	const custpickupArrive = 'images/customer'+id.toString()+'.png';
	const audioThanks = document.getElementById('thanks' + id);
	const audioCustFootsteps = document.getElementById('custfootsteps' + id);
	//var cook1 = document.getElementById('cook1');
	//console.log(custpickupArrive);

	// function toggleCust(e) {
 //        custpickupImg.classList.toggle('paused');
 //        audioThanks.play();
 //        var myPauseTimer = setTimeout(function(){custpickupImg.classList.toggle('paused');},2000);
        
 //    }
 	let p = document.getElementById('pizzabox1');
	
	this.Pickup = function() {
		custpickupImg.attributes.src.nodeValue = custpickupArrive;
		custpickupImg.style.animationName = 'custpickup';
		audioCustFootsteps.play();
	
		var myPauseTimer = setTimeout(function(){
			audioCustFootsteps.pause();
			audioThanks.play();
			audioCustFootsteps.play();
			//let myTimeout = setTimeout(function(){audioCustFootsteps.play();},1000);
			p.style.display="none";
			custpickupImg.attributes.src.nodeValue = 'images/customerwithpizza'+id.toString()+'.png';
			ready.pop();
			gone.push(pizza);
			HUD();
			// custpickupImg.classList.toggle('paused');
		},2000);
	}

	function listener(e) {
		// console.dir(e);
		if (e.type == "animationend") {
	  		custpickupImg.style.display = "none";

	    	// console.log('end');
		}
	}
	custpickupImg.addEventListener("animationstart",listener, false);
	custpickupImg.addEventListener("animationend",listener, false);
	// custpickupImg.addEventListener("animationiteration",listener, false);

	var maxWH = (100 - (id * 10));
	var b = (id - 1) * 30;
	var l = (id - 1) * -30;
	var zindex = 6 - id;
	// console.log(maxWH +' '+bl+' '+zindex);
	custpickupImg.style.maxWidth = maxWH.toString() + '%';
    custpickupImg.style.maxHeight = maxWH.toString() + '%';
    custpickupImg.style.position = 'absolute';
    custpickupImg.style.bottom = b+'px';
    custpickupImg.style.left = l+'px';
    custpickupImg.style.zIndex = zindex;
}
