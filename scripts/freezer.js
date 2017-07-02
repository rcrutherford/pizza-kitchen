'use strict';

const Freezer = function(id) {
	const freezerImg = document.getElementById('freezer'+id);

	const freezerOpen = 'images/freezer-open.png';
	const freezerClosed = 'images/freezer-closed.png';
	
	this.Open = function() {
		freezerImg.attributes.src.nodeValue = freezerOpen;
	}

	this.Close = function() {
		freezerImg.attributes.src.nodeValue = freezerClosed;
	}

	var maxWH = (80 - (id * 10));
	var bl = (id - 1) * 30;
	var zindex = 6 - id;
	// console.log(maxWH +' '+bl+' '+zindex);
	freezerImg.style.maxWidth = maxWH.toString() + '%';
    freezerImg.style.maxHeight = maxWH.toString() + '%';
    freezerImg.style.position = 'absolute';
    freezerImg.style.bottom = bl+'px';
    freezerImg.style.left = bl+'px';
    freezerImg.style.zIndex = zindex;

}
