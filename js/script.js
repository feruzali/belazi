'use strict';

let popup = document.querySelector('.popup-thanks'),
	popupCloseBtn = document.querySelector('.popup-thanks-close'),
	callBtns = document.querySelectorAll('form[data-target="call"]');

callBtns.forEach(callBtn => {
	callBtn.addEventListener('submit', function(event) {
		event.preventDefault();
		this.reset();
		popup.style.display = 'block';
	});
});

popupCloseBtn.addEventListener('click', () => {
	popup.style.display = '';
});
