'use strict';
window.onload = function() {

	//____________________main-nav btn-mobile
	var navMenu = document.querySelector('.main-nav');
	var btnClose = document.querySelector('.main-nav__btn-close');
	var btnOpen = document.querySelector('.main-nav__btn-open');

	btnClose.classList.add('btn-show');

	btnClose.addEventListener('click', function() {

		navMenu.classList.add('main-nav__close');
		btnClose.classList.remove('btn-show');
		btnOpen.classList.add('btn-show');

	});
	btnOpen.addEventListener('click', function() {

		navMenu.classList.remove('main-nav__close');
		btnOpen.classList.remove('btn-show');
		btnClose.classList.add('btn-show');

	});

	//____________________scroll-to-top button
	var btnUp = document.querySelector('.btn__scroll-top');

	function scrollBtn() {	
		var topY = document.body.scrollTop || window.pageYOffset;
		if(topY > 300) {
			btnUp.classList.add('show-scroll');
		} else {
			btnUp.classList.remove('show-scroll');
		}
	}
	scrollBtn(); //вызываем один раз на стр, чтоб при F5 кнопка не глючила

	window.addEventListener('scroll', scrollBtn);

	btnUp.addEventListener('click', function() {	
		var topY = document.body.scrollTop || window.pageYOffset;
		var time = setInterval(function() {
			if(topY > 0) {
				window.scrollTo(0, topY-=15); //scrollTo(X coord, Y coord)
			} else {
				clearInterval(time);
			}	
		}, 3);
	});

};



