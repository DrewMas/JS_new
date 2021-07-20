// HOME WORK
//
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let random = function (amount) {
//     let randomArr = [];
//     for (let i = 0; i < amount; i++) {
//         randomArr.push(Math.round(Math.random() * 100));
//     }
//     return randomArr;
// }
// console.log(random(10));
//
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// let random = function (min, max, length) {
//     let randomArr = [];
//     for (let i = 0; i < length; i++) {
//         randomArr.push(Math.round(Math.random() * (max - min) + min));
//     }
//     return randomArr;
// }
// console.log(random(1, 10, 10));
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let arr = random(1,10,10);
//     arr.sort((a, b) => {
//         return a - b;
//     });
// console.log(arr);
// //
// arr.sort((a, b) => {
//     return b-a;
// });
// console.log(arr);
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
//
// let filter = random(1, 10, 10).filter(value => {
//     return value % 2 === 0;
// });
// console.log(filter);
//
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
// let arr = random(1, 10, 10).map(value => {
//     return value.toString();
// });
// console.log(arr);
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User(5, 'Harry', 'Maguire', 'hm5@gmail.com', +44123456789),
//     new User(6, 'Paul', 'Pogba', 'pp6@gmail.com', +44789456126),
//     new User(1, 'David', 'De Gea', 'dd1@gmail.com', +44454564843),
//     new User(10, 'Marcus', 'Rashford MBE', 'mr10@gmail.com', +44785425888),
//     new User(8, 'Bruno', 'Fernandes', 'bf8@gmail.com', +44125478874),
//     new User(7, 'Edinson', 'Cavani', 'ec7@gmail.com', +444564864315),
//     new User(9, 'Antony', 'Martial', 'am9@gmail.com', +444843513484),
//     new User(3, 'Luke', 'Shaw', 'ls3@gmail.com', +448764687348),
//     new User(2, 'Aaron', 'Wan-Bissaka', 'awb2@gmail.com', +4425138438458),
//     new User(4, 'Scott', 'McTominay', 'smct4@gmail.com', +445436843843),
//
// ];
// // Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
//
//
//     let filterSort = users.filter(value => {
//             return value.id % 2 === 0
//         }
//     ).sort((a, b) => {
//         return a.id - b.id;
//     })
// console.log(filterSort);

// CLASS WORK
//
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = [order];
//     }
// }
//
// let clients = [
//     new Client(1, 'Harry', 'Potter', 'hp@gmail.com', +4435434543, ['beer', 'egs', 'bread']),
//     new Client(2, 'Ron', 'Weasley ', 'rw@gmail.com', +4453436438, ['vodka']),
//     new Client(3, 'Hermione ', 'Granger', 'hg@gmail.com', +4435438438, ['whiskey', 'cheese']),
// ];
//
// let sort = clients.sort((a, b) => {
//     return a.order[0].length - b.order[0].length;
// });
//
// console.log(sort);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, manufacturer, year, speed, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log('їдемо зі швидкістю', this.speed, 'на годину');
//     }
//     this.info = function () {
//         console.log('Model is -', this.model, 'Manufacturer is -', this.manufacturer, 'Year is -', this.year, 'Max speed -', this.speed, 'Engine volume -', this.volume);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.speed += newSpeed;
//         console.log(this.speed);
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
//
//
// let bmw = new Car('328', 'BMW', 2005, 220, 2.8);
// bmw.addDriver('Ivan');
// console.log(bmw);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(50);
// bmw.changeYear(2010);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// class Car {
//     constructor(model, manufacturer, year, speed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//         this.addDriver();
//     }
//
//     drive() {
//         console.log('їдемо зі швидкістю', this.speed, 'на годину');
//     }
//
//     info() {
//         console.log('Model is -', this.model, 'Manufacturer is -', this.manufacturer, 'Year is -', this.year, 'Max speed -', this.speed, 'Engine volume -', this.volume);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed += newSpeed;
//         console.log(this.speed);
//     }
//
//     changeYear(newValue){
//         this.year += newValue;
//         console.log(this.year);
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let bmw = new Car('328', 'BMW', 2005, 220, 2.8);
// bmw.info();
// bmw.increaseMaxSpeed(10);
// bmw.changeYear(2010);
// bmw.drive();
// bmw.addDriver('Petro');
// console.log(bmw);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Sinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let anna = new Sinderella('Anna', 23, 38);
// let maria = new Sinderella('Maria', 22, 37);
// let tanya = new Sinderella('Tanya', 21, 39);
// let vika = new Sinderella('Vika', 20, 37);
// let olena = new Sinderella('Olena', 19, 40);
// let ira = new Sinderella('Ira', 18, 41);
// let katya = new Sinderella('Katya', 17, 37);
// let nastya = new Sinderella('Nastya', 16, 38);
// let karina = new Sinderella('Karina', 15, 36);
// let solomiya = new Sinderella('Solomiya', 14, 37);
//
// let sinderellas = [anna, maria, tanya, vika, olena, ira, katya, nastya, karina, solomiya];
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let prince = new Prince('Petro', 25, 36);
//
// for (let i = 0; i < sinderellas.length; i++) {
//     if (sinderellas[i].footSize === prince.shoeSize) {
//         console.log(`With Prince ${prince.name} should be ${sinderellas[i].name}`);
//     }
// }
