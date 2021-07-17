// HOME WORK 1
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template1.1
// */
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// document.write('<ul>');
// for (const item of listOfItems) {
//     document.write(`<li>${item}</li>`);
// }
// document.write('</ul>');
//
//
//
// /*
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// Шаблон застосувати до кожного об'єкта в масиві
// */
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// document.write('<div>');
// for (const char of simpsons) {
//     document.write(`${char.name} ${char.surname} - ${char.age} years <br/> ${char.info} <br/> <img src="${char.photo}" alt="" width="200px"> <hr/>`);
// }
// document.write('</div>')
//
// document.write('<div/>');
// for (const char of simpsons) {
//     document.write(`<h2>${char.name} ${char.surname}. Age is ${char.age}.</h2> </br> <p>${char.info}</p> </br> <img src="${char.photo}" alt="" width="200px"> `)
// }
// document.write('</div>');
// /*
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//     */
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// //
// //
// document.write(`<div>`);
//
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(`<div class="product-card">
//     <h3 class="product-title">${product.title}. Price - ${product.price} UAH</h3>
//     <img src="${product.image}" alt="" class="product-image">
// </div>`)
// }
//
// document.write(`<div/>`);

//HOME WORK 2
//
//
//*За допомогою циклу вивести всю інформацію про пости використовуючи шаблон Template 1.1.
//			* ЗА допомоги стилів побудувати структуру "сітки" по 5 об'єктів в лінію
//			* */
// let users = [
//     {
//         userId: 1,
//         id: 1,
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//         body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: 'qui est esse',
//         body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//         body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: 'eum et est occaecati',
//         body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
//     },
//     {
//         userId: 1,
//         id: 5,
//         title: 'nesciunt quas odio',
//         body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
//     },
//     {
//         userId: 1,
//         id: 6,
//         title: 'dolorem eum magni eos aperiam quia',
//         body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
//     },
//     {
//         userId: 1,
//         id: 7,
//         title: 'magnam facilis autem',
//         body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
//     },
//     {
//         userId: 1,
//         id: 8,
//         title: 'dolorem dolore est ipsam',
//         body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
//     },
//     {
//         userId: 1,
//         id: 9,
//         title: 'nesciunt iure omnis dolorem tempora et accusantium',
//         body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
//     },
//     {
//         userId: 1,
//         id: 10,
//         title: 'optio molestias id quia eum',
//         body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
//     },
//     {
//         userId: 2,
//         id: 11,
//         title: 'et ea vero quia laudantium autem',
//         body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
//     },
//     {
//         userId: 2,
//         id: 12,
//         title: 'in quibusdam tempore odit est dolorem',
//         body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
//     },
//     {
//         userId: 2,
//         id: 13,
//         title: 'dolorum ut in voluptas mollitia et saepe quo animi',
//         body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
//     },
//     {
//         userId: 2,
//         id: 14,
//         title: 'voluptatem eligendi optio',
//         body: 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
//     },
//     {
//         userId: 2,
//         id: 15,
//         title: 'eveniet quod temporibus',
//         body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
//     },
//     {
//         userId: 2,
//         id: 16,
//         title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
//         body: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'
//     },
//     {
//         userId: 2,
//         id: 17,
//         title: 'fugit voluptas sed molestias voluptatem provident',
//         body: 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo'
//     },
//     {
//         userId: 2,
//         id: 18,
//         title: 'voluptate et itaque vero tempora molestiae',
//         body: 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'
//     },
//     {
//         userId: 2,
//         id: 19,
//         title: 'adipisci placeat illum aut reiciendis qui',
//         body: 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas'
//     },
//     {
//         userId: 2,
//         id: 20,
//         title: 'doloribus ad provident suscipit at',
//         body: 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo'
//     },
//     {
//         userId: 3,
//         id: 21,
//         title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
//         body: 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'
//     },
//     {
//         userId: 3,
//         id: 22,
//         title: 'dolor sint quo a velit explicabo quia nam',
//         body: 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'
//     },
//     {
//         userId: 3,
//         id: 23,
//         title: 'maxime id vitae nihil numquam',
//         body: 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'
//     },
//     {
//         userId: 3,
//         id: 24,
//         title: 'autem hic labore sunt dolores incidunt',
//         body: 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt'
//     },
//     {
//         userId: 3,
//         id: 25,
//         title: 'rem alias distinctio quo quis',
//         body: 'ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio'
//     },
//     {
//         userId: 3,
//         id: 26,
//         title: 'est et quae odit qui non',
//         body: 'similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero'
//     },
//     {
//         userId: 3,
//         id: 27,
//         title: 'quasi id et eos tenetur aut quo autem',
//         body: 'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'
//     },
//     {
//         userId: 3,
//         id: 28,
//         title: 'delectus ullam et corporis nulla voluptas sequi',
//         body: 'non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum'
//     },
//     {
//         userId: 3,
//         id: 29,
//         title: 'iusto eius quod necessitatibus culpa ea',
//         body: 'odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores'
//     },
//     {
//         userId: 3,
//         id: 30,
//         title: 'a quo magni similique perferendis',
//         body: 'alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia'
//     },
//     {
//         userId: 4,
//         id: 31,
//         title: 'ullam ut quidem id aut vel consequuntur',
//         body: 'debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae'
//     },
//     {
//         userId: 4,
//         id: 32,
//         title: 'doloremque illum aliquid sunt',
//         body: 'deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime'
//     },
//     {
//         userId: 4,
//         id: 33,
//         title: 'qui explicabo molestiae dolorem',
//         body: 'rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod'
//     },
//     {
//         userId: 4,
//         id: 34,
//         title: 'magnam ut rerum iure',
//         body: 'ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis'
//     },
//     {
//         userId: 4,
//         id: 35,
//         title: 'id nihil consequatur molestias animi provident',
//         body: 'nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit'
//     },
//     {
//         userId: 4,
//         id: 36,
//         title: 'fuga nam accusamus voluptas reiciendis itaque',
//         body: 'ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore'
//     },
//     {
//         userId: 4,
//         id: 37,
//         title: 'provident vel ut sit ratione est',
//         body: 'debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui'
//     },
//     {
//         userId: 4,
//         id: 38,
//         title: 'explicabo et eos deleniti nostrum ab id repellendus',
//         body: 'animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure'
//     },
//     {
//         userId: 4,
//         id: 39,
//         title: 'eos dolorem iste accusantium est eaque quam',
//         body: 'corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex'
//     },
//     {
//         userId: 4,
//         id: 40,
//         title: 'enim quo cumque',
//         body: 'ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam'
//     },
//     {
//         userId: 5,
//         id: 41,
//         title: 'non est facere',
//         body: 'molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe'
//     },
//     {
//         userId: 5,
//         id: 42,
//         title: 'commodi ullam sint et excepturi error explicabo praesentium voluptas',
//         body: 'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut'
//     },
//     {
//         userId: 5,
//         id: 43,
//         title: 'eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis',
//         body: 'similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis'
//     },
//     {
//         userId: 5,
//         id: 44,
//         title: 'optio dolor molestias sit',
//         body: 'temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae'
//     },
//     {
//         userId: 5,
//         id: 45,
//         title: 'ut numquam possimus omnis eius suscipit laudantium iure',
//         body: 'est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem'
//     },
//     {
//         userId: 5,
//         id: 46,
//         title: 'aut quo modi neque nostrum ducimus',
//         body: 'voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid'
//     },
//     {
//         userId: 5,
//         id: 47,
//         title: 'quibusdam cumque rem aut deserunt',
//         body: 'voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate'
//     },
//     {
//         userId: 5,
//         id: 48,
//         title: 'ut voluptatem illum ea doloribus itaque eos',
//         body: 'voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit'
//     },
//     {
//         userId: 5,
//         id: 49,
//         title: 'laborum non sunt aut ut assumenda perspiciatis voluptas',
//         body: 'inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut'
//     },
//     {
//         userId: 5,
//         id: 50,
//         title: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
//         body: 'error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur'
//     },
//     {
//         userId: 6,
//         id: 51,
//         title: 'soluta aliquam aperiam consequatur illo quis voluptas',
//         body: 'sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem'
//     },
//     {
//         userId: 6,
//         id: 52,
//         title: 'qui enim et consequuntur quia animi quis voluptate quibusdam',
//         body: 'iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum'
//     },
//     {
//         userId: 6,
//         id: 53,
//         title: 'ut quo aut ducimus alias',
//         body: 'minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique'
//     },
//     {
//         userId: 6,
//         id: 54,
//         title: 'sit asperiores ipsam eveniet odio non quia',
//         body: 'totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia'
//     },
//     {
//         userId: 6,
//         id: 55,
//         title: 'sit vel voluptatem et non libero',
//         body: 'debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit'
//     },
//     {
//         userId: 6,
//         id: 56,
//         title: 'qui et at rerum necessitatibus',
//         body: 'aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi'
//     },
//     {
//         userId: 6,
//         id: 57,
//         title: 'sed ab est est',
//         body: 'at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est'
//     },
//     {
//         userId: 6,
//         id: 58,
//         title: 'voluptatum itaque dolores nisi et quasi',
//         body: 'veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam'
//     },
//     {
//         userId: 6,
//         id: 59,
//         title: 'qui commodi dolor at maiores et quis id accusantium',
//         body: 'perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt'
//     },
//     {
//         userId: 6,
//         id: 60,
//         title: 'consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere',
//         body: 'asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis'
//     },
//     {
//         userId: 7,
//         id: 61,
//         title: 'voluptatem doloribus consectetur est ut ducimus',
//         body: 'ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit'
//     },
//     {
//         userId: 7,
//         id: 62,
//         title: 'beatae enim quia vel',
//         body: 'enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio'
//     },
//     {
//         userId: 7,
//         id: 63,
//         title: 'voluptas blanditiis repellendus animi ducimus error sapiente et suscipit',
//         body: 'enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta'
//     },
//     {
//         userId: 7,
//         id: 64,
//         title: 'et fugit quas eum in in aperiam quod',
//         body: 'id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui'
//     },
//     {
//         userId: 7,
//         id: 65,
//         title: 'consequatur id enim sunt et et',
//         body: 'voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur'
//     },
//     {
//         userId: 7,
//         id: 66,
//         title: 'repudiandae ea animi iusto',
//         body: 'officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe'
//     },
//     {
//         userId: 7,
//         id: 67,
//         title: 'aliquid eos sed fuga est maxime repellendus',
//         body: 'reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae'
//     },
//     {
//         userId: 7,
//         id: 68,
//         title: 'odio quis facere architecto reiciendis optio',
//         body: 'magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit'
//     },
//     {
//         userId: 7,
//         id: 69,
//         title: 'fugiat quod pariatur odit minima',
//         body: 'officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a'
//     },
//     {
//         userId: 7,
//         id: 70,
//         title: 'voluptatem laborum magni',
//         body: 'sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore'
//     },
//     {
//         userId: 8,
//         id: 71,
//         title: 'et iusto veniam et illum aut fuga',
//         body: 'occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis'
//     },
//     {
//         userId: 8,
//         id: 72,
//         title: 'sint hic doloribus consequatur eos non id',
//         body: 'quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit'
//     },
//     {
//         userId: 8,
//         id: 73,
//         title: 'consequuntur deleniti eos quia temporibus ab aliquid at',
//         body: 'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut'
//     },
//     {
//         userId: 8,
//         id: 74,
//         title: 'enim unde ratione doloribus quas enim ut sit sapiente',
//         body: 'odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora'
//     },
//     {
//         userId: 8,
//         id: 75,
//         title: 'dignissimos eum dolor ut enim et delectus in',
//         body: 'commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem'
//     },
//     {
//         userId: 8,
//         id: 76,
//         title: 'doloremque officiis ad et non perferendis',
//         body: 'ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio'
//     },
//     {
//         userId: 8,
//         id: 77,
//         title: 'necessitatibus quasi exercitationem odio',
//         body: 'modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident'
//     },
//     {
//         userId: 8,
//         id: 78,
//         title: 'quam voluptatibus rerum veritatis',
//         body: 'nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus'
//     },
//     {
//         userId: 8,
//         id: 79,
//         title: 'pariatur consequatur quia magnam autem omnis non amet',
//         body: 'libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos'
//     },
//     {
//         userId: 8,
//         id: 80,
//         title: 'labore in ex et explicabo corporis aut quas',
//         body: 'ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident'
//     },
//     {
//         userId: 9,
//         id: 81,
//         title: 'tempora rem veritatis voluptas quo dolores vero',
//         body: 'facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut'
//     },
//     {
//         userId: 9,
//         id: 82,
//         title: 'laudantium voluptate suscipit sunt enim enim',
//         body: 'ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic'
//     },
//     {
//         userId: 9,
//         id: 83,
//         title: 'odit et voluptates doloribus alias odio et',
//         body: 'est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam'
//     },
//     {
//         userId: 9,
//         id: 84,
//         title: 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut',
//         body: 'sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio'
//     },
//     {
//         userId: 9,
//         id: 85,
//         title: 'dolore veritatis porro provident adipisci blanditiis et sunt',
//         body: 'similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione'
//     },
//     {
//         userId: 9,
//         id: 86,
//         title: 'placeat quia et porro iste',
//         body: 'quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio'
//     },
//     {
//         userId: 9,
//         id: 87,
//         title: 'nostrum quis quasi placeat',
//         body: 'eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est'
//     },
//     {
//         userId: 9,
//         id: 88,
//         title: 'sapiente omnis fugit eos',
//         body: 'consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed'
//     },
//     {
//         userId: 9,
//         id: 89,
//         title: 'sint soluta et vel magnam aut ut sed qui',
//         body: 'repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est'
//     },
//     {
//         userId: 9,
//         id: 90,
//         title: 'ad iusto omnis odit dolor voluptatibus',
//         body: 'minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis'
//     },
//     {
//         userId: 10,
//         id: 91,
//         title: 'aut amet sed',
//         body: 'libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat'
//     },
//     {
//         userId: 10,
//         id: 92,
//         title: 'ratione ex tenetur perferendis',
//         body: 'aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui'
//     },
//     {
//         userId: 10,
//         id: 93,
//         title: 'beatae soluta recusandae',
//         body: 'dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla'
//     },
//     {
//         userId: 10,
//         id: 94,
//         title: 'qui qui voluptates illo iste minima',
//         body: 'aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis'
//     },
//     {
//         userId: 10,
//         id: 95,
//         title: 'id minus libero illum nam ad officiis',
//         body: 'earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt'
//     },
//     {
//         userId: 10,
//         id: 96,
//         title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
//         body: 'in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut'
//     },
//     {
//         userId: 10,
//         id: 97,
//         title: 'quas fugiat ut perspiciatis vero provident',
//         body: 'eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam'
//     },
//     {
//         userId: 10,
//         id: 98,
//         title: 'laboriosam dolor voluptates',
//         body: 'doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores'
//     },
//     {
//         userId: 10,
//         id: 99,
//         title: 'temporibus sit alias delectus eligendi possimus magni',
//         body: 'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia'
//     },
//     {
//         userId: 10,
//         id: 100,
//         title: 'at nam consequatur ea labore ea harum',
//         body: 'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut'
//     }
// ];
// //
// //
// document.write(`<div class="wrap">`);
// for (let i = 0; i < users.length; i++) {
//     document.write(`<div class="post-card">
// <h3>${users[i].userId} - ${users[i].title}</h3>
// <p>${users[i].body}</p>
// </div>`)
// }
// document.write(`</div>`);
//
//
// document.write(`<div class="wrap">`);
// for (const user of users) {
//     let {userId, title,body} = user;
//     document.write(`<div class="post-card">
// // <h3>${userId} - ${title}</h3>
// // <p>${body}</p>
// // </div>`)
// }
// document.write(`</div>`);

