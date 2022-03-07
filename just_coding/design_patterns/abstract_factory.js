class Response {
	constructor(responseType, responseBody) {
		this.responseType = responseType;
		this.responseBody = responseBody;
	}
}

class NumericResponseFactory {
	static create(request) {
		if (typeof request === 'number') {
			return new Response('numeric', request);
		}
	}
}

class SymbolicResponseFactory {
	static create(request) {
		if (typeof request === 'string') {
			return new Response('symbolic', request);
		}
	}
}

function process(arrOfStrings, responseFactory) {

	let resultsArray = [];

	for (let i = 0; i < arrOfStrings.length; i++) {
		let answer = responseFactory.create(arrOfStrings[i]);

		if (answer !== undefined) resultsArray.push(answer);
	}

	return resultsArray;
}

let finalResult = process([127.0304, true, 3.14159265, 'https://www.google.com',], NumericResponseFactory);
console.log(finalResult);
