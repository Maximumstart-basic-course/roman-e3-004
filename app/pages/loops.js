let k = 10;

while (k >= 0) {
  if (k % 2 === 0) {
    console.log(k);
  }
  --k;
}

const isAdmin = true;
(isAdmin === true) ? alert('Привет, Admin!') : alert('Ты точно не Admin');


const login = prompt('Ведите логин');

if (login === 'Admin') {
  const password = prompt('Ведите пароль');

  if (password === 'qwerty') {
    alert('Добро пожаловать, Admin');
  } else if (password === null || password === '') {
    alert('Отказано в доступе');
  } else {
    alert('Введенный пароль не верный');
  }
} else if (login === 'User') {
  const passwordTwo = prompt('Ведите пароль');

  if (passwordTwo === '12345') {
    alert('Добро пожаловать, User');
  } else if (passwordTwo === null || passwordTwo === '') {
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
    alert('Возраст не определен %)');
    break;
}
