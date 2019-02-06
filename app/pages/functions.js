const add = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    console.error('Введеное значение не есть числом');
  } else {
    return +a + +b;
  }
};
console.log(add(3, 5));


const lenght = (r) => {
  if (isNaN(r)) {
    console.error('Введеное значение не есть числом');
  } else {
    return 2 * Math.PI * r;
  }
};
lenght(10);


const discr = (a, b, c) => {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.error('Введеное значение не есть числом');
  } else {
    return b ** 2 - 4 * a * c;
  }
};
discr(2, 5, -7);


const square = (num) => {
  if (isNaN(num)) {
    console.error('Введеное значение не есть числом');
  } else {
    return num ** 2;
  }
};
square(10);


const sumTo = (num) => {
  if (isNaN(num)) {
    console.error('Введеное значение не есть числом');
  } else {
    if (num === 1) {
      return 1;
    }
    return num + sumTo(num - 1);
  }
};

console.log(sumTo(10));


const fib = (num) => {
  if (isNaN(num)) {
    console.error('Введеное значение не есть числом');
  } else {
    if (num < 2) {
      return num;
    }
    return fib(num - 1) + fib(num - 2);
  }
};

console.log(fib(10));