// HOME WORK 3
//
//
//*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
//			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
//			*
//			* */
//
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Robel-Corkery',
//             catchPhrase: 'Multi-tiered zero tolerance productivity',
//             bs: 'transition cutting-edge web services'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Johns Group',
//             catchPhrase: 'Configurable multimedia task-force',
//             bs: 'generate enterprise e-tailers'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];
// //
// //
// // document.write(`<div class="user-box">`);
// // for (let i = 0; i < usersList.length; i++) {
// //     document.write(`<div class="user-block">
// //         <h2>${usersList[i].id} - ${usersList[i].name} - ${usersList[i].username}</h2>
// //         <h3>${usersList[i].email} - ${usersList[i].phone}</h3>
// //         <div class="address-block">
// //         <p>City - ${usersList[i].address.city}</p>
// //         <p>Street - ${usersList[i].address.street}</p>
// //         <p>Suite - ${usersList[i].address.suite}</p>
// //         <p>Zip code - ${usersList[i].address.zipcode}</p>
// // </div>
// // </div>`);
// // }
// // document.write(`</div>`);
//
// document.write(`<div class="user-box">`);
// for (const info of usersList) {
//     let {id, name, username, email, phone, address: {city, street, suite, zipcode}} = info;
//     document.write(`<div class="user-block">
//         <h2>${id} - ${name} - ${username}</h2>
//         <h3>${email} - ${phone}</h3>
//         <div class="address-block">
//         <p>City - ${city}</p>
//         <p>Street - ${street}</p>
//         <p>Suite - ${suite}</p>
//         <p>Zip code - ${zipcode}</p>
// </div>
// </div>`);
// }
// document.write(`</div>`);

