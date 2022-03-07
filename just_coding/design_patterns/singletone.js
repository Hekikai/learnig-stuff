// //* Суть метода такова, что мы можем иметь только ЕДИНСТВЕННЫЙ экземпляр класса
// //* Пример с базой данных: если мы вдруг создадим два инстанса БД, то они должны иметь одинаковые ссылки.

// class Database {

// 	#connections = 0;

// 	constructor() {
// 		if (Database.instance) {
// 			return Database.instance;
// 		}
// 		return Database.instance = this;
// 	}

// 	addConnection() {
// 		this.#connections += 1;
// 	}

// 	getConnQuantity() {
// 		return this.#connections;
// 	}
// }

// const firstDB = new Database();
// const secondDb = new Database();

// //* Проверка того, что у нас одинаковые ссылки у, как видно, разных инстансов
// console.log(firstDB === secondDb);

// //* Добавляем соединение в первую БД
// firstDB.addConnection();

// //* Наблюдаем то, что во второй БД количество соединений столько же
// console.log(secondDb.getConnQuantity());

class Singletone {
	constructor() {
		if (Singletone.instance) return Singletone.instance;
		return Singletone.instance = new Singletone();
	}
}

new Singletone() == new Singletone() // true