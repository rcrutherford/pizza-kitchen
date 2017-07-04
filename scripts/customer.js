'use strict';

const Customer = function(id) {
	const customerImg = document.getElementById('customer'+id);
	const customerArrive = 'images/customer'+id.toString()+'.png';
	const audioAsk = document.getElementById('ask' + id);
	//var cook1 = document.getElementById('cook1');
	//console.log(customerArrive);

	function toggleCust(e) {
        customerImg.classList.toggle('paused');
        audioAsk.play();
        var myPauseTimer = setTimeout(function(){customerImg.classList.toggle('paused');},2000);
        var myPauseTimer2 = setTimeout(function(){cook1.fnOK();},2200);
        
    }
	
	this.Arrive = function() {
		customerImg.attributes.src.nodeValue = customerArrive;
		var myPauseTimer = setTimeout(toggleCust,2000);
		//var myPauseTimer2 = setTimeout(cook1.fnOK,2200);
		eventdone = true;
	}
	

	function listener(e) {
		// console.dir(e);
		if (e.type == "animationend") {
	  		customerImg.style.display = "none";

	    	// console.log('end');
		}
	}
	customerImg.addEventListener("animationstart",listener, false);
	customerImg.addEventListener("animationend",listener, false);
	// customerImg.addEventListener("animationiteration",listener, false);

	var maxWH = (100 - (id * 10));
	var b = (id - 1) * 30;
	var l = (id - 1) * -30;
	var zindex = 6 - id;
	// console.log(maxWH +' '+bl+' '+zindex);
	customerImg.style.maxWidth = maxWH.toString() + '%';
    customerImg.style.maxHeight = maxWH.toString() + '%';
    customerImg.style.position = 'absolute';
    customerImg.style.bottom = b+'px';
    customerImg.style.left = l+'px';
    customerImg.style.zIndex = zindex;
}
