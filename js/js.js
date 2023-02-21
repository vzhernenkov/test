// // 1
// function firstFunc(arr, fn) {
//   let newString = '';
//   for (let i = 0; i < arr.length; i++) {
//     newString += fn(arr[i]);
//   }
//   return `New value: ${newString}`;
// }

// function handler1(el) {
//   el = el[0].toUpperCase() + el.slice(1);
//   return el;
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//   el *= 10;
//   return `${el},`;
// }

// console.log(firstFunc([10, 20, 30], handler2) )

// function handler3(el) {
//   return `${el.name} is ${el.age},`
// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//   let reString = '';
//   for (let i = el.length - 1; i >= 0; i--) {
//     reString += el[i];
//   }
//   return reString;
// }

// console.log(firstFunc(['abs', '123'], handler4));

// function every(arr, fn) {
//   if (!Array.isArray(arr)) return new Error('The first argument expected as array');
//   if (!fn || typeof fn !== 'function') return new Error('The second argument expected as function');

//   for (let i = 0; i < arr.length; i++) {
//     if (!fn(arr[i], i, arr)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(every([1,2], function (el) {
//   return el < 5;
// }))

// 1

// function getSquare() {
//   let square = this.width * this.height;
//   console.log(square);
// }


// const rectangle = {
//   width: 5,
//   height: 10,
//   getSquare,
// }

// rectangle.getSquare();

// // 2

// function getPrice() {
//   console.log(this.price);
// }

// function getPriceWithDiscount () {
//   console.log(this.price - this.price * (parseFloat(this.discount)/100));
// }

// const price = {
//   price: 10,
//   discount: '15%',
//   getPrice,
//   getPriceWithDiscount,
//   };


//   price.getPrice(); // 10
//   price.getPriceWithDiscount(); // 8.5

  // 3

// function upper() {
//   this.height = this.height + 1;
//   return this.height;
// }

// const obj = {
//   height: 10,
//   upper,
// }

// console.log(obj.height);
// obj.upper();
// console.log(obj.height);

// 4 

// const numerator = {
//   value: 1,
//   double: function () {
//     this.value = this.value * 2;
//     return this
//   },
//   plusOne: function () {
//     this.value = this.value + 1;
//     return this
//   },
//   minusOne: function () {
//     this.value = this.value - 1;
//     return this
//   },
//   }
//   numerator.double().plusOne().plusOne().minusOne();
  
//   console.log(numerator.value); // 3

  //5
  
// function totalPrice() {
//     return this.price * this.count;
// }

// let shopCart = {
//   price: 100,
//   count: 5,
//   totalPrice,
// }

 // 6

// let details = {
//   price: 10,
//   count: 14,
// }



// console.log(shopCart.totalPrice());



// details.totalPrice = shopCart.totalPrice;

// console.log(totalPrice.call(details));

// 7

// let sizes = {width: 5, height: 10},

// getSquare = function () {return this.width * this.height};

// console.log(getSquare.call(sizes));

//8

// let element = {
//   height: 25,
//   getHeight: function () { return this.height; }
// };

// let getElementHeight = element.getHeight.bind(element);

// console.log(getElementHeight());

// Skillbox 6.1

// let objects = [
//   { name: 'Василий', surname: 'Васильев' },
//   { name: 'Иван', surname: 'Иванов' },
//   { name: 'Пётр', surname: 'Петров' }
// ]

// function filterUsers (arr, key, username) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//    if (arr[i][key] == username) {
//      res.push(arr[i]);
//    }
//   };
//   return res;
// }

// console.log(filterUsers(objects, 'name', 'Василий'));

//Skillbox 6.2


// let objects = [
//   { value: 'Василий', label: 'Васильев' },
//   { value: 'Иван', label: 'Иванов' },
//   { value: 'Пётр', label: 'Петров' }
// ]


// Udemy arrow function

// function sum() {
//   const params = Array.prototype.slice.call(arguments);
  
//   if (!params.length) return 0;
  
//   return params.reduce((prev, next) => prev + next);
//   }
  
// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum()); // 0

// let convertToObject = (num) => ({value: num,isOdd: Boolean(num % 2)});

// console.log(convertToObject(5));

//Udemy Arrays methods

// let arrin = [1,2,3,5,8,9,10];
// let arrout = arrin.map(num => ({
//   digit: num,
//   odd: Boolean(num % 2)
// }));

// console.log(arrout);

// let arr2 = [12, 4, 50, 1, 0, 18, 40];

// arr2.some(el => el == 0);


// let arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];

// console.log(arr3.every(el => el.length > 3));

// let arr4 = [{char:"a",index:12}, 
// {char:"w",index:8}, 
// {char:"Y",index:10}, 
// {char:"p",index:3}, 
// {char:"p",index:2},
// {char:"N",index:6}, 
// {char:" ",index:5}, 
// {char:"y",index:4}, 
// {char:"r",index:13}, 
// {char:"H",index:0},
// {char:"e",index:11}, 
// {char:"a",index:1}, 
// {char:" ",index:9}, 
// {char:"!",index:14}, 
// {char:"e",index:7}];

// const initialValue = [
//   {char:"a",index:12},
//   {char:"w",index:8},
//   {char:"Y",index:10},
//   {char:"p",index:3},
//   {char:"p",index:2},
//   {char:"N",index:6},
//   {char:" ",index:5},
//   {char:"y",index:4},
//   {char:"r",index:13},
//   {char:"H",index:0},
//   {char:"e",index:11},
//   {char:"a",index:1},
//   {char:" ",index:9},
//   {char:"!",index:14},
//   {char:"e",index:7}
// ];

// function getStr(arr) {
//   const cloned = arr.slice();

//   return cloned
//     .sort((prev, next) => prev.index - next.index)
//     .reduce((acc, { char }) => acc + char, '');
// }

// console.log(getStr(initialValue))

// function stringCreator (arr) {
//   let str = '';
//   arr.sort((prev, next) => prev.index - next.index).forEach((el) => str += el.char);
//   return str;
// }

// console.log(stringCreator(arr4));

// let arr5 = [ [14, 45], [1], ['a', 'c', 'd'] ];

// console.log(arr5.sort((prev, next) => prev.length - next.length));

// let arr6 = [
//   {cpu: 'intel', info: {cores:2, сache: 3}},
//   {cpu: 'intel', info: {cores:4, сache: 4}},
//   {cpu: 'amd', info: {cores:1, сache: 1}},
//   {cpu: 'intel', info: {cores:3, сache: 2}},
//   {cpu: 'amd', info: {cores:4, сache: 2}}
//   ];

// console.log(arr6.sort((prev, next) => prev.info.cores - next.info.cores));

// let products = [
//   {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//   {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//   {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//   {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
//   ];

// function filterCollection (arr, a, b) {
//   let arrout = arr.filter((el) => el.price >= a && el.price <= b);
//   arrout.sort((prev, next) => prev.price - next.price);
//   return arrout;
// }
  
// console.log(filterCollection(products, 15, 30));

// const fill = (arraySize, value) => {
//   let newArr = [];
//   do {newArr.push(value)} while (newArr.length < arraySize);
//   return newArr;
//  }
 
//  const data = 3;
//  const valueToFill = 'a';
//  console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

//  const reverse = (array) => {
//   let newArr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArr.push(array[i]);
//   }
//   return newArr
//  }
 
//  const data = [1, 2, 3];
//  console.log(reverse(data)); // [3, 2, 1

// const compact = (array) => {
//   return array.filter(el => el > 0 && typeof el == 'number');
//  }
 
//  const data = [0, 1, true, 2, undefined, '', 3, null];
//  console.log(compact(data)) // [1, 2, 3]

// fromPairs = (array) => array.reduce((acc, value) => {
//   if (Array.isArray(value)) {
//     acc[value[0]] = value[1];
//   }
//   return acc;
// }, {});
 
//  const data = [['a', 1], ['b', 2]];
//  console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

//  const without = (array, ...args) => {
//   return array.filter(el => !args.includes(el))
//  }
 
//  const data = [1, 2, 3, 1, 2];
//  console.log(without(data, 1, 2)); // [3]

//  const unique = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (newArr.includes(array[i])) {
//       continue
//     } else {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
//  }
 
//  const data = [1, 2, 1, 2, 3];
//  console.log(unique(data)); // [1, 2, 3]

//  const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   const compared = firstArray.map((el, id) => secondArray[id] === el);

//   return !compared.includes(false);
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

// fromPairs = (array) => array.reduce((acc, value) => {
//   if (Array.isArray(value)) {
//     acc[value[0]] = value[1];
//   }
//   return acc;
// }, {});

// fromPairs(arr2);

// const chunk = (array, size) => {
//   const chunkedArr = [];
//   let index = 0;
//   while (index < array.length) {
//     chunkedArr.push(array.slice(index, size + index));
//     index += size;
//   }
//   return chunkedArr;
//  };
 
//  const data = [1, 2, 3, 4, 5, 6, 7];
//  console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
//console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// TIMER

// let button = document.querySelector(".timer_button");

// let el = document.querySelector(".timer");

// button.addEventListener('click', function () {
//   let startPoint = document.querySelector(".input_timer").value;
//   el.textContent = startPoint;
//   let timerStart = setInterval(function () {
//     if (startPoint <= 0) {
//       clearInterval(timerStart);
//       alert ('Время закончилось');
//     }
//     else {
//       el.textContent = startPoint;
//     }
//     --startPoint;
//   button.addEventListener('click', function () {
//     clearInterval(timerStart);
//   })
//   }, 1000);
// });


