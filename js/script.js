'use strict';

let popupOverlay = document.querySelector('.popup-overlay'),
	popupContent = document.querySelector('.popup-content'),
	callBtns = document.querySelectorAll('button[data-target="call"]'),
	closeBtn = document.getElementById('close');

let callText = 'Мы скоро с вами свяжемся!';


let openPopup = (text) => {
	popupContent.textContent = text;
	popupOverlay.style.display = 'flex';
}


callBtns.forEach(callBtn => {
	callBtn.addEventListener('click', openPopup(callText));
});

closeBtn.addEventListener('click', () => {
	popupOverlay.style.display = '';
});