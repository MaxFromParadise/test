const awardCard = document.querySelectorAll('.award-card');
if (awardCard) {
	const slides = document.querySelectorAll('.award-card__slide');
	let currentIndex = 0;

	slides[currentIndex].classList.add('active');

	setInterval(() => {
		const current = slides[currentIndex];
		let nextIndex;

		if (currentIndex === 0) {
			nextIndex = 1;
			current.classList.remove('active');
			current.classList.add('to-left');

			slides[nextIndex].classList.add('active');
		} else if (currentIndex === 1) {
			nextIndex = 2;
			current.classList.remove('active');
			slides[nextIndex].classList.add('active');
		} else {
			nextIndex = 0;
			current.classList.remove('active');
			current.classList.add('to-right');

			slides[nextIndex].classList.add('active');
		}

		setTimeout(() => {
			slides.forEach((slide, index) => {
				if (index !== nextIndex) {
					slide.classList.remove('to-left', 'to-right');
				}
			});
		}, 800);

		currentIndex = nextIndex;
	}, 3000);
}
