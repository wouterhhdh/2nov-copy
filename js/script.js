//1. set ul width 
//2. image when click prev/next button
var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPosition = 0;
var currentImage = 0;
init();

function init(){
	ul = document.getElementById('image_slider');
	li_items = ul.children;
	imageNumber = li_items.length;
	imageWidth = li_items[0].offsetWidth;
	ul.style.width = imageWidth * imageNumber + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	prev.onclick = function(){ onClickPrev();};
	next.onclick = function(){ onClickNext();};
};


function onClickNext(){
	// if (currentImage == imageNumber - 1){
		// li_items[each].style.left = "-50%";
		$(li_items).each(function() {
			this.style.left = currentPosition - 50 + "%";	
		})
		currentPosition = currentPosition - 50;
		currentImage = currentImage - 1
		// slideTo(0);
	// }		
	// else{
	// 	slideTo(currentImage + 1);
	// }
	};

function onClickPrev(){
	// if (currentImage == imageNumber - 1){
		// li_items[each].style.left = "-50%";
		// console.log(li_items)
		// slideTo(0);
	// }		
	// else{
	// 	slideTo(currentImage + 1);
	// }

		$(li_items).each(function() {
			// console.log(currentPostion)
			this.style.left = currentPosition + 50 + "%";
		})
		currentPosition = currentPosition + 50;
		currentImage = currentImage + 1

	};


//commit test