// INPUT SKILLBOX

// let space = document.body ;

// let inputField = document.createElement('input');
// inputField.id = 'input';

// let tittle = document.createElement('h2');
// tittle.id = 'tittle';


// space.appendChild(inputField);
// space.appendChild(tittle);

// inputField.addEventListener('input', function () {
//   let innerText = setTimeout(function () {
//     let text = document.getElementById('input').value;
//     tittle.textContent = text;
//   } ,300)
//   inputField.addEventListener('input', function () {
//     clearTimeout(innerText);
//   })
// });

// UDEMY

// const minus = (a) => (b) => {
// if (typeof a !== "number") a = 0;
// if (typeof b !== "number") b = 0;
// console.log (a - b); 
// }

// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0


// function multiplyMaker (num) {
//   let i = num;
//   return function multy (num2) {
//     i = i * num2;
//     return i;
//   }
// }

// const multiply = multiplyMaker(2);


// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

// function module () {
//   let newstr = '';

//   return {
//     builder (str) {
//       if (str == "") {newstr = ''}
//       else if (typeof str == 'number') {newstr = toString(str)}
//       else {newstr = str};
//       return newstr;
//     },
//     getString () {
//       return newstr;
//     }, 
//     getLength () {
//       return newstr.length;
//     },
//     replacer () {
//       newstr = newstr.split('').reverse().join('');
//       return newstr;
//     }
//   }
// }

// const stringer = module();

// stringer.builder('polina');

// console.log(stringer.replacer());

// console.log(stringer.replacer());

// console.log(stringer.getLength());

// function calc () {
  
//   let res;

//   return {
//     builder (num) {
//       if (typeof str == 'string') {alert ('Вы ввели текст')}
//       else {res = num};
//       return this;
//     },
//     summ (num) {
//       res += num;
//       return this;
//     },
//     minus (num) {
//       res -= num;
//       return this;
//     },
//     multiply (num) {
//       res *= num;
//       return this;
//     },
//     divide (num) {
//       res /= num;
//       return this;
//     },
//     powd (num) {
//       res = Math.pow(res, num);
//       return this;
//     },
//     getresult () {
//       res = res.toFixed(2);
//       return res;
//     }, 
//   }
// }

// const calculator = calc();

// console.log(calculator.builder(10).minus(2).powd(2).getresult());

// let arr = ['a', 'b', 'c' , 'd', 'e', 'f'];

// function scissor (newArr) {
//   const [y, ...other] = newArr;
//   return {
//     first: y,
//     second: other
//   }
// }

// console.log(scissor(arr));

// const organisation = {
//   name: 'Google',
//   info: { 
//     employees: ['Vlad', 'Olga'], 
//     partners: ['Microsoft', 'Facebook', 'Xing'] 
//   }
//   };


// function getinfo (obj) {
//   const { name = 'Unknow', info: { partners: [a, b] }} = obj;
//   return `Name: ${name} Organisation: ${a} ${b}`;
// }

// console.log(getinfo(organisation));

// let user = {
//   "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
//   "isActive": false,
//   "balance": "$2,474.46",
//   "age": 30,
//   "eyeColor": "blue",
//   "name": "Tameka Maxwell",
//   "gender": "female",
//   "company": "ENOMEN",
//   "email": "tamekamaxwell@enomen.com",
//   "phone": "+1 (902) 557-3898",
//   "tags": [
//     "aliquip",
//     "anim",
//     "exercitation",
//     "non",
//   ],
//   "friends": [
//     {
//       "id": 0,
//       "name": "Barber Hicks"
//     },
//     {
//       "id": 1,
//       "name": "Santana Cruz"
//     },
//     {
//       "id": 2,
//       "name": "Leola Cabrera"
//     }
//   ],
// };

// Используя деструктуризацию получить значения из следующих полей
// 1. name,  balance, email
// 2. из массива tags получить первый и последний элемент
// 3. из массива friends получить значение поле name из первого элемента массива
// Если какое то из полей не имеет значения то подставить значение по умолчанию.


// const {name, balance, email} = user;

// const { tags: [a, , , b] } = user;

// const { friends: [ z, f] } = user;

// const { name: friendName} = z;

// const { tags } = user;

// const { friends } = user;

// const arr = [...tags, ...friends];

// console.log(name, balance, email, a, b, friendName, arr);

// let arr = ['s', 'a', 'l', 'u', 't'];

// const res = arr.reduce((acc, el) => acc + el);

// console.log(res)


// const chunk = (array, size) => {
//   const chunkedArr = [];
//   let index = 0;
//   while (index < array.length) {
//     chunkedArr.push(array.slice(index, size + index));
//     index += size;
//   }
//   return chunkedArr;
// };
 
//  const data = [1, 2, 3, 4, 5, 6, 7];
//  console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
//  console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// let input = [
//   ['usd', 'buy', 10000],
//   ['usd', 'sell', 5000],
//   ['gpb', 'buy', 9000],
//   ['eur', 'sell', 7000],
//   ['uah', 'buy', 10000],
//   ['usd', 'sell', 25000]
// ]

// res = input.reduce((accum, [currency, operation, sum]) => {
//   let [buy = 0, sell = 0] = accum[currency] || [];

//   operation === 'buy' ? (buy += sum) : (sell += sum);

//   accum[currency] = [buy, sell];
  
//   return accum;
// }, {})


// let a = 10;

// function fibo (b) {
//   let base = [0, 1];
//   let el = 0;
//   for (let i = 1; i <= b; i++) 
//     el = base[i] + base[i-1];
//     base.push(el);
//   }
//   return base[b - 1];
// }

// console.log(fibo(a));

// let space = document.body;
// let firstDiv = document.querySelector('div');

// console.log(document.querySelector('body'));
// console.log(document.querySelector('head'));

// console.log(space.children);

// console.log(firstDiv.children);

// const div = document.body.firstElementChild;
// При помощи оператора ... мы получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div. 
// const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
// console.log(filteredArticles);

// function isParent (parent, child) {
// // Проверяем что переданные элементы являются HTML элементами
// if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

// let isParent = false;
// let currentParent = child.parentElement;

// while(currentParent) {
//   isParent = currentParent === parent;
//   if (isParent) {
//     break;
//   }

//   currentParent = currentParent.parentElement;
// }
// console.log(isParent);
// return isParent;
// }

// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

// let link = [...document.links].filter(el => !el.closest('ul'));


// console.log(link)

// let p = document.querySelector('p').textContent;

// console.log(p);

// let a = document.querySelector('article');

// function obj (el) {
//   let typeEl = el.nodeType;
//   let tagName = el.tagName;
//   let childElements = [...el.children].length;

//   return {
//     type: typeEl,
//     tag: tagName,
//     children: childElements,
//   };
// };

// console.log(obj(a));

// let ul = document.querySelector('ul');

// function getTextFromUl (el) {
//   let list = [...el.children];
//   let res = [];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].firstElementChild.tagName === 'A') {
//       res.push(list[i].firstElementChild.textContent);
//     }
//   }
//   return res;
// }

// console.log(getTextFromUl(ul));

// const list = document.querySelector('ul');

// function getTextFromUl(ul) {
//   if (!(ul instanceof HTMLElement)) return;
//   const [...links] = ul.querySelectorAll('a') || [];
//   return links.map(a => a.textContent);
// }

// console.log(getTextFromUl(list));

// let p = document.querySelector('p');

// function changer (el) {
//   let list = [...el.childNodes];
//   list.forEach(elem => {
//     if (elem.nodeType == 3) {
//       elem.data = '-text-';
//     }
//     console.log(elem);
//   });
//   console.log (list);
// }

// console.log(changer(p));

// document.querySelector('ul').classList.add('list');

// let [...list] = document.querySelector('ul').children;



// while (list.tagName !== 'body') {
//   if (list.tagName === 'A') {
//     list.id = 'link';
//     break;
//   } else list = list.nextElementSibling;
// }

// for (let i = 0; i < list.length; i++) {
//   if (!(i % 2)) list[i].classList.add('item');
// };



// console.log(list);


// let [...space] = document.links;

// space.forEach(el => {
//   el.classList.add('custom-link');
// })


// let list = document.querySelector('ul');

// function creator (target, count) {
//   let fragment = document.createDocumentFragment();
//   let leng = [...target.children].length;
//   for (let i = leng + 1; i <= (count + leng); i++) {
//     let listItem = document.createElement('li');
//     listItem.classList.add('new-item');
//     listItem.textContent = `Item${i}`;
//     fragment.appendChild(listItem);
//   }

//   return target.appendChild(fragment);  
// };

// creator (list, 5);

// function strong (target) {
//   let children = [...target.children];
//   for (let i = 0; i < children.length; i++) {
//     if (children[i].firstChild.tagName === 'A') {
//       let el = document.createElement('strong')
//       children[i].firstChild.insertAdjacentElement('beforeend', el);
//     }
//   }
// }

// strong (list);

// let space = document.body;

// let img = document.createElement('img');

// img.src = 'https://img.utdstc.com/icon/679/994/679994906819b59b9f48fc65239cd1b9ffa70ad063ccceb4b376f0bdd15ab9f1:200';
// img.alt = 'picture';

// space.insertAdjacentElement('afterbegin', img);

// let mark = document.querySelector('mark');

// function adder (target) {
//   target.textContent += ' green';
//   target.classList.add('green');
// }

// adder(mark);

