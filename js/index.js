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



/*включаем маску только при наличии поля для ввода телефона */
/*маска для поля с вводом телефона 
в формате 7(999)999-99-99*/
/*
let selector = document.querySelector('#tel');
let im = new InputMask("7(999)999-99-99");
im.mask(selector);
*/

/* валидация для полей имя, имейл, сообщение*/
let validation = new JustValidate("#contactForm");
validation.addField("#name",[{
	/*проверка заполнености поля имя */
		rule: "required",
		errorMessage: "Введите имя",
	},
	{/*проверка на колличество символов в поле имя */
		rule: "minLength",
		value:2,
		errorMessage: "Минимум 3 символа",
	},
]).addField("#email",[{
	/*проверка заполненности поля имейл */
	rule: "required",
	errorMessage: "Введите Email",
},{
	/*проверка на правильность ввода адреса почты */
	rule: "email",
	errorMessage: "Email введён не верно",
},
]).addField("#message",[{
	rule:"required",
	errorMessage: "Введите текст воообщения",
},{
	/*проверака на колличество 
	введеных символов в поле сообщение */
	rule: "minLength",
	value: 10,
	errorMessage: "Минимум 10 символов",
}])


/*валидация номера телефона с помощзью стрелочной 
функции с использованием inputmask, проверка на то
что вводимая информация это цифры, проверка на 
колличество символов*/


/* 
.addField("#tel",[{
	validator: (value) =>{
		const phone = selector.inputmask.unmaskedvalue()
		return Boolean(Number(phone) && phone.leigth > 0) 
	},
	errorMessage: "Введите телефон",
},{
	validator: (value) =>{
		const phone = selector.inputmask.unmaskedvalue()
		return Boolean(Number(phone)&& phone.leigth ===10)
	},
	errorMessage:'Ввеедите номер полностью',
}
])
*/

/*для проверки работы отправки формы 
.onSuccess(function(){
	alert('Отправлено')
})
*/
.onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
		/* для получения номера телефона с маской
		tel: document.getElementById("tel").value,
		*/
		/*для получения номера телефона без маски
		tel: selector.inputmask.unmaskedvalue(),
		*/
		email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
/* создаём отправку данных, если используем await
	то функция сверху должны быть асинхронной async*/
  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result = await response.text()
  alert(result)
})

