// Доступ к jQuery
// console.log($)
// console.log(jQuery)

// Поиск элементов
// console.log($('h1'))
// console.log($('.container .item'))
// console.log($('.container .item')[0])

// Получение содержимого элемента
// console.log($('.container .item').html())
// console.log($('.container .item').text())

// Изменение содержимого элемента
// $('.container .item').html("<b>Новый текст</b>")
// $('.container .item').text("Новый текст")

// 1 вариант
// const item = $('.container .item')[0]
// $(item).text("Новый текст")

// 2 вариант
// $($('.container .item')[0]).text('Новый текст')

// 3 вариант
// $('.container .item:first-child').text("Новый текст")

// 4 вариант
// $('.container .item').each(function(i) {
//     if (i === 0 || i === 2) {
//         $(this).text("Новый текст")
//     }
// })

// const item = document.querySelector('.container .item')

// $(item).text("Новый текст")

// for (let i = 0; i < items.length; i++) {
//     items[i].textContent = "Новый текст"
// }

// Изменение атрибута style
// document.body.style.backgroundColor = "pink"

// $('.container .item').css({
//     backgroundColor: 'pink',
//     border: '1px solid blue'
// })

// $('.container .item').html('Новый текст').css({
//     backgroundColor: 'pink',
//     border: '1px solid blue'
// }).text("Новый текст 2")

// Получение атрибутов
// console.log($('h1').attr('title'))

// Изменение атрибутов
// $('h1').attr('title', 'Новое значение')
// $('.container .item').attr('title', 'Значение новое')

// Удаление атрибутов
// $('h1').removeAttr('title')
// $('.container .item').removeAttr('title')

// Добавление классов
// $('h1').addClass('heading').addClass('super-title')
// $('.container .item').addClass('my-class')

// Удаление классов
// $('h1').removeClass('super-text')

// Переключение классов
// $('h1').toggleClass('super-text')

// Оборочивание элементов (wrapping)
// $('h1').wrap('<div class="container"></div>')
// $('.container .item').wrap('<section></section>')

// Разворачивание элементов (unwrapping)
// $('div p').unwrap()

// Оборачивание всех элементов в один (wrapping all)
// $('p').wrapAll('<div class="container"></div>')

// Удаление элементов
// $('div p').remove()

// Вставка элементов на страницу

// append
// const $item = $('<div class="item"></div>')

// $('.container').append($item)

// prepend
// $('.container').prepend($item)

// before
// $('.container').before($item)

// after
// $('.container').after($item)

// Добавление обработчика события
// $('li').on('click', function() {
//     $(this).remove()
// })

// $('input').on('input', function() {
//     const value = $(this).val()

//     if (value.length < 6) {
//         $(this).addClass('invalid')
//     } else {
//         $(this).removeClass('invalid')
//     }
// })

/*
    У нас есть div, и нужно сделать так, чтобы с помощью стрелок на клавиатуре мы могли его передвигать в разные стороны.
*/