// const listItems = [...list.children].sort((prev, next) => {
//   return prev.textContent > next.textContent ? -1 : 1;
// });
// // Очищаем текущее содержимое списка
// list.innerHTML = '';
// // Генерируем новое содержимое из отсортированного массива элементов
// listItems.forEach((item) => list.appendChild(item));

// let lin = document.querySelectorAll('ul a');

// console.log(lin);

// let button1 = document.querySelector('#btn-msg');

// let button2 = document.querySelector('#btn-generate');

// let alertContent = button1.dataset.text;

// let tagLabel = document.querySelector('#tag');

// let space = document.querySelector('body');

// let list = document.querySelector('ul');


// button1.addEventListener('click', e => {
//   alert(alertContent);
// });

// button1.addEventListener('mouseover', e => {
//   button1.classList.add('hover');
// });

// button1.addEventListener('mouseout', e => {
//   button1.classList.remove('hover');
// });

// space.addEventListener('click', e => {
//   tagLabel.textContent = e.target.tagName;
// });

// button2.addEventListener('click', e => {
//   let item = document.createElement('li');
//   list.appendChild(item);
//   item.textContent = `Item ${[...list.children].length}`;
// })

// let menu = document.querySelector('.menu');

// let menuItems = document.querySelectorAll('.dropdown-menu');

// let menublock = document.querySelectorAll('.dropdown-item');


// menu.addEventListener('click', e => {
//   let parent = e.target.parentElement;
//   let child = parent.querySelector('.dropdown-menu');
//   if (e.target.textContent.includes('Dropdown menu item')) {
//     menuItems.forEach( el => {
//       if (!el.className.includes('d-none') && el !== child) {
//         el.classList.add('d-none');
//       }
//     })
//     child.classList.toggle('d-none');
//   };
// });

// let colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// let boxes = document.querySelectorAll('.box');

// let block = document.querySelector('.container');

// let pause = 200;



// boxes.forEach(e => {
//   e.addEventListener('mouseenter', event => {
//     //event.stopPropagation();
//     console.log(e);
//     e.style.background = 'red';
//   }, true);
// })

// function setRandomColor(el) {
//   const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
//   // Выбираем произвольный цвет из массива
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   el.style.background = randomColor;
// }

// function resetColor(el) {
//   el.style.background = '';
// }

// function onBoxHover(e) {
//   // Создаем массив элементов которые будут менять фон.
//   let elements = [e.currentTarget];
//   let currentEl = e.currentTarget;
//   // Проходимся циклом по всем дочерним элементам до самого последнего
//   while (currentEl) {
//     elements = [...elements, ...currentEl.children];
//     currentEl = currentEl.children[currentEl.children.length - 1];
//   }
//   // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
//   elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
// }

// function onMouseLeave(e) {
//   resetColor(e.currentTarget);
// }

// document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
// document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));

// let arr = ['banana', 'apple', 'cherry', 'berry', 'watermelon', 'lemon', 'orange'];

// let space = document.querySelector('body');

// let fragment = document.createDocumentFragment();

// let list = document.createElement('ul');

// let label = document.querySelector('h2');

// space.appendChild(list);

// arr.forEach(el => {
//   let item = document.createElement('li');
//   item.classList.add(`${el}`);
//   item.textContent = el;
//   list.appendChild(item);
// })

// list.addEventListener('click', e => {
//   if (e.target.tagName !== 'UL') {
//   console.log(e.target);
//   label.textContent = `You-re clicked on: ${e.target.textContent}`;
//   e.target.classList.toggle('pushed');
//   }
// });

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// function bb (a, b) {
//   let res = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) >= 0) {
//       res.push(a[i]);
//     }
//   }
//   return res;
// }

// console.log(bb(arr1, arr2));

// let button = document.querySelector('button');

// let block = document.querySelector('div');

// let counter = 1;

// block.addEventListener('click', e => {
//   block.removeChild(e.target);
//   let newbutton1 = document.createElement('button');
//   counter += 1;
//   newbutton1.textContent = `Button ${counter}`;
//   block.appendChild(newbutton1);
//   let newbutton2 = document.createElement('button');
//   counter += 1;
//   newbutton2.textContent = `Button ${counter}`;
//   block.appendChild(newbutton2);
// })

// let arr = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'cherry', 'berry', 'berry', 'berry', 'watermelon', 'banana', 'orange'];

// function newarr (array) {
//   let obj = array.reduce((acc, el) => {
//     acc[el] = ((acc[el] + 1) || 1);
//     return acc;
//   }, {});
//   let res = Object.fromEntries(Object.entries(obj).sort(([,a],[,b]) => b-a));
//   res = Object.keys(res);
//   return res;
// }


// console.log(newarr(arr));

// let arr = [2,3,5,6,8,19,20,2];

// function multiply (...args) {
//  return args.map(el => el * 2);
// };


// console.log(multiply(arr));

// const map = {id: "#", name: "name", isActive: "email", balance: "balance"};
// const users = [
//   {
//     "_id": "5d220b10e8265cc978e2586b", //need
//     "isActive": true, //need
//     "balance": 2853.33, //need
//     "age": 20,
//     "name": "Buckner Osborne", //need
//     "gender": "male",
//     "company": "EMPIRICA",
//     "email": "bucknerosborne@empirica.com",
//     "phone": "+1 (850) 411-2997",
//     "registered": "2018-08-13T04:28:45 -03:00",
// 		"nestedField": { total: 300 }
//   },
//   {
//     "_id": "5d220b10144ef972f6c2b332",
//     "isActive": true,
//     "balance": 1464.63,
//     "age": 38,
//     "name": "Rosalie Smith",
//     "gender": "female",
//     "company": "KATAKANA",
//     "email": "rosaliesmith@katakana.com",
//     "phone": "+1 (943) 463-2496",
//     "registered": "2016-12-09T05:15:34 -02:00",
// 		"nestedField": { total: 400 }
//   },
//   {
//     "_id": "5d220b1083a0494655cdecf6",
//     "isActive": false,
//     "balance": 2823.39,
//     "age": 40,
//     "name": "Estrada Davenport",
//     "gender": "male",
//     "company": "EBIDCO",
//     "email": "estradadavenport@ebidco.com",
//     "phone": "+1 (890) 461-2088",
//     "registered": "2016-03-04T03:36:38 -02:00",
// 		"nestedField": { total: 200 }
//   }
// ];

// (function (titles, content) {
//   let box = document.querySelector('.box');
//   let table = document.createElement('table');
//   table.style = "width: 100%;"
  
  
//   function addTitles (arr) {
//     let row = document.createElement('tr');
//     Object.values(arr).forEach(e => {
//       let header = document.createElement('th');
//       header.textContent = e;
//       header.style = "padding: 20px 0px; text-align: center; border-bottom: 1px solid";
//       row.appendChild(header);
//     });
//     return row;
//   }

//   function addRows (arr, arr2) {
//     let headers = Object.values(arr);
//     let fragment = document.createDocumentFragment();
    
//     for (let i = 0; i < arr2.length; i++) {
//       let row = document.createElement('tr');
//       let value = document.createElement('td');
//       value.textContent = i + 1;
//       row.appendChild(value);
//       headers.forEach((el, x) => {
//         if (x !== 0) {
//           row.appendChild(filter(el, arr2[i]));
//         }
//       })
//       fragment.appendChild(row);
//     }

//     return fragment;
//   }

//   function filter (header, obj) {
//     let fragment = document.createDocumentFragment();
//     let value = document.createElement('td');
//     value.textContent = obj[header];
//     fragment.appendChild(value);
//     return fragment;
//   }

//   function total (arr) {
//     let fragment = document.createDocumentFragment();
//     let row = document.createElement('tr');
//     let space = document.createElement('td');
//     let total = document.createElement('td');
//     space.setAttribute('colspan', '3');
//     total.textContent = `Total balance: ${arr.reduce((acc, el) => {
//       acc = acc + el.balance;
//       return acc;
//     }, 0)}`
//     row.appendChild(space);
//     row.appendChild(total);
//     fragment.appendChild(row);
//     return fragment;
//   }

//   function createTable () {
//     table.appendChild(addTitles(titles));
//     table.appendChild(addRows(titles, content));
//     table.appendChild(total(content));
//     box.appendChild(table);
//   }

//   window.createTable = createTable();

// })(map, users);

// (function () {

//   // Переменные
 
//   let cardcounter = document.getElementById('cardgenerator');
//   let cardarray = [];
//   let header = document.querySelector('.start__header');
//   let cardBox = [];
//   let currentProgress = 0;
//   let timerWork;

//   let startButton = document.getElementById('gamestart');
//   let timerStartPoint;
//   let progressbar = document.getElementById('progressbar');
//   let gamecontainer = document.getElementById('gamecontainer');
//   const restartButton = document.getElementById('restarter');
//   let settings = document.getElementById('settings');
//   let startSettingsContainer = document.getElementById('startsettings');

  
//   const OPEN_CARD = 0;
//   const CLOSE_CARD = 1;
  
//   // Запуск игры

//   startButton.addEventListener('click', (el) => {
//     timerStartPoint = document.getElementById('gamesetter').value;
//     el.preventDefault();
//     startSettingsContainer.style.display = "none";
//     header.textContent = "Игра началась";
//     arrayCreator(cardarray, Number(cardcounter.value));
//     shuffleCards(cardarray);
//     cardmaker(cardarray);
//     console.log(timerStartPoint);
//     timer();
//     console.log(cardarray);

//   });

//   // Создаем массив на основании введенного кол-ва пар карточек

