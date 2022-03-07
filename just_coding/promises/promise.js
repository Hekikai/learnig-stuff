// ! Проброс в следующий .catch
// new Promise((resolve, reject) => {

// 	throw new Error("Ошибка!");

// }).catch(error => {

// 	if (error instanceof URIError) {
// 		// обрабатываем ошибку
// 	} else {
// 		console.log("Не могу обработать ошибку");

// 		throw error; // пробрасываем ошибку
// 	}
// }).then(() => {
// 	console.log("I'm then!");
// }).catch(error => {

// 	console.log(`Неизвестная ошибка: ${error}`);
// 	// ничего не возвращаем => выполнение продолжается
// });

//! Необработанные ошибки
// new Promise(() => {
// 		noSuchFunction(); // Ошибки (такой функции нет)
// 	})
// 	.then(() => {
// 		console.log("Я не появлюсь");
// 		// обработчики .then, один или может быть больше
// 	}); // .catch нет! Что будет?!

//! UnhandledRejection
// window.addEventListener('unhandledrejection', (event) => {
// 	// объект события имеет два специальных свойства:
// 	console.log(event.promise); // [object Promise] - промис, который
// сгенерировал ошибку console.log(event.reason); // Error: Ошибка! - объект
// ошибки, которая не была обработана });

// new Promise(function () {
// 	throw new Error("Ошибка!");
// }); // нет обработчика ошибок

//! Асинхронная обработка then, catch и finally

const processAllData = (array, isCompleted) =>
	array.filter((obj) => obj.completed === isCompleted);

const getUsersInfo = (array, userId) =>
	array.filter((obj) => obj.userId === userId);

console.log("sync code");

const promise = fetch("https://jsonplaceholder.typicode.com/todos/")
	.then((response) => response.json())

	//* Which one do we need: true or false?
	.then((data) => processAllData(data, true))
	.then((processedData) => {
		console.log(processedData);
		return processedData;
	})

	//* Which user's info do we need? Point on users' id in the function
	.then((usersInfo) => getUsersInfo(usersInfo, 1))
	.then(console.log)
	.catch((error) => {
		console.log(`Error: ${ error.name } \nAction: ${ error.message }`);
		throw new Error("Failed with something... Check it, please");
	})
	.then(console.log(1));

//? Долго думал, почему в коде со строчки 92 и по 109 выводит:
//? sync code
//? 1
//? А зачем уже то, что происходит в fetch
