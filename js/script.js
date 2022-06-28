// // let users = [
// //     // {
// //     //     name: 'Vasya'
// //     // },
// // ]
//
// // sessionStorage.setItem('user', JSON.stringify(users))
//
// let users = JSON.parse(sessionStorage.getItem('users'))
// if(!users){
//     users = [{ name: `Vasya-0`}]
// } else {
//     users.push({ name: `Vasya-${Date.now()}`})
//     console.log('test', users)
// }
// sessionStorage.setItem('users', JSON.stringify(users))
// let createNode = (name) => {
//     let btn = document.createElement('button')
//     btn.innerHTML = name
//     btn.addEventListener('click', () => {
//         console.log(name)
//         let index = 0
//         users.forEach((elem, i) => {
//             if (elem.name === name) {
//                 index = i
//             }
//         })
//         console.log(index)
//         users.splice(index, 1)
//         sessionStorage.setItem('users', JSON.stringify(users))
//         myRender()
//     })
//     document.body.append(btn)
// }
// const myRender = () => {
//     document.body.innerHTML = ''
//     users.forEach((elem) => {
//         createNode(elem.name)
//     })
// }
// // myRender()
// let test = [
//     {task: 'to do', id: 1, done: false}
// ]

let a = 10;
// setTimeout(() => {
//     a = 100;
// }, 2000);
// console.log(a)

let test = new Promise((resolve, reject) => {
    resolve(a + 100)
    reject('error')
})

test.then((res) => {
    console.log(res)
    a = res * a
}).then(res => {
    console.log(a)
})
