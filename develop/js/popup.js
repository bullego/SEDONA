(function() {

	function Popup(popObj) {

			var popupBack = document.createElement('div');
			var popupFront = document.createElement('div');
			var popupBtnClose = document.createElement('button');

			this.popupBackClass = popObj.popupBackClass;
			this.popupFrontClass = popObj.popupFrontClass;
			this.popupBtnClose = popObj.popupBtnClose;

			popupBack.classList.add(this.popupBackClass);
			popupFront.classList.add(this.popupFrontClass);
			popupBtnClose.classList.add(this.popupBtnClose);

			var pBack = document.body.appendChild(popupBack);
			var pFront = document.body.appendChild(popupFront);
			var pBtnClose = document.body.appendChild(popupBtnClose);


			this.openPopup = function(popContent) {

				pBack.classList.add('popup--show');
				pFront.classList.add('popup--show');
				pBtnClose.classList.add('popup--show');

				pFront.innerHTML = popContent;
			};			

			this.closePopup = function() {

				popupBack.addEventListener('click', function() {
					pBack.classList.remove('popup--show');
					pFront.classList.remove('popup--show');
					pBtnClose.classList.remove('popup--show');
				});

				pBtnClose.addEventListener('click', function() {
					pBack.classList.remove('popup--show');
					pFront.classList.remove('popup--show');
					pBtnClose.classList.remove('popup--show');
				}); 
			};

			this.closePopup();
	};


	//____________________HTMLAcademy
	var p1 = new Popup({
		popupBackClass: 'popup__academy-back',
		popupFrontClass: 'popup__academy-front',
		popupBtnClose: 'popup__academy-btn--close'
	});	

	var btnHtmlAcademy = document.querySelector('.btnHtmlAcademy');
	
	btnHtmlAcademy.addEventListener('click', function() {
		var myContent = document.querySelector('.popup__academy');
		p1.openPopup(myContent.innerHTML);
	});

	//____________________search-hotel
	var p2 = new Popup({
		popupBackClass: 'popup__hotel-back',
		popupFrontClass: 'popup__hotel-front',
		popupBtnClose: 'popup__hotel-btn--close'
	});

	var btnSearchHotel = document.querySelector('.search-hotel__btn');
	
	btnSearchHotel.addEventListener('click', function() {
		var myContent = document.querySelector('.popup__hotel');
		p2.openPopup(myContent.innerHTML);
	});


})();