//1. set ul width 
//2. image when click prev/next button
var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPosition = 0;
var currentImage = 0;
var itemsOnScreen = 2;
var animationSpeed = 300;
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
		if (currentImage == imageNumber - itemsOnScreen){
		}
		else {
			$(li_items).each(function() {
				$(this).animate({left: currentPosition - (100/itemsOnScreen) + "%"}, animationSpeed);
			})
			currentPosition = currentPosition - (100/itemsOnScreen);
			currentImage = currentImage + 1;
			checkPosition()
		};	
	};

function onClickPrev(){
		if (currentImage == 0){

		}
		else {
			$(li_items).each(function() {
				$(this).animate({left: currentPosition + (100/itemsOnScreen) + "%"}, animationSpeed);
			})
			currentPosition = currentPosition + (100/itemsOnScreen);
			currentImage = currentImage - 1;
			checkPosition()
		};
	};

function checkPosition(){
	if (currentImage == 0){
		prev.style.display = "none";
	}
	else if (currentImage >= imageNumber - itemsOnScreen) {
		next.style.display = "none"	
	}
	else {
		prev.style.display = "block"
		next.style.display = "block"
		
	}
}


//commit test number two


