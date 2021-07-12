// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a = 'hello';
// console.log(a);
// document.write(a);
//
//
//
// let b = 'owu';
// console.log(b);
// document.write(b);
//
//
// let c = 'com';
// console.log(c);
// document.write(c);
//
//
// let d = 'ua';
// console.log(d);
// document.write(d);
// //
//
// let e = 1;
// console.log(e);
// document.write(e);
//
//
// let f = 10;
// console.log(f);
// document.write(f);
//
//
// let g = -999;
// console.log(g);
// document.write(g);
//
//
// let h = 123;
// console.log(h);
// document.write(h);
//
//
// let i = 3.14;
// console.log(i);
// document.write(i);
//
//
// let j = 2.7;
// console.log(j);
// document.write(j);
//
//
// let k = 16;
// console.log(k);
// document.write(k);
//
//
// let l = true;
// console.log(l);
// document.write(l);
//
//
// let m = false;
// console.log(m);
// document.write(m);



// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// a = 'hola';
// console.log(a);
// document.write(a);
// alert(a);
//
// b = 'okten';
// console.log(b);
// document.write(b);
// alert(b);
//
// c = 'net';
// console.log(c);
// document.write(c);
// alert(c);
//
// d = 'pl';
// console.log(d);
// document.write(d);
// alert(d);
//
// e = 11;
// console.log(e);
// document.write(e);
// alert(e);
//
// f = 101;
// console.log(f);
// document.write(f);
// alert(f);
//
// g = -9999;
// console.log(g);
// document.write(g);
// alert(g);
//
// h = 1234;
// console.log(h);
// document.write(h);
// alert(h);
//
// i = 3.15;
// console.log(i);
// document.write(i);
// alert(i);
//
// j = 2.8;
// console.log(j);
// document.write(j);
// alert(j);
//
// k = 17;
// console.log(k);
// document.write(k);
// alert(k);
//
// l = false;
// console.log(l);
// document.write(l);
// alert(l);
//
// m = true;
// console.log(m);
// document.write(m);
// alert(m);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

// let firstName = 'Harry';
// let middleName = 'James';
// let lastName = 'Potter'
//
// let person = `${firstName} ${middleName} ${lastName}`;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt(`Введіть Ваше ім'я?`);
// let fathersName = prompt(`Введіть Ваше по-батькові?`);
// let age = prompt(`Введіть Ваш вік?`);
//
// let msg = `Вітаю ${name} ${fathersName}. Вам ${age} років`;
// console.log(msg);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// console.log(typeof a);
//
// let b = '100';
// console.log(typeof b);
//
// let c = true;
// console.log(typeof c);



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