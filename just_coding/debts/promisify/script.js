const form = document.querySelector('.form');
const input = document.querySelector('#form__input');
const formSpan = document.querySelector('.form__message');
const img = document.createElement('img');

const validateLinkToImage = (url) => {
	return new Promise((resolve, reject) => {
		img.src = url;
		img.style = "display: block";
		img.alt = 'no image ^()^'
		img.onload = resolve;
		img.onerror = reject;
		form.append(img);
	})
}

const validatedString = () => {
	formSpan.textContent = 'Yep, your URL is valid! Enjoy!';
}

const unValidatedString = () => {
	formSpan.textContent = 'You URL is not validated :( Try again!';
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	validateLinkToImage(input.value).then(validatedString, unValidatedString);
})

