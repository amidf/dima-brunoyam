// XMLHttpRequest

// Создание объекта-запроса
// const xhr = new XMLHttpRequest()

// xhr.open('GET', "https://api.github.com/ze")

// xhr.send()

// xhr.addEventListener('load', function() {
//     console.log(xhr)

//     // JSON.parse - превращает JSON-строку в JavaScript объект
//     // JSON.stringify - превращает JavaScript объект или массив в JSON строку


//     if (xhr.status === 200) {
//         console.log(`Success: ${xhr.response}`)
//     } else {
//         const res = JSON.parse(xhr.response)
//         console.log(`Failure: ${res.message}`)
//     }

// })

// xhr.addEventListener('error', function() {
//     console.log('error')
// })

// const xhr = new XMLHttpRequest()

// xhr.open('POST', "https://api.github.com/user/repos")

// xhr.setRequestHeader('Authorization', 'Bearer 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')

// const repoInfo = {
//     name: "test-api-github-2",
//     description: "It is my repository"
// }

// xhr.send(JSON.stringify(repoInfo))

// xhr.addEventListener('load', function() {
//     const output = document.querySelector('.output')

//     output.textContent = xhr.response
// })

// fetch

// $.ajax
// $.ajax({
//     method: "GET",
//     url: "https://api.github.com/ze",
//     headers: {
//         Authorization: "Bearer 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"
//     },
//     success(result) {
//         console.log(result)
//     },
//     error(err) {
//         console.log(err)
//         console.log(err.responseJSON.message)
//     }
// })

$.ajax({
    method: 'POST',
    url: 'https://api.github.com/user/repos',
    headers: {
        Authorization: "Bearer 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"
    },
    data: JSON.stringify({
        name: "test-repo-2",
        description: "Sample Text"
    }),
    success(result) {
        console.log(result)
    },
    error(err) {
        console.log(err)
    }
})