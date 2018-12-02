let k = 10;
	while (k >=0) {
		if (k % 2 === 0) {
		console.log(k)
	}
	--k;
}




const login = prompt('Введите логин');
login === 'isAdmin' ? alert('Привет, Admin!') : alert('Ты точно не Admin');

let login = prompt('Ведите логин');





if (login === 'Admin') {
	let password = prompt('Ведите пароль');
		if (password === 'qwerty') {
			alert('Добро пожаловать, Admin');
		} else if (password === null){
			alert('Отказано в доступе');
		} else if (password === escape){
			alert('Отказано в доступе');
		} else if (password === ''){
			alert('Отказано в доступе');
		} else {
			alert('Введенный пароль не верный');
		}
} else if (login === 'User') {
	let passwordTwo = prompt('Ведите пароль');
		if (passwordTwo === '12345') {
			alert('Добро пожаловать, User');
		} else if (passwordTwo === null){
			alert('Отказано в доступе');
		} else if (passwordTwo === escape){
			alert('Отказано в доступе');
		} else if (passwordTwo === ''){
			alert('Отказано в доступе');
		} else {
			alert('Введенный пароль не верный');
		}
} else {
	alert('Такого логина нет в системе');
}




const age = +prompt('Сколько тебе лет?');
switch (age) {
	case 12:
		alert('Слишком мало :(');
		break;
	case 16:
		alert('Почти достаточно :[');
		break;
	case 18:
		alert('Вот сейчас в самый раз! :)');
		break;
	default:
		alert('Возраст не определен %)')
		break;
}