//! Пока ничего непонятно, надо вернуться попозже
// const data = [
// 	['Denis', 'Tagil', '2001-11-30'],
// 	['Shamil', 'IDK', '2001-01-26'],
// 	['Valera', 'Kirov', '2001-09-10'],
// ];

// console.dir({ data });


// //? Метаданные, которые говорят нам о том, как изменять каждый элемент массива
// const metadata = {
// 	name: 'string',
// 	city: 'string',
// 	born: 'Date',
// 	age() {
// 		return (
// 			new Date().getFullYear() - new Date(this.born).getFullYear()
// 		);
// 	},
// 	toString() {
// 		return [this.name, this.city, this.born, this.age].join(', ');
// 	}
// };

// const query = ({ name, age, city }) => (
// 	name !== '' &&
// 	age > 19 &&
// 	city === 'Tagil'
// );


// assignMetadata(data, metadata);

// const res = data.filter(query);
// console.dir({ res });
// console.dir({ age: res[0].age });