//   function arrayCreator (arr, count) {
//     if ((typeof count !== 'number')) return alert('Некорректно введенное количество карточек');
//     for (let i = 1; i <= count; i++) {
//       arr.push(i);
//       arr.push(i);
//     }
//     return arr;
//   }

//   // Перемешиваем массив

//   function shuffleCards (arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   }
  
//   // Открываем карту

//   function opencard () {
//     if (cardBox.length == 2) {return}
//     else {
//       this.style.opacity = OPEN_CARD;
//       this.classList.add('opened');
//         if (cardBox.length == 1) {
//           cardBox.push(this.nextElementSibling.textContent);
//             if (!checkPair(cardBox)) {
//               setTimeout(closeCards, 500);
//             } else {
//               fixCards();
//             }
//         }
//         else {
//           cardBox.push(this.nextElementSibling.textContent);
//         }
//     console.log(cardBox);
//     }
//   }

//   // Проверяем пару открытых карт

//   function checkPair (arr) {
//     return arr[0] == arr[1];
//   }

//   // Создаем карты и открываем игровое поле

//   function cardmaker (arr) {
//     gamecontainer.style.display = "flex";
//     settings.style.display = "block";

//     arr.forEach(el => {
//       let cardcontainer = document.createElement('div');
//       cardcontainer.classList.add('card__container');
//       let cardfront = document.createElement('div');
//       cardfront.classList.add('card__style_close');
//       let title = document.createElement('h2');
//       title.classList.add('card__header');
//       title.textContent = el;

//       cardcontainer.appendChild(cardfront);
//       cardcontainer.appendChild(title);
//       gamecontainer.appendChild(cardcontainer);

//       cardfront.addEventListener('click', opencard);
//     });
//   }

//   // Закрываем карты, если пара не угадана

//   function closeCards () {
//     let openedCards = document.querySelectorAll('.opened');
//     openedCards.forEach(el => {
//       el.classList.remove('opened');
//       el.style.opacity = CLOSE_CARD;
//     });
//     cardBox = [];
//   }

//   // Фиксируем карты открытыми, если угадали пару

//   function fixCards () {
//     let openedCards = document.querySelectorAll('.opened');
//     openedCards.forEach(el => {
//       el.classList.remove('opened');
//       el.classList.add('fixed');
//     });
//     cardBox = [];
//     progressRecord(progressbar);
//   }

//   // Записываем прогресс игрока

//   function progressRecord (el) {
//     currentProgress += (100 / cardcounter.value)
//     el.style.width = `${currentProgress}%`;
//     el.textContent = `${currentProgress}%`;
//     if (currentProgress == 100) endGame(currentProgress);
//   }

//   // Запускаем таймер

//   function timer () {
    
//     let x = Number(timerStartPoint);
//     countdown();
//     function countdown() {
//     if ((currentProgress == 100)) return;
//     document.getElementById('rocket').innerHTML = x;
//     x--;
//     if (x < 0){
//       clearTimeout(timerWork);
//       endGame(currentProgress);
//     }
//     else {
//       timer = setTimeout(countdown, 1000);
//     }
//     }
//   }


//   // Алерт проигрыша или выиграша

//   function endGame (status) {
//     if (status < 100) {
//       clearTimeout(timerWork);
//       alert('вы проиграли, чтобы еще раз сыграть, обновите страницу');
//     } else {
//       clearTimeout(timerWork);
//     alert('Вы выиграли, чтобы еще раз сыграть, обновите страницу');
//     }
//   }

// })();

// (() => {
//   let studentlist = [
//     {
//     name: 'Василий',
//     surname: 'Жерненков',
//     patronymic: 'Вадимович',
//     birthdate: new Date(1994, 2, 26),
//     studyStartDate: 2020,
//     faculty: 'Front-end developer',
//   },
//   {
//     name: 'Владислав',
//     surname: 'Чернов',
//     patronymic: 'Андреевич',
//     birthdate: new Date(1991, 5, 6),
//     studyStartDate: 2020,
//     faculty: 'Back-end developer',
//   },
//   {
//     name: 'Дмитрий',
//     surname: 'Иванов',
//     patronymic: 'Андреевич',
//     birthdate: new Date(1997, 3, 4),
//     studyStartDate: 2014,
//     faculty: 'Back-end developer',
//   },
//   {
//     name: 'Дмитрий',
//     surname: 'Федорченко',
//     patronymic: 'Владимирович',
//     birthdate: new Date(1993, 7, 19),
//     studyStartDate: 2020,
//     faculty: 'Front-end developer',
//   },
//   {
//     name: 'Данил',
//     surname: 'Рудаков',
//     patronymic: 'Владимирович',
//     birthdate: new Date(1999, 10, 24),
//     studyStartDate: 2018,
//     faculty: 'Game developer',
//   },
//   {
//     name: 'Антон',
//     surname: 'Мазурец',
//     patronymic: 'Андреевич',
//     birthdate: new Date(2002, 9, 14),
//     studyStartDate: 2020,
//     faculty: 'Front-end developer',
//   },
//   {
//     name: 'Павел',
//     surname: 'Карпенко',
//     patronymic: 'Александрович',
//     birthdate: new Date(1995, 6, 20),
//     studyStartDate: 2019,
//     faculty: 'Game developer',
//   },];

//   // Переменные
//     // Add panel
//     const addName = document.getElementById('firstname');
//     const addSurname = document.getElementById('lastname');
//     const addPatronymic = document.getElementById('patronymic');
//     const addBirthdate = document.getElementById('birthdate');
//     const addStartStudy = document.getElementById('startstudy');
//     const addFaculty = document.getElementById('faculty');
//     const addUserButton = document.getElementById('addbutton');
//     const recoverUserButton = document.getElementById('comeback');
//     const addform = document.getElementById('addform');

//     // Filter panel

//     const filterUser = document.getElementById('namefilter');
//     const filterBirthDate = document.getElementById('filterbdate');
//     const filterStartStudy = document.getElementById('studystart');
//     const filterEndStudy = document.getElementById('studyend');
//     const filterFaculty = document.getElementById('filterfaculty');
//     const filterButton = document.getElementById('filterbutton');
//     const clearFilterButton = document.getElementById('clearfilter');

//     // Alerts

//     const successAlert = document.getElementById('successalert');
//     const filterAlert = document.getElementById('addfail');
//     const addAlert = document.getElementById('filterfail');
//     const statusAlert = document.getElementById('filterlabel');
    
//     // Table
    
//     const tablecontainer = document.getElementById('tablecontainer');
//     const tablesorts = document.querySelectorAll('th');
    
//     let filterList = [];
//     let deletedStudents = [];

//   // Ф-я добавления студента

//   function addStudent (e) {
//     e.preventDefault();

//     //Собираем данные
//     let name = addName.value.trim();
//     let surname = addSurname.value.trim();
//     let patronymic = addPatronymic.value.trim();
//     let bdate = addBirthdate.value;    
//     let studyYear = Number(addStartStudy.value);
//     let faculty = addFaculty.value.trim();
//     let res = addStudentValidation(name, surname, patronymic, bdate, studyYear, faculty);
//     // Валидация

//     if (res == false) return;

//     let newStudent = {
//       'name': `${name}`,
//       'surname': `${surname}`,
//       'patronymic': `${patronymic}`,
//       'birthdate': new Date(bdate),
//       'studyStartDate': studyYear,
//       'faculty': `${faculty}`,
//     }
    
//     addform.reset();
//     clearAlert(addAlert);
//     studentlist.push(newStudent);
//     alertSuccess();
//     setTimeout(clearAlert, 2000, successAlert);
//     clearTable();
//     createTable(studentlist);
//   }

//   // Ф-я удаления из журнала

//   function removeStudent () {
//     let currentLine = [...this.closest('tr').children];
//     let currentStudent = currentLine[0].textContent.split(' ');
//     let [currsurname, currname, currpatronimyc] = currentStudent;    
//     let currentStudentProfile = studentlist.filter(el => {return (el.surname == currsurname && el.name == currname && el.patronymic == currpatronimyc)})
//     currentStudentProfile.forEach(elem => {
//       deletedStudents.push(elem);
//     })
//     studentlist = studentlist.filter(el => {return (el.surname !== currsurname || el.name !== currname || el.patronymic !== currpatronimyc)});
//     this.closest('tr').remove();
//   }

//   // Создаем таблицу из дефолтного массива

//   function createTable (arr) {
//     arr.forEach(el => {
//       let row = document.createElement('tr');
//       let userinfo = Object.values(el);

//       let td = document.createElement('td');
//       let {name, surname, patronymic} = el;
//       let fullname = `${surname} ${name} ${patronymic}`;
//       td.textContent = fullname;
//       row.appendChild(td);

//       for (let i = 3; i < userinfo.length + 1; i++) {
//         let td = document.createElement('td');
//         if (i == 3) {
//           let day = userinfo[i].getDate();
//           let month = userinfo[i].getMonth() + 1;
//           let year = userinfo[i].getFullYear();
//           let now = new Date();
          
//           let age = getAge(day, month, year);

//           td.textContent = `${day}.${month}.${year} (${age} лет)`;
//           row.appendChild(td);
//         }
//         else if (i == 4) {
//           td.textContent = `${getStudyYears(userinfo[i])}`
//           row.appendChild(td);
//         }
//         else if (i == userinfo.length) {
//           let deleteButton = document.createElement('button');
//           deleteButton.classList.add('btn');
//           deleteButton.classList.add('btn-danger');
//           deleteButton.textContent = 'Отчислить';
//           td.appendChild(deleteButton);
//           row.appendChild(td);

