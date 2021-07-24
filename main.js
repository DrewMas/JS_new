// HOME WORK
//
//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
//
// let getText = document.getElementById('content');
// console.log(getText.innerText);
//
// -- отримує текст з блоку з id "rules"
//
// let getText = document.getElementById('rules');
// console.log(getText.innerText);
//
// -- замініть текст параграфа з id 'content' на будь-який інший
//
// let changeText = document.getElementById('content');
// changeText.innerText = 'Hello World';
//
// -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let changeText = document.getElementById('rules');
// changeText.innerText = 'Okten Okten'
//
// -- змініть кожному елементу колір фону на червоний
//
// let colorChange = document.querySelectorAll('*');
// for (const tag of colorChange) {
//     tag.style.backgroundColor = 'darkred';
// }
//
// -- змініть кожному елементу колір тексту на синій
//
// let textColorChange = document.querySelectorAll('*');
// for (const tag of textColorChange) {
//     tag.style.color = 'cornflowerblue'
// }
//
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let getClasses = document.getElementById('rules');
// console.log(getClasses.classList);
//
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
//
//     let allEl = document.getElementsByClassName('fc_rules');
//     for (const el of allEl) {
//         const div = document.createElement('div');
//         const btn1 = document.createElement('button');
//         const btn2 = document.createElement('button');
//
//         btn1.innerText = 'text';
//         btn2.innerText = 'random text';
//
//         el.appendChild(div);
//         div.appendChild(btn1);
//         div.appendChild(btn2);
//
//         btn1.onclick = () => {
//             console.log(el.innerText);
//         }
//
//         btn2.onclick = ()=> {
//             let  randomText = prompt('What should I log?')
//             console.log(randomText);
//         }
//
//     }
//
//
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let changeTextColor = document.getElementsByClassName('fc_rules');
// for (const el of changeTextColor) {
//     el.style.color = 'darkred';
// }

// CLASS WORK
//
//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year) // колір на текс поміняти не можу, тому буду міняти текст на текст
//
// const changeText = document.getElementById('main_header');
// changeText.innerText = 'June(Feb)-2021';
//
//     b) робить шириниу елементу ul 400px
//
// const changeUlWidth = document.getElementsByTagName('ul');
// for (const tag of changeUlWidth) {
//     tag.style.backgroundColor = 'darkred'; // щоб було видно ширину
//     tag.style.width = '400px';
// }
//
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// const changeWidth = document.getElementsByClassName('linkList');
// for (const el of changeWidth) {
//     el.style.backgroundColor = 'olive'; // щоб було видно ширину
//     el.style.width = '50%';
// }
//
//     d) отримує текст який зберігається в елементі з класом listElement2
//
// const getText = document.getElementsByClassName('listElement2');
// for (const textElement of getText) {
//     console.log(textElement.innerText);
// }
//
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//
// const changeBackgroundColor = document.getElementsByTagName('li');
// for (const el of changeBackgroundColor) {
//     el.style.backgroundColor = 'silver';
// }
//
//     f) отримує всі елементи 'a' та додає їм клас anchor
//
// const addClass = document.getElementsByTagName('a');
// for (const el of addClass) {
//     el.classList.add('anchor');
// }
//
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// const changeFont = document.getElementsByTagName('a');
// for (const a of changeFont) {
//     if (a.innerText === 'link3') a.style.fontSize = '40px';
// }
//
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// const addClass = document.getElementsByTagName('a');
// for (const el of addClass) {
//     el.classList.add(`element_${el.innerText}`);
// }
//
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// const changeBackgroundColor = document.getElementsByClassName('sub-header');
// for (const el of changeBackgroundColor) {
//     let getColor = prompt('Whar color should I change elements to?');
//     el.style.backgroundColor = `${getColor}`;
// }
//
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// const changeBackgroundColor = document.getElementsByClassName('sub-header');
// for (const el of changeBackgroundColor) {
//     if (el.innerText === 'content 2 segment') {
//         let getColor = prompt('Whar color should I change elements to?');
//     el.style.backgroundColor = `${getColor}`;
//     }
// }
//
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// const changeText = document.getElementsByClassName('content_1');
// for (const changeTextElement of changeText) {
//     const getText = prompt('What text do I need to change it to? ');
//     changeTextElement.innerText = `${getText}`;
// }
//
//     l) отримати елементи p та змінити їм padding на 20px
//
// const changePadding = document.getElementsByTagName('p');
// for (const changePaddingElement of changePadding) {
//     changePaddingElement.style.padding = '20px';
// }
//
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// const changeText = document.getElementsByClassName('text2');
// for (const changeTextElement of changeText) {
//     changeTextElement.innerText = 'June(Feb)-2021';
// }
