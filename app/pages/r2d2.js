const R2D2 = {
  E: 2.718281828459045,
  PI: 3.14159265359,
  argsValidator(...args) {
    let isValid = true;

    args.forEach((el) => {
      if (isNaN(el) || el === undefined || el === '') isValid = false;
    });

    return !!isValid;
  },
  pow(x, n) {
    return this.argsValidator(x, n) ? x ** n : new Error('Error');
  },
  max: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return ('Введеное значение не есть числом');
    } else if (a === '' || b === '') {
      return ('Пропущен аргумент');
    } else if (+a > +b) {
      return a;
    } return b;
  },
  min: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return ('Введеное значение не есть числом');
    } else if (a === '' || b === '') {
      return ('Пропущен аргумент');
    } else if (+a > +b) {
      return b;
    } return a;
  },
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return ('Введеное значение не есть числом');
    } else if (a === '' || b === '') {
      return ('Пропущен аргумент');
    } return +a + +b;
  },
  diam: (len) => {
    if (isNaN(len)) {
      return ('Введеное значение не есть числом');
    } else if (len === '') {
      return ('Пропущен аргумент');
    } return (len / R2D2.PI);
  },
  disk: (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return ('Введеное значение не есть числом');
    } else if (a === '' || b === '' || c === '') {
      return ('Пропущен аргумент');
    } return ((b ** b) - 4 * +a * +c);
  },
};
console.log(R2D2.disk(6, 1, 3));


const user = {
  name: 'John',
  surname: 'Doe',
  phone: '+380971234567',
  email: 'john@example.com',
  id: '123efr24',
};

let counter = 0;

for (const i in user) {
  if (Object.prototype.hasOwnProperty.call(user, i)) {
    counter++;
    console.log(`Свойство ${i} имеет значение ${user[i]}`);
  }
}

console.log(`Всего разобрано ${counter} свойств объекта user`);
