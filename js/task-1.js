
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const liItemAll = document.querySelectorAll(".item");
console.log("Number of categorie: " + liItemAll.length)

liItemAll.forEach (item => {
    const title = item.querySelector("h2").textContent;
    const count = item.querySelectorAll("li");

console.log(`Category: ${title}`);
console.log(`Elements: ${count.length}`)
    
})