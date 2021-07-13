// HOME WORK
//
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let a = 'hello';
// console.log(a);
// document.write(`<p>${a}</p>`);
// //
// //
// //
// let b = 'owu';
// console.log(b);
// document.write(`<p>${b}</p>`);
// //
// //
// let c = 'com';
// console.log(c);
// document.write(`<p>${c}</p>`);
//
//
// let d = 'ua';
// console.log(d);
// document.write(`<p>${d}</p>`);
// //
//
// let e = 1;
// console.log(e);
// document.write(`<p>${e}</p>`);
//
//
// let f = 10;
// console.log(f);
// document.write(`<p>${f}</p>`);
//
//
// let g = -999;
// console.log(g);
// document.write(`<p>${g}</p>`);
//
//
// let h = 123;
// console.log(h);
// document.write(`<p>${h}</p>`);
//
//
// let i = 3.14;
// console.log(i);
// document.write(`<p>${i}</p>`);
//
//
// let j = 2.7;
// console.log(j);
// document.write(`<p>${j}</p>`);
//
//
// let k = 16;
// console.log(k);
// document.write(`<p>${k}</p>`);
//
//
// let l = true;
// console.log(l);
// document.write(`<p>${l}</p>`);
//
//
// let m = false;
// console.log(m);
// document.write(`<p>${m}</p>`);
//
//
//
// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// a = 'hola';
// console.log(a);
// document.write(`<p>${a}</p>`);
// alert(a);
//
// b = 'okten';
// console.log(b);
// document.write(`<p>${b}</p>`);
// alert(b);
//
// c = 'net';
// console.log(c);
// document.write(`<p>${c}</p>`);
// alert(c);
//
// d = 'pl';
// console.log(d);
// document.write(`<p>${d}</p>`);
// alert(d);
//
// e = 11;
// console.log(e);
// document.write(`<p>${e}</p>`);
// alert(e);
//
// f = 101;
// console.log(f);
// document.write(`<p>${f}</p>`);
// alert(f);
//
// g = -9999;
// console.log(g);
// document.write(`<p>${g}</p>`);
// alert(g);
//
// h = 1234;
// console.log(h);
// document.write(`<p>${h}</p>`);
// alert(h);
//
// i = 3.15;
// console.log(i);
// document.write(`<p>${i}</p>`);
// alert(i);
//
// j = 2.8;
// console.log(j);
// document.write(`<p>${j}</p>`);
// alert(j);
//
// k = 17;
// console.log(k);
// document.write(`<p>${k}</p>`);
// alert(k);
//
// l = false;
// console.log(l);
// document.write(`<p>${l}</p>`);
// alert(l);
//
// m = true;
// console.log(m);
// document.write(`<p>${m}</p>`);
// alert(m);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
//
// let firstName = 'Harry';
// let middleName = 'James';
// let lastName = 'Potter'
//
// let person = `${firstName} ${middleName} ${lastName}`;
// console.log(person);
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// let name = prompt(`Введіть Ваше ім'я?`);
// let fathersName = prompt(`Введіть Ваше по-батькові?`);
// let age = prompt(`Введіть Ваш вік?`);
//
// let msg = `Вітаю ${name} ${fathersName}. Вам ${age} років`;
// console.log(msg);
//
//
//// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// console.log(typeof a);
//
// let b = '100';
// console.log(typeof b);
//
// let c = true;
// console.log(typeof c);
//
//
//
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 >= 6 -> false
// 10 === 10 -> true
// 10 >= 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
//
// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// // console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); //true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); //true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); //false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false


