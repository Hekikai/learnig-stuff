class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}

	push(value) {
		this.items[this.count] = value;
		console.log(`${value} has been added to ${this.count}`)
		this.count++;
		return this.count - 1;
	}

	pop() {
		if (this.count === 0) return undefined;
		const deleteItem = this.items[this.count - 1]
		this.count--;
		console.log(`${deleteItem} has been removed!`)
		return deleteItem;
	}

	peek() {
		console.log(`Top element is ${this.items[this.count - 1]}`)
		return this.items[this.count - 1]
	}

	isEmpty() {
		console.log(this.count === 0 ? 'Stack is empty!' :
			'Stack is not empty!')
		return this.count === 0
	}

	size() {
		console.log(`${this.count} elements are in the stack!`)
		return this.count;
	}

	print() {
		let str = '';
		for (let i = 0; i < this.count; i++) {
			str += this.items[i] + ' ';
		}
		return str;
	}
	clearStack() {
		this.items = [];
		this.count = 0;
		console.log('Stack cleared...')
		return this.items;
	}
}

const stack = new Stack();
