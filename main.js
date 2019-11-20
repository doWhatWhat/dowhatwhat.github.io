
var wrapper = document.getElementById('wrapper');
var what_block = document.getElementById('what_block');
var slider_block = document.getElementById('slider_block');
var slider_blur = document.getElementById('slider_blur');
var slider = document.getElementById('slider');
var in_slider = document.getElementById('inner_slider');
var slide_img = document.getElementsByClassName('slide_img');
var navig_place = document.getElementsByClassName('navig_place');
var navig = document.getElementsByClassName('navig');
var in_navig = document.getElementsByClassName('in_navig');
var container = document.getElementById('container');


		/* .....ADAPTER..... */

window.addEventListener("resize", resize);
function resize(){
	slider.style.width = slider.clientWidth - (slider.clientWidth%10);
	slider.style.height = (slider.clientWidth*9)/20;
	slider.style.top = (wrapper.clientHeight-slider.clientHeight)/2;
	what_block.style.height = slider.clientHeight;
	what_block.style.top = (wrapper.clientHeight-what_block.clientHeight)/2;
}
resize();



		/* .....WRAP ANIM..... */	

let height = wrapper.clientHeight;
let op = 1;

window.onscroll = function(){
	
	let marg = -window.pageYOffset/4;
	wrapper.style.marginTop = marg;
	slider_blur.style.marginTop = window.pageYOffset/1.4;
	
	wrapper.style.height = height - window.pageYOffset - marg;
	
	if(window.pageYOffset > 1){
		op = (window.innerHeight/20)/window.pageYOffset;
		if(op > 0.1){
			wrapper.style.opacity = op;
			if(op<=0.5){
				slider_blur.style.opacity = op;
			}
		}else{
			wrapper.style.opacity = 0;
			slider_blur.style.opacity = 0;
		}
	}else{
		wrapper.style.opacity = 1;
		slider_blur.style.opacity = 0.5;
	}
	
	
}


		/* .....SLIDER.... */

var spotTouch;
var spotMove;
var count = 0;
var i = 0;
var slideWid = slider.clientWidth;

in_navig[count].style.display = 'block';
slider_blur.style.backgroundImage = 'url('+slide_img[count].getAttribute('src')+')';

slider.addEventListener('touchstart', function(t){
	spotTouch = t.touches[0].clientX;
});

slider.addEventListener("touchmove", function slider(t){
	spotMove = spotTouch - t.touches[0].clientX;
	
	if(spotMove < 0){
		if(count == 3 && i == -slideWid * count){
			count--;
			moveLeft();
			console.log(count);
		}
		if(count == 2 && i == -slideWid * count){
			count--;
			moveLeft();
			console.log(count);
			console.log
		}
		if(count == 1 && i == -slideWid * count){
			count--;
			moveLeft();
			console.log(count);
		}
		clearInterval(autoSlideTime);
	}
	else if(spotMove > 0){
		if(count == 0 && i == 0){
			count++;
			moveRight();
			console.log(count);
		}
		else if(count == 1 && i == -slideWid * count){
			count++;
			moveRight();
			console.log(count);
		}
		else if(count == 2 && i == -slideWid * count){
			count++;
			moveRight();
			console.log(count);
		}
		clearInterval(autoSlideTime);
	}
});
function moveLeft(){
	for(let b=0;b<navig.length;b++){
		if(b == count){
			in_navig[count].style.display = 'block';
			navig[count].style.border = '2px solid #fff';
		}else{
			in_navig[b].style.display = 'none';
			navig[b].style.border = '2px solid #ccc';
		}
	}
	let moveLeftInt = setInterval(function(){
		if(count == 2 && i < -slideWid * count){
			i += 10;
			in_slider.style.marginLeft = i;
		}else if(count == 2 && i == -slideWid * count){
			clearInterval(moveLeftInt);
		}
		if(count == 1 && i < -slideWid * count){
			i += 10;
			in_slider.style.marginLeft = i;
		}else if(count == 1 && i == -slideWid * count){
			clearInterval(moveLeftInt);
		}
		if(count == 0 && i < -slideWid * count){
			i += 10;
			in_slider.style.marginLeft = i;
		}else if(count == 0 && i == -slideWid * count){
			clearInterval(moveLeftInt);
		}
	},1);
	slider_blur.style.backgroundImage = 'url('+slide_img[count].getAttribute('src')+')';
}
function moveRight(){
	for(let b=0;b<navig.length;b++){
		if(b == count){
			in_navig[count].style.display = 'block';
			navig[count].style.border = '2px solid #fff';
		}else{
			in_navig[b].style.display = 'none';
			navig[b].style.border = '2px solid #ccc';
		}
	}
	let moveRightInt = setInterval(function(){
		if(count == 1 && i > -slideWid * count){
			i -= 10;
			in_slider.style.marginLeft = i;
		}else if(count == 1 && i == -slideWid * count){
			clearInterval(moveRightInt);
		}
		if(count == 2 && i > -slideWid * count){
			i -= 10;
			in_slider.style.marginLeft = i;
		}else if(count == 2 && i == -slideWid * count){
			clearInterval(moveRightInt);
		}
		if(count == 3 && i > -slideWid * count){
			i -= 10;
			in_slider.style.marginLeft = i;
		}else if(count == 3 && i == -slideWid * count){
			clearInterval(moveRightInt);
		}
	},1);
	slider_blur.style.backgroundImage = 'url('+slide_img[count].getAttribute('src')+')';
}

var stop = 0;
var autoSlideTime = setInterval(autoSlide, 3000);
function autoSlide(){
	if(stop == 0){
			if(count == 0 && i == 0){
				count++;
				console.log(count);
			}
			else if(count == 1 && i == -slideWid * count){
				count++;
				console.log(count);
			}
			else if(count == 2 && i == -slideWid*count){
				count++;
				console.log(count);
				stop = 1;
			}
			moveRight();
	}
	else if(stop == 1){
		if(count == 3 && i == -slideWid * count){
			count--;
			console.log(count);
		}
		else if(count==2 && i == -slideWid * count){
			count--;
			console.log(count);
		}
		else if(count==1 && i == -slideWid * count){
			count--;
			console.log(count);
			stop = 0;
		}
		moveLeft();
	}
}
//...navig buttons...
for(let b=0;b<navig_place.length;b++){
	navig_place[b].onclick = function(){
		if(b > count){
			count = b;
			moveRight();
		}else{
			count = b;
			moveLeft();
		}
	}
}
	

	
















