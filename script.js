// Задание 1

// let userAge = +prompt('Ваш возраст');

// if (userAge <= 0) {
//     alert('Ввели неверное значение');
// } else if (userAge === 1) {
//     console.log(`Вам ${userAge} год`);
// } else if (userAge >= 2 & userAge <= 4) {
//     console.log(`Вам ${userAge} года`);
// } else {
//     console.log(`Вам ${userAge} лет`);
// }

// const userName = prompt('Введите имя');
// console.log(`Добро пожаловать на сайт ${userName}`);



// Задание 2


// let a = 13;
// let b = 5;

// let result = a % b;
// console.log(result);

// let a;
// alert(a);

// alert('abc' * 3);

// alert(1 / 0);
// alert(-1 / 0);

// alert('2' * '3');


// Задание 3

// alert('2' * '3);

// let a = +'2';
// let b = +'3';
// console.log(a + b);


// let numOne = +prompt('Введите число');
// let numTwo = +prompt('Введите второе число');

// console.log(`Сумма чисел равна ${numOne + numTwo}`);
// console.log(`Разность чисел равна ${numOne - numTwo}`);
// console.log(`Произведение чисел равно ${numOne * numTwo}`);
// console.log(`Частное чисел равно ${numOne / numTwo}`);
// console.log(`Остаток от деления чисел равен ${numOne % numTwo}`);


// Задание 5


// const num = +prompt('Введите число');

// if (num > 5) {
//     console.log('Число больше 5');
// } else if (num < 5) {
//     console.log('Число меньше 5');
// } else if (num === 5) {
//     console.log('Число равно 5');
// }




// const test1 = prompt('Введите значение');
// const test2 = prompt('Введите второе значение');

// if (test1 === test2) {
//     console.log('Значения равны');
// } else {
//     console.log('Значения неравны');
// }

// console.log((test1 === test2) ? 'равны' : 'не равны');



// const num1 = +prompt('Введите число');
// const num2 = +prompt('Введите второе число');

// if (num1 < num2) {
//     console.log(`${num1} минимальное число`);
// } else {
//     console.log(`${num2} минимальное число`);
// }




// const num = +prompt('Введите число');

// if (num > 0 & num < 15) {
//     console.log(num);
// }

// console.log((num > 0 && num < 15) ? 'Ok' : 'Error');



// Задание 6



// const year = +prompt('Введите год на проверку является ли он високосным');

// if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
//     console.log(`${year} високосный год`);
// } else {
//     console.log(`${year} не високосный год`);
// }




// ДЗ


// Задание 1

// const num1 = +prompt('Введите число');
// const num2 = +prompt('Введите число');

// if (num1 === 1) {
//     console.log(`Число ${num1} равно 1`);
// } else if (num1 < 1) {
//     console.log(`Число ${num1} меньше 1`);
// }

// if (num2 === 3) {
//     console.log(`Число ${num2} равно 3`);
// } else if (num2 > 3) {
//     console.log(`Число ${num2} больше 3`);
// }



// Задание 2



/*Перепишите код к тернарному оператору

let test = true;
if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}*/


// let test = true;
// console.log((test === true) ? '+++' : '---');


// Задание 3


// const day = +prompt('Введите день месяца от 1 до 31');

// if (day >= 1 && day <= 10) {
//     console.log('Первая декада');
// } else if (day >= 11 && day <= 20) {
//     console.log('Вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третья декада');
// }



// Задание 4



// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.


const num = +prompt('Введите число');

let units = num % 10;
let tens = parseInt(num / 10 % 10);
let hundreds = parseInt(num / 100 % 10);

console.log(`В числе ${num} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}.`);
