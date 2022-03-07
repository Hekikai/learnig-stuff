const extend = (obj, mixin) => {
	const keys = Object.keys(mixin);
	for (const key of keys) {
		obj[key] = mixin[key];
	}
	return obj;
};

//* Usage

const obj1 = {
	name: 'Artem Kolesnikov',
	born: '2002-02-14',
	city: 'Penza',
}

const mix1 = {
	toString() {
		return `${this.name} was born in ${this.city} in ${this.born}`;
	},
	age() {
		const year = new Date().getFullYear();
		const born = new Date(this.born).getFullYear();
		return year - born;
	}
}

//* Либо так, используя функцию extend, которая позволяет
//* скопировать в объект (первый аргумент) свойства 
//* или методы из миксина (второго аргумента)
extend(obj1, mix1);

//* Либо использовать довольно новую функцию, но есть
//* подводные, так как движок JS оптимизирован для операции
//* доступа к свойствам; так что менять прототип объекта
//* в ран-тайме - не лучшая затея.

//* Лучше использовать Object.create();
//! Object.setPrototypeOf(obj1, mix1);
console.log(obj1.toString());
console.log(obj1.age());