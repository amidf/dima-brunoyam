// События браузера (load, unload)
// События мыши (click, dbclick, mouseenter, mouseleave)
// События клавиатуры (keyup, keydown)
// События формы (input, change, focus, blur, submit)
// Другие ...

// function sayHello() {
//     console.log("Hello World")
// }

// function sayGoodbye() {
//     console.log("Goodbye World")
// }

// const btn = document.querySelector('button')

// Обработчик события через свойство объекта
// btn.onclick = sayHello
// btn.onclick = sayGoodbye

// Добавление обработчика через addEventListener и removeEventListener
// btn.addEventListener("click", sayHello)
// btn.addEventListener('click', sayGoodbye)

// btn.addEventListener('dblclick', function() {
//     console.log("It is double click")
//     btn.removeEventListener("click", sayHello)
// })

// btn.addEventListener('contextmenu', function() {
//     console.log("It is right click")
// })

// removeEventListener
// btn.removeEventListener("click", sayHello)

/*
    У вас есть следующий HTML:
    <p>Это простой текст</p>

    Сделайте так, чтобы при клике (click) на этот параграф он становился красного цвета.
*/

/*
    Возьмем HTML код из предыдущего задания.

    Теперь добавьте для элемента <p> обработчик события click, чтобы при нажатии на элемент перключался класс "active".

    То есть если пользователь кликает на элемент <p> и у него нету класса "active", то мы добавляем этот класс, иначе мы наоборот этот класс удаляем.
*/

/*
    Дан такой код:
    <input type="text" class="firstNumber">
    <input type="text" class="secondNumber">

    <button class="actionBtn">Caclulate</button>
    <p class="result"></p>

    При нажатии на кнопку Caclulate сделайте вывод результата суммы числа введенного из первого input и числа из второго input.
*/

// const btn = document.querySelector('.actionBtn')
// const p = document.querySelector('.result')

// btn.addEventListener('click', function() {
//     const firstNumber = document.querySelector('.firstNumber')
//     const secondNumber = document.querySelector('.secondNumber')

//     p.textContent = Number(firstNumber.value) + Number(secondNumber.value)

//     firstNumber.value = ""
//     secondNumber.value = ""
// })

// События формы

// const input = document.querySelector('.password')

// Cобытие - input
// input.addEventListener('input', function(event) {
//     if (event.currentTarget.value.length >= 6) {
//         event.currentTarget.classList.remove('invalid')
//     } else {
//         event.currentTarget.classList.add('invalid')
//     }
// })

// Событие - change
// input.addEventListener('change', function() {
//     console.log('change', input.value)
// })

// Событие - focus
// input.addEventListener('focus', function() {
//     console.log('focus')
// })

// Событие - blur
// input.addEventListener('blur', function() {
//     console.log('blur')
// })

// События клавиатуры

// Событие - keydown
// document.body.addEventListener('keydown', function() {
//     console.log('keydown')
// })

// Событие - keyup
// document.body.addEventListener('keyup', function() {
//     console.log('keyup')
// })

// Объект события (Event и EventTarget)
// document.body.addEventListener('keyup', function(event) {
//     console.log('code', event.code)
//     console.log('key', event.key)
// })

const div = document.querySelector('div')

document.body.addEventListener('keydown', function(event) {
    console.log('code', event.code)

    console.log('top', div.style.top)
    console.log('left', div.style.left)

    const top = Number(div.style.top.replace("px", ""))
    const left = Number(div.style.left.replace("px", ""))

    switch (event.code) {
        case "ArrowUp":
            {
                div.style.top = `${top - 10}px`

                break
            }
        case "ArrowDown":
            {
                div.style.top = `${top + 10}px`

                break
            }
        case "ArrowLeft":
            {
                div.style.left = `${left - 10}px`

                break
            }
        case "ArrowRight":
            {
                div.style.left = `${left + 10}px`

                break
            }
    }
})

// const btn = document.querySelector('button')

// btn.addEventListener('click', function(event) {
//     console.log('currentTarget', event.currentTarget)
//     console.log('target', event.target)
// })

// const div = document.querySelector('div')
// const p = document.querySelector('p')
// const b = document.querySelector('b')

// div.addEventListener('click', function() {
//     console.log('был нажат div')
// })

// p.addEventListener('click', function() {
//     console.log('был нажат p')
// })

// b.addEventListener('click', function(event) {
//     event.stopPropagation()
//     console.log('был нажат b')
// })

// Bubbling (всплытие)

// const listItems = document.querySelectorAll('li')

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function() {
//         listItems[i].remove()
//     })
// }

// const list = document.querySelector('ul')

// list.addEventListener('click', function(event) {
//     event.target.remove()
// })

// document.body.addEventListener('contextmenu', function(event) {
//     event.preventDefault()
//     console.log("right click")
// })

// const link = document.querySelector('a')

// link.addEventListener('click', function(event) {
//     event.preventDefault()
// })

/*
    To Do List
    У вас дан HTML:
    <input type="text" class="task">

    <ul class="tasks-list">
    </ul>

    Когда пользователь ввел какой-то текст в input и нажал клавишу Enter, то нужно создать новый li элемент, у которого содержимое это значение из input.

    Дополнительно:
    - очистка поля после нажатия Enter;
    - игнорирование пустого input;
*/

document.body.addEventListener('keydown', function(event) {
    console.log(event.key)
})