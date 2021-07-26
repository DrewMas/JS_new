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

// ADDITIONAL
//
//- Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//
// const form = document.forms.infoForm;
// const name = form.name;
// const btn = form.submit;
//
// btn.onclick = (ev)=>{
//     console.log(name.value);
//     localStorage.setItem('name', name.value);
// }
//
//
// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
//
//
//
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
// let addressArr = [];
// for (const user of users) {
//     addressArr.push(user.address);
// }
// console.log(addressArr);
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//
// for (const user of users) {
//     let userDiv = document.createElement('div');
//     for (const el in user) {
//         userDiv.innerHTML = `${user.name} - ${user.age} - ${JSON.stringify(user.address)}`;
//
//         document.body.appendChild(userDiv)
//     }
//
//
// }
// for (const user of users) {
//     let userDiv = document.createElement('div');
//
//     userDiv.innerHTML = `Name - ${user.name}<br> Age - ${user.age}<br> Address - ${JSON.stringify(user.address)}`;
//     userDiv.style.margin = '10px';
//     userDiv.style.backgroundColor = '#f0ffcf';
//     userDiv.style.width = '600px';
//     userDiv.style.border = '2px solid black';
//
//     document.body.appendChild(userDiv)
// }
//
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//
// for (const user of users) {
//     const divka = document.createElement('div');
//     document.body.appendChild(divka);
//     for (const item in user) {
//         const divochka = document.createElement('div');
//         divochka.innerText = `${item}: ${JSON.stringify(user[item])}`;
//         divka.appendChild(divochka);
//     }
// }
//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// for (const user of users) {
//     const wrapper = document.createElement('div');
//     const userName = document.createElement('div');
//     const userAge = document.createElement('div');
//     const userStatus = document.createElement('div');
//     const userAddress = document.createElement('div');
//
//     userName.innerText = `${user.name}`;
//     userAge.innerText = `${user.age}`;
//     userStatus.innerText = `${user.status}`;
//
//     for (const item in user.address) {
//         const userAddressItem = document.createElement('div');
//         userAddressItem.innerText = `${user.address[item]}`;
//
//         userAddress.appendChild(userAddressItem);
//     }
//     document.body.appendChild(wrapper);
//     wrapper.appendChild(userName);
//     wrapper.appendChild(userAge);
//     wrapper.appendChild(userStatus);
//     wrapper.appendChild(userAddress);
// }
for (const items of users) {
    const div = document.createElement('div');
    document.body.append(div);

    for (const item in items) {
        const divka = document.createElement('div');
        divka.innerText = items[item];
        div.append(divka);

        if (item === `address`){
            for (const element in items) {
                const divochka = document.createElement('div');
                divochka.innerText = element;
                divka.append(divochka);
            }
        }
    }
}
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// const rules = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const list = document.createElement('ul');
//
// for (const rule of rules) {
//     let listItem = document.createElement('li');
//     listItem.appendChild(rule);
//     list.appendChild(listItem);
//     content.appendChild(list);
// }
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];