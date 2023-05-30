const block = document.querySelector('.block')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

let count = 1

function block2() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <<span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
        })
}

nextBtn.onclick = () => {
    count++
    block2()
}

prevBtn.onclick = () => {
    count--
    block2()
}



fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json()
        .then((data) => {
            console.log(data)
        }))