//           deleteButton.addEventListener('click', removeStudent);
//         }
//         else {
//           td.textContent = `${userinfo[i]}`
//           row.appendChild(td);
//         }
//       }
//       tablecontainer.appendChild(row);
//     });
//   }

//   createTable(studentlist);

//   // Очистка таблицы

//   function clearTable () {
//     let childs = [...tablecontainer.children];
//     childs.forEach(el => {
//       el.remove();
//     })
//   }

//   // Расчеты с датами

//   function getAge (day, month, year) {
//     let age;
//     let now = new Date();
//     age = now.getFullYear() - year;
//     if (((now.getMonth() + 1) - month) < 0) {
//       age -= 1;
//     } else if (((now.getMonth() + 1) - month) == 0) {
//       if (((now.getDate() - day) < 0)) age -= 1;
//     }
//     return age;
//   }

//   function getStudyYears (year) {
//     let res = ``;
//     let now = new Date();
//     let startmonth  = 9;

//     if (now.getFullYear() - year >= 4 && now.getMonth() - (startmonth - 1) >= 0) {
//       res = `${year}-${year + 4} (закончил)`;
//     } else {
//       res = `${year}-${year + 4} (${now.getFullYear() - year + 1} курс)`;
//     }
//     return res;
//   }

//   // Валидация

//   function addStudentValidation (firstName, lastName, patron, birthdate, startYear, faculty) {
//     let errors = [];

//     errors.push(checkString(firstName, 'Имя'));
//     errors.push(checkString(lastName, 'Фамилия'));
//     errors.push(checkString(patron, 'Отчество'));
//     errors.push(checkBdate(birthdate, 'Дата рождения'));
//     errors.push(checkYear(startYear, 'Год начала обучения'));
//     errors.push(checkString(faculty, 'Факультет'));

//     for (let i = 0; i < errors.length; i++) {
//       if (typeof errors[i] !== 'undefined') {
//         alertError(errors);
//         return false;
//       } 
//     }
//     return true;
//   }
  
//   function checkYear (year, field) {
//     let message = [];
//     now = new Date();
//     if (year == 0) {
//       message.push(`Необходимо заполнить поле ${field}`); 
//       return message;};

//     if (parseFloat(year) < 2000 || parseFloat(year) > now.getFullYear()) message.push(`${field} должен быть не ранее 2000 года и позже текущего`);
//     if (message.length == 0) return;
//     return message; 
//   }


//   function checkString (str, field) {
//     let numbers = '1234567890';
//     let message = [];
//     if (str == '') {
//       message.push(`Необходимо заполнить поле ${field}`);
//       return message;
//     }

//     let numCheck = str.split('').every(el => {
//       numbers.includes(parseFloat(el));
//     });

//     if (numCheck) message.push(`${field} не может содержать цифры`);

//     if (message.length == 0) return;

//     return message;
//   }

//   function checkBdate (year, field) {
//     let now = new Date();
//     let max = new Date('01.01.1900')
//     let currentDate = new Date(year);

//     let message = [];
//     if (currentDate == 'Invalid Date') message.push(`Необходимо ввести ${field}`);
//     if (currentDate > now) message.push(`${field} не может быть позже текущей даты`);
//     if (currentDate < max) message.push(`${field} не может быть раньше 1900 года`);
//     if (message.length == 0) return;
//     return message;
//   }

//   // Фильтр журнала

//   function filter (e) {

//     e.preventDefault();

//     res = [...studentlist];    

//     let username = filterUser.value;
//     let bdate = filterBirthDate.value;
//     let startYear = filterStartStudy.value;
//     let endYear = filterEndStudy.value;
//     let faculty = filterFaculty.value;

//     searchByName(studentlist, username);
//     searchBybdate(bdate);
//     searchByStartYear(startYear);
//     searchByEndYear(endYear);
//     searchByFaculty(faculty);

//     clearTable();
//     createTable(res);
//     if (res.length != studentlist.length) {
//       alertFilter();
//       setTimeout(clearAlert, 2000, statusAlert);
//     }
//   }

//   function searchByName (arr, name) {
//     if (!name) return res;
//     res = [];
//     name = name.toLowerCase().split(' ');
//     let targetmatches = name.length;
//     let counter = 0;

//     arr.forEach(el => {
//       let str = `${el.name} ${el.surname} ${el.patronymic}`;
//       str = str.toLowerCase().split(' ');

//       name.forEach(elem => {
//         if (str.includes(elem)) counter++;
//         if (counter == targetmatches) {
//           res.push(el);
//           counter = 0;
//         };
//       })
//     })

//     return res;
//   };

//   function searchBybdate (name) {
//     if (!name) return res;

//     let checkDate = new Date(name);

//     res = res.filter(el => {
//       return (el.birthdate.getFullYear() == checkDate.getFullYear() && el.birthdate.getMonth() == checkDate.getMonth() && el.birthdate.getDate() == checkDate.getDate());
//     })
//     return res;
//   }

//   function searchByStartYear (name) {
//     if (!name) return res;

//     res = res.filter(el => {
//       return (el.studyStartDate == name);
//     })
//     return res;
//   }

//   function searchByEndYear (name) {
//     if (!name) return res;

//     res = res.filter(el => {
//       return ((el.studyStartDate + 4) == name);
//     })
//     return res;
//   }

//   function searchByFaculty (name) {
//     if (!name) return res;

//     res = res.filter(el => {
//       return (el.faculty.includes(name));
//     })
//     return res;
//   }

//   function cancelFilter (e) {
//     e.preventDefault();

//     clearTable();
//     createTable(studentlist);
//   }

//   // Функции для вывода алертов

//   function alertError (arr) {
//     addAlert.style.display = 'block';

//     arr.forEach(el => {
//       if (Array.isArray(el)) {
//         el.forEach(e => {
//           let p = document.createElement('p');
//           p.textContent = e;
//           addAlert.appendChild(p);
//         })
//       }
//     })
//   } 
  
//   function alertSuccess () {
//     successAlert.style.display = 'block';
//   }

//   function alertFilter () {
//     statusAlert.style.display = 'block';
//   }

//   function clearAlert (target) {
//     if (target.id == 'successalert' || target.id == 'filterlabel') {
//       target.style.display = 'none';
//       return;
//     }

//     let children = [...target.children];
//     children.forEach(el => {
//       el.remove();
//     })
//     target.style.display = 'none';
//   }

//   // Сортировки
 
//   function sort () {
//     filterList = [...studentlist];
//     console.log(filterList);
//       if (this.id == 'namesort') {filterList.sort(byField('surname'));} 
//       else if ((this.id == 'agesort')) {filterList.sort(byField('birthdate'));}
//       else if ((this.id == 'studysort')) {filterList.sort(byField('studyStartDate'));}
//       else if ((this.id == 'facultysort')) {filterList.sort(byField('faculty'));}
//     clearTable();
//     createTable(filterList);
//   }
  
//   // Делаю костыль, чтобы укоротить сортировки

//   function byField(field) {
//     if (field == 'birthdate' || field == 'studyStartDate') return (a, b) => b[field] > a[field] ? 1 : -1;
//     return (a, b) => a[field] > b[field] ? 1 : -1;
//   }  

//   // Восстановление удаленных

//   function recover (e) {

//     e.preventDefault();
//     if (!deletedStudents) return;
//     console.log(deletedStudents);
//     deletedStudents.forEach(el => {
//       console.log(el);
//       studentlist.push(el);
//     });

//     clearTable();
//     createTable(studentlist);
//   }

//   // Обработчики
 
//   tablesorts.forEach(el => {
//     el.addEventListener('click', sort);
//   }); 

//   addUserButton.addEventListener('click', addStudent);

//   filterButton.addEventListener('click', filter);

//   recoverUserButton.addEventListener('click', recover);

//   clearFilterButton.addEventListener('click', cancelFilter);

// })()

// function toCamelCase(str){
//   if (str === '') return str;
//   let dictionary = ['-','_'];
//   let res = '';

//    for (i = 0; i < str.length; i++) {
//      if (dictionary.includes(str[i])) {
//       res += str[i+1].toUpperCase();
//       i++;
//       continue;
//      }
//     if (str[i] === str[i].toUpperCase()) {
//       res += str[i];
//     } else {
//       res += str[i];
//     }
//    }
   
//    return res;
//  }

// console.log(toCamelCase(''));
// console.log(toCamelCase("the_stealth_warrior"));
// console.log(toCamelCase("The-Stealth-Warrior"));
// console.log(toCamelCase("A-B-C"));

// function arrayDiff(a, b) {
//   let res = [];

//   for (const x of a) {
//     if (!b.includes(x)) {
//       res.push(x);
//     }
//   }
//   console.log(res);
//   return res;
// }

// arrayDiff([], [4,5])
// arrayDiff([3,4], [3])
// arrayDiff([1,8,2], [])
// arrayDiff([1,2,3], [1,2])

// function divisors(integer) {
//   let res = [];
//   let checker = 0;

//   for (let i = 2; i < integer; i++) {
//     if ((integer % i) === 0) {
//       res.push(i);
//       checker++;
//     }
//   }

//   if (checker === 0) {
//     res = `${integer} is prime`;
//   }

//   return res;
// };

// divisors(15);
// divisors(12);
// divisors(13);

// function findOutlier(integers){
//   let evenArr = [];
//   let oddArr = [];

//   for (let i = 0; i < integers.length; i++) {
//     (integers[i] % 2) == 0 ? oddArr.push(integers[i]) : evenArr.push(integers[i]);
//   }

