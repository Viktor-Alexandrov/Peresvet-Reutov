// Простейший код без сложностей
		let currentSlide = 0;
		const totalSlides = 3;

		// Показать слайд по индексу
		function showSlide(index) {
			// Скрываем все карточки
			for (let i = 0; i < totalSlides; i++) {
				document.getElementById('card' + (i + 1)).style.display = 'none';
			}

			// Показываем нужную
			document.getElementById('card' + (index + 1)).style.display = 'block';

			// Обновляем точки
			document.querySelectorAll('.dot').forEach((dot, i) => {
				if (i === index) {
					dot.classList.add('active');
				} else {
					dot.classList.remove('active');
				}
			});

			currentSlide = index;
		}

		// Следующий слайд
		function nextSlide() {
			let next = currentSlide + 1;
			if (next >= totalSlides) next = 0;
			showSlide(next);
		}

		// Предыдущий слайд
		function prevSlide() {
			let prev = currentSlide - 1;
			if (prev < 0) prev = totalSlides - 1;
			showSlide(prev);
		}

		// Переворот карточки
		document.querySelectorAll('.card').forEach(card => {
			card.addEventListener('click', function () {
				this.classList.toggle('flipped');
			});
		});

		// Свайпы для телефонов
		let touchStartX = 0;
		const carousel = document.querySelector('.carousel');

		carousel.addEventListener('touchstart', (e) => {
			touchStartX = e.changedTouches[0].screenX;
		});

		carousel.addEventListener('touchend', (e) => {
			const touchEndX = e.changedTouches[0].screenX;
			const diff = touchEndX - touchStartX;

			if (Math.abs(diff) > 50) {
				if (diff > 0) {
					prevSlide();
				} else {
					nextSlide();
				}
			}
		});