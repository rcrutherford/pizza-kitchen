'use strict';

const Oven = function(id) {
	const ovenImg = document.getElementById('oven'+id);

	const ovenOpen = 'images/oven-open.png';
	const ovenClosed = 'images/oven-closed.png';
	
	const aOvenOpen= document.getElementById('audioovenopen');
	const aOvenClose= document.getElementById('audioovenopen');
	const aOvenDone= document.getElementById('audioovendone');

	this.Done = function() {
		aOvenDone.play();
	}
	this.Open = function() {
		ovenImg.attributes.src.nodeValue = ovenOpen;
		aOvenOpen.play();
	}

	this.Close = function() {
		ovenImg.attributes.src.nodeValue = ovenClosed;
		aOvenClose.play();
	}

	var maxWH = (60 - (id * 10));
	var bl = (id - 1) * 30;
	var zindex = 6 - id;
	// console.log(maxWH +' '+bl+' '+zindex);
	ovenImg.style.maxWidth = maxWH.toString() + '%';
    ovenImg.style.maxHeight = maxWH.toString() + '%';
    ovenImg.style.position = 'absolute';
    ovenImg.style.bottom = bl+'px';
    ovenImg.style.left = bl+'px';
    ovenImg.style.zIndex = zindex;
}
