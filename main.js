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
