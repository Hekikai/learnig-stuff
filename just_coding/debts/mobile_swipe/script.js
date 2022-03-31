const divToSwipe = document.querySelector('.swipe-div');
const divSpan = document.querySelector('.div__span');
const divSpanHeader = document.querySelector('.div__span-header');

const startSwipe = () => {
	divSpanHeader.textContent = 'You have started swiping!';
}

const changeSpanText = () => {
	divSpan.textContent = 'Swiped!';
}

const unchangeSpanText = () => {
	setTimeout(() => {
		divSpan.textContent = 'Swipe me!'
		divSpanHeader.textContent = 'You have ended swiping!';
	}, 500);
}

divToSwipe.addEventListener('touchstart', startSwipe);

divToSwipe.addEventListener('touchmove', changeSpanText);

divToSwipe.addEventListener('touchend', unchangeSpanText);