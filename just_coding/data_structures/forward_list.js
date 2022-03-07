/*
 *
 * lim f(x)/g(x) = const
 * x->a
 *
 * f(x) = O(g(x))
 *
 * O(x) = O(2x)
 *
 */


/*
 * [1, 3, 4, 5, 6, 8, 9] - length = n
 *
 * O(n) - search in not sorted
 * O(log(n)) - search in sorted
 */

/*
 * size
 * capacity
 * O(n) - search in not sorted
 * O(log(n)) - search in sorted
 * O(1) - push
 * O(n) - insert
 *
 * bubble sort O(n^2), O(n) - best
 * merge sort (nlog(n))
 * quick sort (nlog(n))
 * heap sort (nlog(n))
 */

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	toString() {
		return `${ this.value }`
	}
}

class ForwardList {

	constructor() {
		this.head = null;
		this.tail = null;
	}

	push = (val) => {
		const newNode = new Node(val);
		if (!this.head || !this.tail) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}

	insert = (val, prevNode) => {
		if (prevNode === null) {
			return null;
		}

		const newNode = new Node(val);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		if (newNode.next === null) {
			this.tail = newNode;
		}

		return this;
	}

	remove = (val) => {
		if (!this.head) {
			return null;
		}
		let deletedNode = null;

		while (this.head && this.head.value === val) {
			deletedNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head.next;

		if (currentNode !== null) {
			while (currentNode.next) {
				if (currentNode.next.value === val) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		if (this.tail?.value === val) {
			this.tail = currentNode;
		}

		return deletedNode;
	}

	unshift = (val) => {
		const newNode = new Node(val, this.head);

		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	get = (val) => {
		if (!this.head) {
			return null;
		}

		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === val) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	toArray = () => {
		const nodes = [];
		let currentNode = this.head;

		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}

		return nodes;
	}

	toString = () => {
		return this.toArray().map((node) => node.toString()).toString();
	}
}





