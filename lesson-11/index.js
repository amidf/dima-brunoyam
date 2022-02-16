// Функции для взаимодействия с пользователем

// alert
// alert("Hello World")

// const userName = "John"

// alert(`Hello ${userName}`)

// prompt
// const userName = +prompt("Введите имя")

// console.log(typeof userName)
// alert(`Привет ${userName}`)

// confirm
// const isAdult = confirm("Вам есть 18 лет?")

// alert(isAdult)

/*
    При загрузке страницы открывается модальное окно prompt, где пользователь должен ввести свой возраст. Дальше мы должны вывести сообщение через alert "Добро пожаловать", если пользователю уже есть 18 лет, иначе вывести "Вход запрещен".
*/

// while (true) {
//     const password = prompt("Введите пароль")

//     if (password && password.length >= 6) {
//         alert("Пароль введен")
//         break;
//     }
// }

// Массивы (arrays)

// Создание пустого массива
// const fruits = []

// console.log(fruits)
// console.log(fruits.length)

// const fruits = ["Apple", "Qiwi", "Banana"]

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// console.log(fruits[100])

// fruits[0] = "Strawberry"

// console.log(fruits)

// fruits[3] = "Orange"

// console.log(fruits)

// pop и push (конец массива)
// console.log(fruits.pop())

// fruits.push("Strawberry", "Blueberry", "Lemon", "Melon")
// console.log(fruits)

// shift и unshift (начало массива)
// console.log(fruits.shift())

// fruits.unshift("Strawberry", "Blueberry", "Lemon", "Melon")
// console.log(fruits)

// const fruits = ["Apple", "Qiwi", "Banana"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// const num = [2, 5, 3, 7]

// console.log(num)

// for (let i = 0; i < num.length; i++) {
//     num[i] = num[i] + 2
// }

// console.log(num)

// const num = [2, 5, 3, 7, 3]
// let index = null

// for (let i = 0; i < num.length; i++) {
//     if (num[i] === 3) {
//         index = i
//         break
//     }
// }

// console.log(index)

/*
    У вас есть массив чисел num = [4, 9, 1, 3, 7, 8].
    Создайте переменные max и min.
    Затем найдите наибольшее значение в массиве и сохраните его в переменную max.
    Затем найдите наименьшее значение в массиве и сохраните его в переменную min.
*/

/*
    1. Создаем переменные.
    2. Запускаем цикл for
        2.1 Если num[i] больше, чем max, то max = num[i]
        2.2 Если num[i] меньше, чем min, то min = num[i]
    3. Вывести max и min в консоль
*/

// const num = [4, 9, 1, 3, 7, 8]
// let max = num[0]
// let min = num[0]

// for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]
//     }

//     if (num[i] < min) {
//         min = num[i]
//     }
// }

// Функции - готовые части кода, которые можно вызвать в любом месте программы

/*
    function имя_функции() {
        код функции
    }
*/

// Объявление функции

// Function Declaration
// sayHello() // -> not error

// function sayHello() {
//     alert("Hello World")
// }

// Вызов функции
// sayHello()
// sayHello()
// sayHello()

// Function Expression
// sayHello() // -> error

// const sayHello = function() {
//     alert("Hello World")
// }

// function sayHello(name = "Anonymous", age = "unknown") {
//     console.log(`Hello ${name}, you're ${age} years old.`)
// }

// sayHello("John") // -> "Hello John"
// sayHello("Tom", 35) // -> "Hello Tom"
// sayHello()

// function getMaxValue(arr = []) {
//     let max = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return max
// }

// function getMinValue(arr = []) {
//     let min = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }

//     return min
// }

// getMaxValue([3, 12, 52, 1, 5])
// getMaxValue([0, 1, -10, -3, 7])

// getMinValue([3, 12, 52, 1, 5])
// getMinValue([0, 1, -10, -3, 7])

// const result = getMinValue([3, 12, 52, 1, 5])

// console.log(`result: ${result}`)

// function checkAge(age) {
//     return age >= 18
// }

// const age = +prompt("Ваш возраст?")
// const isAdult = checkAge(age)

// console.log(isAdult)

/*
    Создайте функцию getEvenNumbers, которая принимает на вход массив arr и выводит в консоль все четные числа.

    Примеры вызова функций:
    getEventNumbers([1, 5, 1, 3, 2]) // -> 2
*/

// function getEventNumbers(arr = []) {
//     for (;;) {
//         // ... какой-то код
//     }
// }

/*
    Создайте функцию removeNegative, которая принимает на вход массив arr и возвращает новый массив со всеми неотрицательными значениями из arr.

    Примеры вызова функций:
    removeNegative([2, -5, 1, -2, -10]) // -> [2, 1]
    removeNegative([-1, -2, 3, 4]) // -> [3, 4]
*/

// function removeNegative(arr = []) {
//     const result = []

//     for (?) {
//         if (?) {
//             result.push(?)
//         }
//     }

//     return result
// }

// Стрелочные функции (arrow functions)

// const sayHello = () => {
//     alert("Hello World")
// }

// const sayHello = (name = "John", age, sex) => alert("Hello World")
// const func = () => 1 > 0 + 10 * 5

// const getNumber = () => 10
// const getNumber = () => {
//     return 10
// }

// console.log(getNumber())

// sayHello()