// object (объект)
// const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"]

// const weekDays = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вск" }

// console.log(weekDays[1])
// console.log(weekDays[2])
// console.log(weekDays[3])

// const obj = {
//  
// }

// const userFirstName = "John"
// const userLastName = "Smith"

// const user2FirstName = "Tom"
// const user2LastName = "Smith"

// const user = {
//     firstName: "John",
//     lastName: "Smith"
// }

// console.log(user.firstName)
// console.log(user.lastName)

// const obj = {
//     key1: 5,
//     key2: "Hello World",
//     key3: true,
//     key4: undefined,
//     key5: [1, 2, 3],
//     key6: function() {
//         console.log('it is a method')
//     },
//     key7: {
//         subKey: "Sub field"
//     }
// }

// const arr = []

// arr.length
// arr.push(2)

// const user = {
//     firstName: "John",
//     lastName: "Smith",
//     city: "New York"
// }

// console.log(user.city)

// delete user.lastName

// user.city = 18

// console.log(city)

// console.log(user)

// user.firstName = "Tom"

// console.log(user.firstName)
// console.log(user.age)

// console.log(user["first name"])
// console.log(user.lastName)

// const rabbit = {
//     name: "Rabbit",
//     child: {
//         name: "Rabbit 2"
//     },
//     eats() {
//         console.log("I am eating")
//     }
// }

// console.log(rabbit.child.name)

// const currentUser1 = {
//     firstName: "John",
//     lastName: "Smith",
//     printName() {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

// const rabbit = {
//     food: true,
//     eats() {
//         this.food = false
//     }
// }

// currentUser1.printName()

/*
    Создайте объект person, у которого есть следующие свойства:
        - name - имя человека,
        - age - возвраст человека,
        - country - страна человека,
*/

/*
    1. Создайте пустой объект user.
    2. Добавьте поле name в объект user и сохраните туда значение "Pete"
    3. Добавьте поле surname в объект user и сохраните туда значение "Smith"
    4. Измените значение поля name на "John"
    5. Удалите поле surname
*/

// DOM - Document Object Model (Объектная модель страница)

// document.querySelector - ищет один элемент
// const title = document.querySelector("#main")

// console.log(title)

// document.querySelectorAll - ищет все элементы
// const listItems = document.querySelectorAll("li, h2")

// console.log(listItems)

// Содержимое элемента
// const h2 = document.querySelector('h2')

// textContent
// console.log(h2.textContent)

// innerHTML
// console.log(h2.innerHTML)

// h2.textContent = "<i>My Hello World</i>"
// h2.innerHTML = "<i>My Hello World</i>"

// Атрибуты
// const link = document.querySelector('a')

// node - HTML-объект

// node.getAttribute("имя атрибута")
// console.log(link.getAttribute("href"))
// console.log(link.getAttribute("target"))
// console.log(link.getAttribute("title"))

// node.setAttribute("имя атрибута", "значение атрибута")
// link.setAttribute("href", "https://google.com")
// link.setAttribute("title", "Hint")

// node.removeAttribute("имя атрибута")
// link.removeAttribute("target")

// Классы

// node.classList.add() - добавляет класс или классы 
// link.classList.add("external-link-2")
// link.classList.add("class1", "class2")

// node.classList.remove() - удаляет класс или классы 
// link.classList.remove("class1")
// link.classList.remove("class2", "external-link")

// node.classList.toggle() - переключает класс
// link.classList.toggle("active")

// node.classList.contains() - проверяет есть класс у элемента, если есть возвращает true, иначе false
// console.log(link.classList.contains("active"))

/* 
    Добавьте на вашу страницу такой HTML:
    <p>Text 1</p>
    <p class="error">Text 2</p>
    <p>Text 3</p>

    С помощь JS измените текст элемента с классом "error" на "It is error message".
*/

/*
    Добавьте на вашу страницу такой HTML:
    <div id="block">
        <p>1</p>
        <p>2</p>
    </div>

    Сохраните ссылку на второй <p> в переменную и выведите её в консоль. 
*/

// const h1 = document.querySelector('h1')

// h1.style.color = "red"
// h1.style.border = "2px solid blue"

// const listItems = document.querySelectorAll("li")

// console.log(listItems)

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = "red"
// }

/* 
    Дан следующий HTML:
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>

    1. Получить массивом все элементы <li>, используя document.querySelectorAll
    2. Добавить к содержимому каждого <li> элемента строку "My Text", так чтобы у вас получился следующий HTML:

    <ul>
        <li>Item 1 My Text</li>
        <li>Item 2 My Text</li>
        <li>Item 3 My Text</li>
        <li>Item 4 My Text</li>
        <li>Item 5 My Text</li>
    </ul>
*/

// Создание элементов

// document.createElement("имя тега") - создает новый HTML объект

// const message = document.createElement("p")

// message.textContent = "My new paragraph"

// append() - помещает элемент в указанный элемент

// document.body.append(message)

// prepend() - помещает элемент в начало

// document.body.prepend(message)

// const list = document.querySelector("ul")

// for (let i = 0; i < 5; i++) {
//     const listItem = document.createElement("li")

//     listItem.textContent = `Item ${i}`
//     list.append(listItem)
// }

// Удаление элементов
// const list = document.querySelector("ul")

// remove() - удаляет данный элемент
// list.remove()

/*
    Используя только JavaScript создайте полностью таблицу, которая будет выглядеть так:

    <table border="1">
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
    </table>
*/

function delElem(numbers, value) {
    const newNumbers = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== value) {
            // ...
        }
    }

    return newNumbers
}

delElem([1, 2, 3, 3, 3], 3) // => [1, 2]