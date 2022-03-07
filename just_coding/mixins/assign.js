const obj1 = {
	name: 'Artem Kolesnikov',
	born: '2002-02-14',
	city: 'Penza',
};

const mix1 = {
	toString() {
		return `${this.name} was born in ${this.city} in ${this.born}`;
	},
	age() {
		const year = new Date().getFullYear();
		const born = new Date(this.born).getFullYear();
		return year - born;
	}
};

const mix2 = {
	toString() {
		return `${this.name} - ${this.city} - ${this.born}`;
	}
};

const res = Object.assign(obj1, mix1, mix2);
console.log(res);
console.log(res.toString());