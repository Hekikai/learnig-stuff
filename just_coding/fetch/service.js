const form = document.querySelector('#form');
const input = document.querySelector('#input');

const uploadFile = (event) => {
	event.preventDefault();

	const blobFile = input.files[0];
	const formData = new FormData();
	formData.append('fileToUpload', blobFile);

	const res = fetch('http://localhost:8082/image', {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
		method: "POST",
		body: formData
	});
}

form.addEventListener('submit', uploadFile);