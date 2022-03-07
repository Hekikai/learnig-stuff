// 4.1 - cookie
const name = 'maxim myachik';
const salary = '1000 $';
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(salary);
document.cookie = 'user=Artem; path=/; secure; max-age=60';

//4.2 - localStorage, sessionStorage

const values = [1, 2, false, null, () => {}, Boolean(NaN), 'maxim'];

// Set items into localStorage
for (let index = 0; index < values.length; index++) {
	localStorage.setItem("" + index, values[index]);
}
// Read a couple of them
console.log(localStorage.length);
console.log(localStorage["1"]);
console.log(localStorage["2"]);
console.log('-------------');

// Check for all the methods (includes prototype's functions)
for (const key in localStorage) {
	console.log(`${ key } => ${ localStorage.getItem(key) }`);
}
console.log('-------------');

//Check only for the instance methods
for (const key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
	}
	console.log(`${ key } =>  ${ localStorage.getItem(key) }`)
}
console.log('-------------');

// Include JSON objects into localStorage
const obj = {
	position: 'programmer',
	salary: Infinity,
	[Symbol('boo')]: 'check your back'
}

localStorage.setItem('obj', JSON.stringify(obj));
console.log(localStorage.getItem('obj'));
console.log(Object.getOwnPropertySymbols(obj));
console.log('-------------');

window.addEventListener('storage', (event) => {
	console.log(`${ event.key }: ${ event.newValue } at ${ event.url }`);
})