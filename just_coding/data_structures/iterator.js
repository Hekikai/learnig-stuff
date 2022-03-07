//!Написать итератор, чтобы выводил натуральные числа рандомные в диапазоне [0..500] и итерировал пока не найдет константное рандомное число заранее вычисленное по этому же алгоритму и показано перед циклом - юзать for of 

function generateRandomNumber(begin, end) {
	return Math.floor(begin + Math.random() * (end - begin + 1))
}

let range = {
	from: 0,
	to: 500,
}

let aim = {
	result: generateRandomNumber(range.from, range.to),
}

range[Symbol.iterator] = function () {

	console.log(`Necessary number: ${aim.result}`);

	return {
		current: this.from,
		last: this.to,
		achieveTo: aim.result,
		outcome: undefined,

		next() {
			while (this.outcome !== this.achieveTo) {
				return { done: false, value: this.outcome = generateRandomNumber(this.current, this.last) }
			}
			return { done: true }
		}
	}
}

for (let piece of range) {
	console.log(piece)
}