//   return oddArr.length == 1 ? Number(oddArr.join('')) : Number(evenArr.join(''));
// }

// console.log(findOutlier([0, 1, 2]))

// findOutlier([0, 1, 2])
// findOutlier([1, 2, 3])
// findOutlier([2,6,8,10,3])
// findOutlier([0,0,3,0,0])
// findOutlier([1,1,0,1,1])


// function bouncingBall(h,  bounce,  window) {
//   let counter = 0;
//   if (h < 0 || bounce <= 0 || bounce >= 1 || window > h) return counter = -1;

//   let firstBouncePeak = h * bounce;

//   if (h >= window) {
//     counter = 1;

//     while (firstBouncePeak >= window) {
//       counter += 2;
//     firstBouncePeak = firstBouncePeak * bounce;
//     }
//   }
//   console.log(counter);
//   return counter;
// }

// bouncingBall(3.0, 0.66, 1.5) // 3
// bouncingBall(30.0, 0.66, 1.5) // 15

// function tribonacci(signature,n){
//   let res = [];
//   if (n <= 0) return res;

//   if (n < signature.length) {
//     for (let i = 0; i < n; i++) {
//       res.push(signature[i]);
//     }
//     return res;
//   } else {
//   res = [...signature];
//   for (let i = 3; i < n; i++) {
//     res.push(res[i - 1] + res[i - 2] + res[i - 3]);
//   }
//   return res;
//   }
// }

// console.log(tribonacci([1,1,1],10))//[1,1,1,3,5,9,17,31,57,105])
// console.log(tribonacci([0,0,1],10))//[0,0,1,1,2,4,7,13,24,44])
// console.log(tribonacci([0,1,1],10))//[0,1,1,2,4,7,13,24,44,81])
// console.log(tribonacci([1,0,0],10))//[1,0,0,1,1,2,4,7,13,24])
// console.log(tribonacci([0,0,0],10))//[0,0,0,0,0,0,0,0,0,0])
// console.log(tribonacci([1,2,3],10))//[1,2,3,6,11,20,37,68,125,230])
// console.log(tribonacci([3,2,1],10))//[3,2,1,6,9,16,31,56,103,190])
// console.log(tribonacci([1,1,1],1))//[1])
// console.log(tribonacci([300,200,100],0))//[])
// console.log(tribonacci([0.5,0.5,0.5],30))//[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])

// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
//   let res = [];

//   for (let i = 0; i < strarr.length; i++) {
//     let str = strarr.slice(i, i + k).join('');
//     res.push(str);
//     str = [];
//   }
  
//   res = res.sort((a, b) => {
//     return b.length - a.length
//   })[0];

//   return res.toString();
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))//, "abigailtheta")
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))//, "oocccffuucccjjjkkkjyyyeehh")
// console.log(longestConsec([], 3))//, "")
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))//, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))//, "wlwsasphmxxowiaxujylentrklctozmymu")
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))//, "")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))//, "ixoyx3452zzzzzzzzzzzz")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))//, "")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))//, "")

// function towerBuilder(nFloors) {
//   let star = '*';
//   let space = ' ';
//   let floor = [];
//   let base = (nFloors * 2) - 1;
//   let step = 0;
//   let build = [];
  
  
//   if (base === 1) {
//     build.unshift(star);
//   } else {

//     for (let i = 0; i < base; i++) {
//       floor.unshift(star);
//     }
//     build.push(floor.join(''));

//     for (let i = nFloors - 1; i > 0; i--) {
//       floor.splice(base - 1 - step, 1, space);
//       floor.splice(0+step, 1, space);
//       build.unshift(floor.join(''));
//       step++;
//     }
//   }

//   return build;
// }

// console.log(towerBuilder(1))//, ["*"]);
// console.log(towerBuilder(2))//, [" * ","***"]);
// console.log(towerBuilder(3))
// console.log(towerBuilder(4))
// console.log(towerBuilder(5))//, ["  *  "," *** ","*****"]);
// console.log(towerBuilder(6))

// function solution(str, ending){
//   return str.endsWith(ending);
// }

// console.log(solution('abcde', 'cde'))//, true)
// console.log(solution('abcde', 'abc'))//, false)


// function descendingOrder(n){
//   if (n.length == 1) return n;
//   return Number(n.toString().split('').sort((a, b) => b - a).join(''));
// }

// console.log(descendingOrder(0)) //, 0)
// console.log(descendingOrder(1)) //, 1)
// console.log(descendingOrder(111)) //, 111)
// console.log(descendingOrder(15)) //, 51)
// console.log(descendingOrder(1021)) //, 2110)
// console.log(descendingOrder(123456789)) //, 987654321)

// String.prototype.toJadenCase = function () {
//   let res = this
//   .split(' ')
//   .map(el => {
//     return el[0].toUpperCase() + el.slice(1);
//   })
//   .join(' ');

//   return res;
// };

// let str = "How can mirrors be real if our eyes aren't real";

// console.log(str.toJadenCase()) // "How Can Mirrors Be Real If Our Eyes Aren't Real")

// var isSquare = function(n){
//   if (n < 0) return false;
//   if (n === 0) return true;
//   return Math.sqrt(n) == Math.sqrt(n).toFixed(0);
// }

// isSquare(-1) //, false, "-1: Negative numbers cannot be square numbers");
// isSquare( 0) //, true, "0 is a square number (0 * 0)");
// isSquare( 3) //, false, "3 is not a square number");
// isSquare( 4) //, true, "4 is a square number (2 * 2)");
// isSquare(25) //, true, "25 is a square number (5 * 5)");
// isSquare(26) //, false, "26 is not a square number");

// function removeSmallest(numbers) {
//   let position = numbers.indexOf(Math.min.apply(null, numbers));
//   return numbers.splice(position, 1);
// }

// removeSmallest([1, 2, 3, 4, 5]) //, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// removeSmallest([5, 3, 2, 1, 4]) //, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// removeSmallest([2, 2, 1, 2, 1]) //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// removeSmallest([]) //, [], "Wrong result for []");

// const binaryArrayToNumber = arr => {
//   let res = arr.join('');
//   return parseInt(res, 2);
// };

// console.log(binaryArrayToNumber([0,0,0,1]))//, 1);
// console.log(binaryArrayToNumber([0,0,1,0]))//, 2);
// console.log(binaryArrayToNumber([1,1,1,1])) // 15);
// console.log(binaryArrayToNumber([0,1,1,0]))//, 6);


// function countSmileys(arr) {
//   let smile = [':;','-~','D)'];

//   res = arr.filter(el => {
//     if (el.length == 3) return (smile[0].includes(el[0]) && smile[1].includes(el[1]) && smile[2].includes(el[2]));
//     return (smile[0].includes(el[0]) && smile[2].includes(el[1]))
//   })

//   return res.length;
// }

// console.log(countSmileys([])) //, 0);

// console.log(countSmileys([':D',':~)',';~D',':)'])) //, 4);

// console.log(countSmileys([':)',':(',':D',':O',':;'])) //, 2);

// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //, 1);

// function solution(string) {
//   let res = [];

//   string.split('').forEach(el => {
//     if (el.toUpperCase() == el) {
//       res.push(' ');
//     }
//     res.push(el);
//   });

//   return res.join('');
// }

// console.log(solution('camelCasing'))// 'camel Casing', 'Unexpected result')
// console.log(solution('camelCasingTest'))// 'camel Casing Test', 'Unexpected result')

// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     console.log(n);
//     return cache[n] <= x;
//   });
// }


// console.log(deleteNth([20,37,20,21], 1)) // [20,37,21])
// console.log(deleteNth([1,1,3,3,7,2,2,2,2,3,3], 3)) // [1, 1, 3, 3, 7, 2, 2, 2])

// var uniqueInOrder=function(iterable){
//   let res = [...iterable];

//   return res
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// function persistence(num) {
//   let res = 0;
//   let acc = 1;

//   if (num < 10) return res;
  
//   do {
//   let array = num.toString().split('');
//   for (let i = 0; i < array.length; i++) {
//     acc *= array[i];
//   }
//   res++;
//   num = acc;
//   acc = 1;
//   } while (num > 9);

//   return res;
// }

// console.log(persistence(39))//,3);
// console.log(persistence(4))//,0);
// console.log(persistence(25))//,2);
// console.log(persistence(999))//,4);

// function accum(s) {
// 	let res = [];
  
//   for (let i = 0; i < s.length; i++) {
//     let big = s[i].toUpperCase();
//     let small = s[i].toLowerCase();

//     let string = big + small.repeat(i);
//     res.push(string);
//   }

//   return res.join('-');
// }

// console.log(accum("ZpglnRxqenU"))//, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// console.log(accum("NyffsGeyylB"))//, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum("MjtkuBovqrU"))//, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum("EvidjUnokmM"))//, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum("HbideVbxncC"))//, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");


// function duplicateCount(text){
//   if (text.length == 0) return 0;
//   let res = text.toLowerCase().split('').reduce((acc, el, i) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   },{});

//   return Object.values(res).filter(el => {
//     return el >= 2;
//   }).length;
// }

// console.log(duplicateCount(""))//, 0);
// console.log(duplicateCount("abcde"))//, 0);
// console.log(duplicateCount("aabbcde"))//, 2);
// console.log(duplicateCount("aabBcde"))//, 2,"should ignore case");
// console.log(duplicateCount("Indivisibility"))//, 1)
// console.log(duplicateCount("Indivisibilities"))//, 2, "characters may not be adjacent")


