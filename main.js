// HOME WORK
//
//
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
//
// function a(r) {
//     return Math.PI * Math.pow(r, 2);
// }
// console.log(a(2));
//
// - створити функцію яка обчислює та повертає площу циліндру
//
// function s(r, h) {
//     return 2 * Math.PI * r * (r + h);
// }
// console.log(s(5, 10));
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(`Max number is ${max}`)
//     return min;
// }
//
// console.log(`Min number = ${minMax(3, 4, 7, 2, 7, 8, 4, 0)}`);
//
// let minMax = function (arr) {
//     let min = arr[0];
//     let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max = arr[i];
//         }
//         if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     console.log(`Max is ${max}`)
//     return min;
// };
// console.log(`Min number = ${minMax([3, 4, 7, 2, 7, 8, 4, 0])}`);
//
//
// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
//
// let txt = function (text) {
//     document.write(`<div>${text}</div>`);
// }
// txt('hello okten');
//
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let f = function (text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// f('hello');
//
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let f = function (text, k) {
//     document.write(`<ul>`);
//     for (let i = 0; i < k; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// f('hello', 5);
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let f = function (arr) {
//     document.write(`<ol>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`);
//
// }
// f([1,3, true, 'okten', false, 'hello world', 10, 'js']);

// CLASS WORK
//
// - створити функцію яка приймає масив та виводить його
//
// let arr = function (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// arr([1,3, true, 'okten', false, 'hello world', 10, 'js']);
//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let min = function (a, b, c) {
//     if (a <= b && a <= c) {
//         console.log(a);
//         return a;
//     }
//
//     if (b <= a && b <= c) {
//         console.log(b);
//         return b;
//     }
//
//     if (c <= a && c <= b) {
//         console.log(c);
//         return c;
//     }
// }
// min(-1,3,0);
//
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let max = function (a, b, c) {
//     if (a >= b && a >= c) {
//         console.log(a);
//         return a;
//     }
//
//     if (b >= a && b >= c) {
//         console.log(b);
//         return b;
//     }
//
//     if (c >= a && c >= b) {
//         console.log(c);
//         return c;
//     }
// }
// max(-1,3,0);
//
// - створити функцію яка повертає найбільше число з масиву
//
// let arrMax = function (arr) {
//     let arrMax = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arrMax) arrMax = arr[i];
//     }
//     return arrMax;
// }
// console.log(arrMax([1, 5, 6, 8, 2, 0, 8, 5, 8]));
//
// - створити функцію яка повертає найменьше число з масиву
//
// let arrMin = function (arr) {
//     let arrMin = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arrMin) arrMin = arr[i];
//     }
//     return arrMin;
// }
// console.log(arrMin([1, 5, 6, 8, 2, 0, 8, 5, 8]));
//
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let sum = function (arr) {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(sum([1, 5, 6, 8, 2, 0, 8, 5, 8]));
//
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
//
// let average= function (arr) {
//     sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement/arr.length;
//     }
//     return sum;
// }
// console.log(average([1, 5, 6, 8, 2, 0, 8, 5, 8]));
//
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
//
// let arr = function (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// let random = function (min, max, length) {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//         newArr.push(Math.round(Math.random() * (max - min) + min));
//     }
//     arr(newArr)
// }
// random(-5, 5, 5);
//
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let getKeys = function (arr) {
//     let arrOfKeys = [];
//     for (const keys of arr) {
//         for (const key in keys) {
//             arrOfKeys.push(key);
//         }
//     }
//     return arrOfKeys;
// }
// console.log(getKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let getValues = function (arr) {
//     let arrOfValues = [];
//     for (const values of arr) {
//         for (const value in values) {
//             arrOfValues.push(values[value]);
//         }
//     }
//     return arrOfValues;
// }
// console.log(getValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));
//
//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
// let add = function (arr1, arr2) {
//     newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i]+arr2[i]);
//     }
//     return newArr;
// }
// console.log(add([1, 2, 3, 4], [2, 3, 4, 5])); // - if the arrays length is the same
//
//
// let plus = function (arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j) {
//                 newArr.push(arr1[i] + arr2[j]);
//             }
//         }
//     }
//     return newArr;
// }
// console.log(plus([1, 2, 3, 4, 5], [2, 3, 4, 5])); //if no
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr = ['a', 'b', 'c'];
// arr.push(1,2,3);
// console.log(arr);
//
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);
//
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);
//
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
// arr.unshift(4,5,6);
// console.log(arr);
// //
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 3; i++) {
//     arr.shift();
// }
// console.log(arr);
//
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
//
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 3; i++) {
//     arr.pop();
// }
// console.log(arr);
//
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
//
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,3,'a', 'b', 'c');
// console.log(arr);
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
//
// for (const number of arr) {
//     newArr.push(number);
// }
// console.log(newArr);
//
// for (let i = 0; i < arr.length; i++) {
//     newArr[i]= arr[i];
// }
// console.log(newArr);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }
// console.log(str);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let str = '';
// i = 0;
// while (i < arr.length) {
// str += arr[i];
// i++;
// }
// console.log(str);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (const letter of arr) {
//     str += letter;
// }
// console.log(str);
