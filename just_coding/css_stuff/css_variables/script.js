console.log(window.getComputedStyle(document.documentElement).getPropertyValue(`--div-background-color`))

const darkThemeButton = document.querySelector('.dark-theme-button');
const lightThemeButton = document.querySelector('.light-theme-button');

darkThemeButton.addEventListener('click', () => {
	document.documentElement.style.setProperty('--background-color', '#333');
})

lightThemeButton.addEventListener('click', () => {
	document.documentElement.style.setProperty('--background-color', 'white');

})