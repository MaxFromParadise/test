if (document.querySelector('.award-card__wrap') && document.querySelectorAll('.award-card__slide')) {
	const cardWrapper = document.querySelector('.award-card__wrap');
	const slides = document.querySelectorAll('.award-card__slide');
	slides[0].classList.add('active');

	const actions = [
		() => {
			cardWrapper.style.transform = 'translateX(-50%)';
			slides[0].classList.remove('active');
		},
		() => {
			slides[1].style.opacity = '0';
			slides[0].classList.remove('active');
		},
		() => {
			slides[0].classList.add('active');
			cardWrapper.style.transform = 'translateX(0%)';
			setTimeout(() => {
				slides[1].style.opacity = '1';
			}, 1000);
		},
	];

	let current = 0;

	setTimeout(() => {
		actions[current]();

		setInterval(() => {
			current = (current + 1) % actions.length;
			actions[current]();
		}, 3000);
	}, 3000);
}