// function findOdd(A) {
//   let res = A.reduce((acc, el, i) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//       },{});

//   res = Object.entries(res).filter(([a, b] = []) => {
//     return b % 2 !== 0;
//   }).map(([a, b] = []) => {
//     return Number(a);
//   });

//   return res[0];
// }

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))//, 5);
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))//, -1);
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))//, 5);
// console.log(findOdd([10]))//, 10);
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))//, 10);
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))//, 1);

// function order(words){
//   let res = [];

//   for (let i = 1; i <= 9; i++) {
//     words.split(' ').forEach(el => {
//       if (el.includes(i)) res.push(el);
//     });
//   }

//   return res.join(' ');
// }

// console.log(order("is2 Thi1s T4est 3a"))//, "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//, "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""))//, "", "empty input should return empty string" )

// function kebabize(str) {
//   let numbers = [1,2,3,4,5,6,7,8,9,0];
//   return str.split('').reduce((acc, el, i) => {
//     if (numbers.includes(Number(el)) || el == '-') {
//       return acc += '';
//     } else if (i == 0) {
//       return acc += el;
//     } else if (el == el.toUpperCase()) {
//       return acc += `-${el.toLowerCase()}`;
//     }
//     return acc += el;
//   },'');
// }

// console.log(kebabize('myCamelCasedString'));//, 'my-camel-cased-string');  
// console.log(kebabize('myCamelHas3Humps'));//, 'my-camel-has-humps');
// console.log(kebabize('-myCamelCasedString'))

// function findUniq(arr) {
//     let res = arr.reduce((acc, el, i) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//       },{});
    
//       let uniq = 0;
    
//     let filter = Object.entries(res).forEach(([a,b] = []) => {
//         if (b == 1) uniq = Number(a);
//     }); 

//   return uniq;
// }

// console.log(findUniq([ 1, 0, 0 ])) //, 1);
// console.log(findUniq([ 0, 1, 0 ])) //, 1);
// console.log(findUniq([ 0, 0, 1 ])) //, 1);
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) //, 2);
// console.log(findUniq([ 1, 1, 2, 1, 1 ])) //, 2);
// console.log(findUniq([ 3, 10, 3, 3, 3 ])) //, 10);

// function likes(names) {
//   if (names.length == 0) return 'no one likes this';
//   let [a,b,c,...others] = names;

//   if (names.length == 1) return `${a} likes this`;
//   if (names.length == 2) return `${a} and ${b} like this`;
//   if (names.length == 3) return `${a}, ${b} and ${c} like this`;
//   if (names.length > 3) return `${a}, ${b} and ${others.length + 1} others like this`; 
// }

// console.log(likes([]))//, 'no one likes this');
// console.log(likes(['Peter']))//, 'Peter likes this');
// console.log(likes(['Jacob', 'Alex']))//, 'Jacob and Alex like this');
// console.log(likes(['Max', 'John', 'Mark']))//, 'Max, John and Mark like this');
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))//, 'Alex, Jacob and 2 others like this');



// (function () {
//   // Переменные
//   let container = document.querySelector('.container');
//   let button = document.querySelector('#button');
//   let name = document.querySelector('#name');
//   let email = document.querySelector('#email');
//   let phone = document.querySelector('#phone');
//   let website = document.querySelector('#website');

//   // Серверная часть

//   function createField (cb) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     xhr.addEventListener('load', e => {
//       const response = JSON.parse(xhr.responseText);
//       cb(response);
//     });
//     xhr.send();
//   };

//   function addUser(body, cb) {
//     const xhr = new XMLHttpRequest();
  
//     xhr.open('POST', `https://jsonplaceholder.typicode.com/users`);
  
//     xhr.addEventListener('load', () => {
//       const response = JSON.parse(xhr.responseText);
//       cb(response);
//     })
//     xhr.setRequestHeader("Content-type", 'application/json; charset=UTF-8');
//     xhr.send(JSON.stringify(body));
//   }

//   createField(usersGen);

//   // Функции

//   function usersGen(response) {
//     let fragment = document.createDocumentFragment()
//     response.forEach(user => {
//       fragment.appendChild(createUser(user));
//     })
//     container.appendChild(fragment);
//   }

//   function createUser(user) {
//     let cardcontainer = document.createElement('div');
//     cardcontainer.classList.add('card', 'text-white', 'bg-dark', 'mb-3');
//     cardcontainer.style.maxWidth = '18rem';

//     let cardheader = document.createElement('div');
//     cardheader.classList.add('card-header');
//     cardheader.textContent = user.username;

//     let cardbody = document.createElement('div');
//     cardbody.classList.add('card-body');

//     let cardtitle = document.createElement('h5');
//     cardtitle.classList.add('card-title');
//     cardtitle.textContent = user.name;

//     let cardtext = document.createElement('p');
//     cardtext.classList.add('card-text', 'closeblock');
//     cardtext.innerHTML = `email: ${user.email} <br> website: ${user.website} <br> phone: ${user.phone}`;
//     //cardtext.style.display = 'none';

//     let cardbutton = document.createElement('button');
//     cardbutton.classList.add('btn', 'btn-light');
//     cardbutton.type = 'button';
//     cardbutton.textContent = 'Подробнее';

//     cardbutton.addEventListener('click', function (e) {
//       let block = e.target.parentElement;
//       let list = [...block.children];

//       list.forEach(el => {
//         if (el.tagName == 'P') {
//           el.classList.toggle('closeblock');
//         }
//         if (el.tagName == 'BUTTON' && (el.textContent == 'Подробнее')) {
//           el.textContent = 'Закрыть';
//         } else if ((el.tagName == 'BUTTON') && (el.textContent == 'Закрыть')) {
//           el.textContent = 'Подробнее';
//         }

//       })
      
//     })

//     cardbody.appendChild(cardtitle);
//     cardbody.appendChild(cardtext);
//     cardbody.appendChild(cardbutton);

//     cardcontainer.appendChild(cardheader);
//     cardcontainer.appendChild(cardbody);

//     return cardcontainer;
//   }

//   //Button action
  
//   button.addEventListener('click', (e) => {
//     e.preventDefault();

//     addUser({
//       'username': 'New user',
//       'name': `${name.value}`,
//       'email': `${email.value}`,
//       'phone': `${phone.value}`,
//       'website': `${website.value}`
//     }, (response) => {
//       let card = createUser(response);
//       container.insertAdjacentElement('afterbegin', card);
//     });
//   })

// })();

// let a;

// a = (+Math.PI.toFixed(2));
// a = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// a = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
// a = +Math.random().toFixed(2);
// a = Math.round(Math.random() * 200);
// a = +(0.6 + 0.7).toFixed(1);
// a = parseFloat('100$');

// console.log(a);

// let string = "some test string";
// let a = string[0];
// a = string[string.length - 1];
// a = string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase();
// a = string.lastIndexOf(' ');
// a = string.slice(5,9);
// a = string.slice(5,9);
// a = string.slice(0, -6);
// a = 16;
// let b = 20;

// a = `${b}${a}`; 

// a = String(a).concat(b);

// let a = {
//   product: 'iphone',
// };

// a.price = 1000;
// a.currency = 'dollar';

// a.details = {
//   model: '7',
//   colour: 'black'
// };

// let a = 10;

// if (a < 0) {
//   a = 'less than zero';
// } else if (!a) {
//   a = 1;
// } else {
//   a *= 10;
// }



// let car = { 
//   name: 'Lexus', 
//   age: 10, 
//   create: 2008, 
//   needRepair: false };


// if (car.age > 5) {
//   console.log('Need repair');
//   car.needRepair = true;
// }




// let item = { 
//   name: 'Intel core i7', 
//   price: '100$', 
//   discount: '15%' };



// if (item.discount && item.discount !== "NaN" && item.price !== "NaN") {
//   item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.price) * (parseFloat(item.discount) / 100) + '$';
//   console.log(item.priceWithDiscount);
// } else {
//   console.log(item.price);
// }

// console.log(item);

// let product = {
//   name: 'Яблоко',
//   price: '10$'
//   };
  
//   let min = 10; // минимальная цена
//   let max = 20; // максимальная цена
  

//   if (parseFloat(product.price) <= max && parseFloat(product.price) >= min) {
//     console.log(product.name);
//   }

//  Записать в виде switch case следующее условие:

// let a = 'block';

// if (a === 'block') {
//    console.log('block')
// } else if (a === 'none') {
//    console.log('none')
// } else if (a === 'inline') {
//    console.log('inline')
// } else {
//    console.log('other')
// }

// switch (a) {
//   case 'block': console.log('block');
//   break;
//   case 'none': console.log('none');
//   break;
//   case 'inline': console.log('inline');
//   break;
//   default: console.log('other');
// }

//Записать данное условие в виде тернарного оператора

// let b = 'hidden';
// if (b === 'hidden') {
//   b = 'visible';
// } else {
//   b = 'hidden';
// }

// b = b === 'hidden' ? 'vivsible' : 'hidden';


//Записать данное условие в виде тернарного оператора
// let c = 10;

// if (c === 0) {
//   c = 1;
// } else if (c < 0) {
//   c = 'less then zero';
// } else {
//   c *= 10;
// }

// c = c === 0 ? 1 : c < 0 ? 'less then zero' : c *= 10 ;

// console.log(c);

// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

// Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

// Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

// На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.


// let str = 'i am in the easycode';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i == 0) {res += str[i].toUpperCase();}
//   else if (str[i-1] === " ") {res += str[i].toUpperCase();}
//   else {res += str[i]}
// }

