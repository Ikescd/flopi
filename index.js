function flopiRandom() {
	let result = 'flopi'
		.split('')
		.sort((a, b) => {
			return Math.random() < 0.5 ? 1 : -1;
		})
		.join('');

	return result;
}

function btnClick() {
	const button = document.getElementById('btn');
	button.addEventListener('click', () => {
		let result = document.getElementById('result');
		let flopiOfTheDay = flopiRandom();

		Object.assign(result, {
			innerHTML: `<p>Today, it's: ${flopiOfTheDay}!`,
		});
		result.style.display = 'initial';
	});
}

function app() {
	btnClick();
}
app();
