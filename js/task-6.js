// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>


// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// На що буде звертати увагу ментор при перевірці:

// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes за одну операцію додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createButton = document.querySelector("button[data-create]")
const destroyButton = document.querySelector("button[data-destroy]")
const controls = document.querySelector('#controls')
const boxes = document.querySelector('#boxes')
// console.log(boxes)




function createBoxes(amount) {
  let size = 30
  const fragment = document.createDocumentFragment()
for (let i = 0; i < amount; i++) {
  const newBox = document.createElement('div')
   newBox.style.height = `${size}px`,
  newBox.style.width =  `${size}px`,
  newBox.style.backgroundColor = getRandomHexColor()
 fragment.append(newBox);  
 size +=10
}
boxes.append(fragment)
}

createButton.addEventListener('click', addBox)

function addBox (evt) {
 boxes.innerHTML = ''
  const amount = controls.firstElementChild.value
  if(amount>=1 && amount <=100) {
    createBoxes(amount)
  }
}

destroyButton.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = ""
}