// console.log(res);

// let str = 'tseb eht ma i';
// let res = '';

// for (let i = str.length - 1; i >= 0; i--) {
//   res += str[i];
// }

// console.log(res);

// let a = 10;
// let res = 1;

// for (let i = a; i > 1; i--) {
//   res *= i;
//   console.log(res);
// }

// let str = 'JavaScript is a pretty good language';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     continue;
//   }
//   if (str[i -1] == " ") {
//     res += str[i].toUpperCase();
//     continue;
//   }
//   res += str[i];
// }

// console.log(res);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (i of arr) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// Дан объект:
// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
//   }
  
  // Перебрать объект и если значение в свойстве это строка то переписать ее всю в 
  //верхнем регистре. Использовать for in.
  

// for (key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase();
//   };
// }

// console.log(list);

// function multiply() {
//   if (!arguments.length) {
//     return 0;
//   }
//   let res = 1;
//   for (let i = 0; i < arguments.length; i++) {
//    res *= arguments[i]; 
//   }
//   console.log(res);
//   return res;
// }

// multiply(2, 4, 5, 6);
// multiply();


// function reverseString(str) {
//   return String(str).split('').reverse().join('');
// }

// console.log(reverseString('test'));
// console.log(reverseString(''));
// console.log(reverseString(null));
// console.log(reverseString(undefined));
// console.log(reverseString());



// function getCodeStringFromText(str) {
//   let res ='';
//   let correctStr = String(str);
//   for (let i = 0; i < correctStr.length; i++) {
//     res += str.charCodeAt(i) + ' ';
//   }
//   return res.trim('');
//   };

// console.log(getCodeStringFromText("hello"));

// function guessTheNumber(num) {
//   if (num < 0 || num > 10 || typeof num !== 'number' || isNaN(num)) return Error('введите коррректное число');
//   let random =  Math.round(Math.random() * 10);
//   return num === random ? 'You win' : `You lose, your number is ${num}, the random number is ${random}`;
// }

// console.log(guessTheNumber(2));

// function getArray(num) {
//   let res =[];
//   for (let i = 1; i <= num; i++) {
//     res.push(i);
//   }
//   return res;
// }

// console.log(getArray(10));

// function doubleArray(arr) {
//  return arr.concat(arr);
// }

// console.log(doubleArray([1,2,3])) // [1,2,3,1,2,3]

// function changeCollection() {
// let res = [];
// for (let i = 0; i < arguments.length; i++) {
//   if (!Array.isArray(arguments[i])) return 'Invalid Value';
//   res.push(arguments[i].splice(1));
// }
// return res;
// }

// console.log(changeCollection([1,2,3], ['a', 'b', 'c']));

// const users = [
//   {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ];


// function filterUsers(arr, key, value) {
//   if (arr === undefined || key === undefined || value === undefined) return Error('not valid');
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) res.push(arr[i]);
//   }
//   if (res.length === 0) return 'Nothing found';
//   return res;
// }

// console.log(filterUsers(users, "age", 36));

// function firstFunc(arr, fn) {
//   let res = 'New value: ';
//   for (let i = 0; i < arr.length; i++) {
//     res += fn(arr[i]);
//   }
//   return res;
// }

// function handler1(el) {
//   return el[0].toUpperCase() + el.slice(1);
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//   return el * 10 +",";
// }

// console.log(firstFunc([10, 20, 30], handler2) )

// function handler3(el) {
//  return `${el['name']} is ${el["age"]}, `
// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//   return el.split('').reverse().join("")+', ';
// }

// console.log(firstFunc(['abs', '123'], handler4));

// function every(arr, fn) {
//   if (!Array.isArray(arr) || typeof fn !== 'function') return Error('ssss');
//   let res = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (!fn(arr[i], i, arr)) return false;
//   }
//   return res;
// }

// function check (el, i, arr) {
//   return el > 5;
// }

// console.log(every([1,2,6], check));

// Вопросы к этому заданию

// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {
//   width:5, 
//   height:6, 
//   getSquare: function () {
//     return this.width * this.height;
//   }};

// console.log(rectangle.getSquare());

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
// price: 10,
// discount: '15%',
// getPrice: function () {
//   return this.price;
// },
// getPriceWithDiscount: function() {
//   let price = this.price;
//   let disc = parseInt(this.discount)/100;
//   return price - (price * disc);
// } };
// console.log(price.getPriceWithDiscount());
 // 10
 // 8.5

// Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:

// let object = {
//   height: 5,
//   inc: function () {
//     return this.height += 1;
//   }
// }

// object.height = 10;

// console.log(object.inc()); // придумать свое название для метода
// console.log(object.height); // 11;

// Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
// value: 1,
// double: function () {
//   this.value *=2;
//   return this;
// },
// plusOne: function () {
//   this.value +=1;
//   return this;
// },
// minusOne: function () {
//   this.value -=1;
//   return this;
// },
// }
// numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value)// 3

// Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

// let card = {
//   name: 'Apple',
//   price: 2,
//   count: 100,
//   getPrice: function () {
//     return this.price * this.count;
//   }
// }

// console.log(card.getPrice());

// // Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// // Для этого “позаимствуйте” метод из предыдущего объекта.

// let details = {
//   name: 'balls',
//   price: 4,
//   count: 23,
// }

// console.log(card.getPrice.call(details));

// // Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// console.log(getSquare.call(sizes));

// // Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
// let element = {
// height: 25,
// getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight()); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

// Переделать функцию с использованием функции-стрелки 
//(в методе reduce тоже использовать arrow function):

// function sum() {
// const params = Array.prototype.slice.call(arguments);

// if (!params.length) return 0;

// return params.reduce((prev, next) => { return prev + next; });
// }

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum()); // 0

// что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Переделать функцию с использованием функции-стрелки
// let convertToObject = (num) => ({
//       value: num,
//       isOdd: Boolean(num % 2),
// })

// console.log(convertToObject(9));

// let array = [1,2,3,5,8,9,10];

// const digit = array.map((el, i, arr) => {
//   return {
//     digit: el,
//     odd: !Boolean(el % 2)
//   }
// })

// console.log(digit);

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. 
//Если да - вернуть true.

// let array = [12, 4, 50, 1, 0, 18, 40];

// let check = array.some((el, i, arr) => el === 0);

// console.log(check);


// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true



// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

// let array = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// let word = array.sort((prev, next) => prev.index - next.index).reduce((acc, el) => {
//   return acc += el.char;
// }, '');

// let word = array.reduce((acc, el) => {
//   return acc[el.index] = el.char;
// }, '');

// console.log(word);

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
// Есть массив объектов:
// let items =[
// {cpu: 'intel', info: {cores:2, сache: 3}},
// {cpu: 'intel', info: {cores:4, сache: 4}},
// {cpu: 'amd', info: {cores:1, сache: 1}},
// {cpu: 'intel', info: {cores:3, сache: 2}},
// {cpu: 'amd', info: {cores:4, сache: 2}}
// ];

// let sortedItems = items.sort((prev, next) => prev['info']['cores'] - next['info']['cores'])


// console.log(sortedItems)
// Отсортировать их по возрастающему количеству ядер (cores).



//3. Создать функцию, которая будет принимать массив продуктов и две цены. 
//Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, 
//и сортировать от дешевых к дорогим:

// let products = [
// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// function filterCollection (arr, a, b) {
//   return arr.sort((prev, next) => prev.price - next.price).filter((el) => el.price >= a && el.price <= b);
// }



// console.log(filterCollection(products, 15, 30))

// function minus (a) {
//   return function (b) {
//     return (a || 0) - (b || 0);
//   }
// }

// console.log(minus(10)(6)) // 4
// console.log(minus(5)(6)) // -1
// console.log(minus(10)()) // 10
// console.log(minus()(6)) // -6
// console.log(minus()()) // 0

// function multiplyMaker (inc) {
//   return function (x) {
//     return inc *= x;
//   };
// }


// const multiply = multiplyMaker(2);

// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)) // 120 (12 * 10)

// let strModule = (function () {
//   let str = '';

//   function setStr (newStr) {
//     if (typeof newStr === 'number') String(newStr);
//     return str = newStr || "";
//   } 

//   function getStr () {
//     return str;
//   }

//   function getLength () {
//     return str.length;
//   }

//   function reverse () {
//     return str.split('').reverse().join('');
//   }

//   return {
//     setStr,
//     getStr,
//     getLength,
//     reverse
//   };
// }());

// console.log(strModule.setStr('asdsad'));
// console.log(strModule.getLength());
// console.log(strModule.setStr('sad'));
// console.log(strModule.getLength());
// console.log(strModule.reverse());

// let calc = (function() {
// let base = 0;

// function setNum (num) {
//   if (typeof num !== "number" && isNaN(num)) return Error('Invalid value');
//   base = num;
//   return this;
// }

// function plus (num) {
//   base += num;
//   return this;
// }
// function minus (num) {
//   base -= num;
//   return this;
// }
// function multiply (num) {
//   base *= num;
//   return this;
// }
// function expo (num) {
//   base = Math.pow(base, num);
//   return this;
// }
// function div (num) {
//   base = base / num;
//   return this;
// }
// function getNum () {
//   return base;
// }

// return {
//   setNum,
//   plus, 
//   minus, 
//   multiply, 
//   expo, 
//   div, 
//   getNum
// }

// }());

// console.log(calc.setNum(2).plus(5).expo(5).getNum());


let arr = [1, 8, 5, 7, 2, 3, 0];

let res = arr.sort((prev, next) => prev - next);

console.log(res);