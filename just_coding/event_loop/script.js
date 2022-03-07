function asyncArray(array, cb) {
	array.forEach(() => {
		setTimeout(cb,1500);
	})
}

asyncArray([1,2,3,4], (i)=>{
	console.log(i);
})