// const xhr = new XMLHttpRequest();
const status = {
  '200': true,
  '201': true,
  '203': true
}
const pagination = {
    limit: 20,
    offset: 20,
    page: 1
}
// let users = []
let url = 'https://pokeapi.co/api/v2/'
// xhr.open('GET', `${url}pokemon`)
// //-------- POST ------
// // let user = {
// //     name: 'Vasya',
// // }
// // let formData = new FormData(user);
// // formData.append('name', 'Vasya')
// // xhr.setRequestHeader('X-Auth', 'Bearer ghfdgh')
// // xhr.setRequestHeader('Content-Type', 'application/json;')
// //--------------
// xhr.send()
// // xhr.send(JSON.stringify(formData))
const wb = document.querySelector('.wrap-btn')
const info = document.querySelector('.info')
const link = document.querySelectorAll('.pagination')
const createElem = (tag, append, src = null, text = null, api = null) => {
    let elem = document.createElement(tag)
    if(src){
        elem.src = src
        elem.alt = text
        elem.title = text
    }
    if(!src && text){
        elem.innerHTML = text
    }
    if(api){
        elem.addEventListener('click', () => {
            fetch(api)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    const { sprites = {}, species = {} } = res
                    const { front_default } = sprites
                    const { name  } = species
                    console.log(front_default)
                    info.innerHTML = ''
                    createElem('h3', info, null, name)
                    createElem('img', info, front_default, name)
                })
        })
    }

    append.append(elem)
}
// const render = (arr) => {
//     users = arr
//     arr.forEach(el => {
//         createElem('p', document.body, null, el.name)
//     })
//     console.log(users)
// }
// xhr.onload = function (){
//     if(status[xhr.status]){
//         let data = JSON.parse(xhr.response)
//         let { results } = data
//         render(results)
//         // users = results
//         results.forEach(el => {
//             createElem('p', document.body, null, el.name)
//         })
//         // console.log(results)
//     } else {
//         console.log('error', xhr.response)
//     }
// }
// setTimeout(() => {
//     console.log(users)
// }, 2000)
const apiRequest = () => {
    let customLink = `?limit=${pagination.limit}&offset=${pagination.offset * pagination.page}`
    fetch(`${url}pokemon${customLink}`)
        // .then( async res => {
        //     const { results } = await res.json()
        //     results.forEach(el => {
        //         createElem('p', document.body, null, el.name)
        //     })
        //     console.log(results)
        // })
        .then(res => res.json())
        .then(res => {
            const {results} = res
            results.forEach(el => {
                createElem('button', wb, null, el.name, el.url)
            })
            console.log(results)
        })
}
link.forEach(elem => {
    elem.addEventListener('click', function (e){
        e.preventDefault()
        wb.innerHTML = ''
        pagination.page = elem.getAttribute('data-id')
        apiRequest()
    })
})
apiRequest()