// CLASS WORK
//
//
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let arr1 = [1,2,3,4,5];
// for (const number of arr1) {
//     console.log(number);
// }
//
// let arr2 = ['one', 'two', 'thee', 'four', 'five'];
// for (const string of arr2) {
//     console.log(string);
// }
//
// let arr3 = [1, 'one', true, 2, false];
// for (const el of arr3) {
//     console.log(el);
// }
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) document.write(`<div>Hello world</div>`);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) document.write(`<div> Hi there it's number ${i}</div>`);
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hi there</h1>`)
//     i++;
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hi there, it's number ${i}</h1>`)
//     i++;
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of arr) {
//     console.log(number);
// }
//
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['hello', 'world', 'okten', 'cool', 'school', 'I', 'recommend', 'to', 'try', '!!!'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arr = [1, true, 5, false, 8, 'string', 0, 'com', 7, 'true'];
//
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let arr = [1, true, 5, false, 8, 'string', 0, 'com', 7, 'true'];
// for (const arrElement of arr) {
//     if (typeof arrElement === "boolean")
//         console.log(arrElement);
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let arr = [1, true, 5, false, 8, 'string', 0, 'com', 7, 'true'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number")
//         console.log(arr[i]);
// }
//
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = [1, true, 5, false, 8, 'string', 0, 'com', 7, 'true'];
// let i = 0;
// while (i < arr.length) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
//     i++;
// };
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'world';
// arr[2] = 32;
// arr[3] = true;
// arr[4] = 123;
// arr[5] = false;
// arr[6] = 'qwerty';
// arr[7] = 23;
// arr[8] = 'asdf';
// arr[9] = true;
//
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
//
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }
//
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }
//
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }
//
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }
//
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i%2===1){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
let usersWithCities = [];

// for (const element1 of usersWithId) {
//     for (const element2 of citiesWithId) {
//         if (element1.id === element2.user_id){
//             element1.address = element2;
//             usersWithCities.push(element1);
//         }
//     }
// }
// console.log(usersWithCities);

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i].address = citiesWithId[j];
            usersWithCities.push(usersWithId[i]);
        }
    }
}
console.log(usersWithCities);