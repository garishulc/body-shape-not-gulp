// Мобильная навигация

function mobileNav() {
	// Mobile nav button
	//ищем по селекторам/классам в css и присваиваем им переменные константы
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const navIcon = document.querySelector('.nav-icon');

	//создаём функцию для взаимодействия с .navBtn
	navBtn.onclick = function () {
		/*при нажатии на элемент '.mobile-nav-btn' добавит  'mobile-nav--open'*/
		nav.classList.toggle('mobile-nav--open');
		/* при нажатии на элемент '.nav-icon' добавит'nav-icon--active'*/
		navIcon.classList.toggle('nav-icon--active');
		/* при нажатии на один из выше перечисленных элементов добавит к тегу .body значение настроки 'no-scroll'*/
		document.body.classList.toggle('no-scroll');
	};
}
mobileNav();