document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		const error = formValidate(form);
	}

	const formValidate = (form) => {
		let error = 0;
		const formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					console.log('email')
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox"
				&& input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					console.log(2);
					formAddError(input);
					error++;
				}
			}
		}
	}

	const formAddError = (input) => {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	const formRemoveError = (input) => {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	// Не та регулярка
	// ^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
	const emailTest = (input) => {
		return String(input)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	}
});
