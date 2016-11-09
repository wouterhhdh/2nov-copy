//1. set ul width 
//2. image when click prev/next button
var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;

	ul = document.getElementById('image_slider');
	li_items = ul.children;
	imageNumber = li_items.length;
	imageWidth = li_items[0].offsetWidth;
	ul.style.width = imageWidth * imageNumber + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	// prev.onclick = function(){ onClickPrev();};
	next.onclick = function(){ onClickNext();};



function onClickNext(){
	// if (currentImage == imageNumber - 1){
		// li_items[each].style.left = "-50%";
		console.log(ul.style.width)
		// slideTo(0);
	// }		
	// else{
	// 	slideTo(currentImage + 1);
	// }
	};