// CLASS WORK
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
//
// let str = 'привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
//
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
//
// let a1 = 10;
// let a2 = 16;
// let a3 = 3;
// let a4 = 5;
// let a5 = 12;
//
// console.log((a1 * a4) - a2);
//
//
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
// let a6 = 5 % 3;
// console.log(a6);
//
// let a7 = 3 % 5;
// console.log(a7);
//
// let a8 = 5 + '3';
// console.log(a8);
//
// let a9 = '5' + 3;
// console.log(a9);
//
// let a10 = 75 + 'кг';
// console.log(a10);
//
//
// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
//
// let height = 23;
// let width = 12;
//
// console.log(height * width);
//
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
//
// let heightC = 10;
// let dC = 4;
//
// let v = Math.PI * dC * 10;
// console.log(v);
//
//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2)+Math.pow(m,2));
// console.log(k);
//
//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// alert(` My name is Bond, James Bond\n Im still young\n I'm into shooting and JS`);
//
//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you';
//
// concatenation = `${str1} ${str2} ${str3}?`;
// document.write(concatenation);
//
// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205
// document.write(str - a + "<br/>"); // 15
// document.write(str * "2" + "<br/>"); // 40
// document.write(str / 2 + "<br/>"); // 10
//
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//
// let num1 = +prompt('Give me first number');
// let num2 = +prompt('Give me second number');
//
// alert(num1 + num2);
//
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let name = prompt('Tell me your name');
// let lastName = prompt('Tell me your last name');
// let age = prompt('How old are you?');
//
// alert(`Hi there ${name} ${lastName}. Congrats, you're ${age}`);
//

// =====================
// ======ДОП============
// =====================
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// let a = +prompt('Give me first number');
// let b = +prompt('Give me second number');
// let c = +prompt('Give me third number');
//
// if (a <= b && b <= c && a <= c) {
//     console.log(a, b, c);
// }
// if (a <= b && b >= c && a <= c) {
//     console.log(a, c, b);
// }
// if (a >= b && b >= c && a >= c) {
//     console.log(c, b, a);
// }
// if (a >= b && b <= c && a >= c) {
//     console.log(b, c, a);
// }
// if (b <= a && b <= c && a <= c) {
//     console.log(b, a, c);
// }
// if (c <= a && c <= b && a <= b) {
//     console.log(c, a, b);
// }
//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let trafficLight = prompt('What traffic light color do you see?');
//
// switch (trafficLight) {
//     case 'green':
//         alert('Go go go!');
//         break;
//     case 'yellow':
//         alert('Wait a sec');
//         break;
//     case 'red':
//         alert('Hold your horses');
//         break;
//     default:
//         alert('Do whatever you want');
// }
//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


// let trafficLight = confirm('Is traffic light working?');
// if (!trafficLight){
//     alert('Do whatever you want');
// } else {
//     let color = prompt('What traffic light color do you see?');
//     let isRoadClear = confirm('Is road clear?');
//
//     if (color === 'green' && isRoadClear) {
//         alert('Go');
//     } else if (color === 'green' && !isRoadClear) {
//         alert('Let them ride');
//     } else if (color === 'yellow' && isRoadClear) {
//         alert('Wait a sec, let them ride');
//     } else if (color === 'yellow' && !isRoadClear) {
//         alert('It does not worth it, wait');
//     } else if (color === 'red' && isRoadClear){
//         alert('I do not think you want to die');
//     } else if (color === 'red' && !isRoadClear) {
//         alert('Stand still and wait till green');
//     }
// }
//
//
// let color = prompt('What traffic light color do you see?');
// let isRoadClear = confirm('Is road clear?');
//
// if (color === 'green' && isRoadClear) {
//     alert('Go');
// } else if (color === 'green' && !isRoadClear) {
//     alert('Let them ride');
// } else if (color === 'yellow' && isRoadClear) {
//     alert('Wait a sec, let them ride');
// } else if (color === 'yellow' && !isRoadClear) {
//     alert('It does not worth it, wait');
// } else if (color === 'red' && isRoadClear){
//     alert('I do not think you want to die');
// } else if (color === 'red' && !isRoadClear) {
//     alert('Stand still and wait till green');
// } else {
//     alert('Do whatever you want');
// }

