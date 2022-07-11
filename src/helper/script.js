// const a = 1
//
// function test(a, b){
//     return a + b
// }
//
// function toSum(a, b ,c){
//     const multi = test(a,b)
//     return c + multi
// }
//
// console.log(toSum(1,2,3))
//Stack
// test()
// toSum()
// fn()

// console.log(1)
// console.log(2)
// console.log(3)

// function test(){
//     return test()
// }
// test()

// console.log(1)
// alert(2)
// console.log(3)

// for (var i = 0; i < 2; i++){
//     alert(i)
// }

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// })
// console.log(3)

// setTimeout(() => {
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     setTimeout(() => {
//         console.log(4)
//     })
//     console.log(5)
//     console.log(6)
// })

// setTimeout(() => console.log(1), 3)
// setTimeout(() => console.log(2), 2)
// setTimeout(() => console.log(3), 1)

// console.log("1 => 1")
// const test = new Promise((resolve, reject) => {
//     console.log("2 => 2")
//     setTimeout(() => {
//         resolve(console.log("3 => 4"))
//         // reject(console.log("7 => "))
//     }, 0)
//     // resolve(console.log("3 => 4"))
//     console.log("4 => 3")
// }).then((res, error) => {
//     console.log("5 => 5")
// })
//
// console.log("6 => 6/2")
// for (var i = 0; i < 100000; i++){
//     console.log(i)
// }

// document.querySelector('button').addEventListener('click', () => {
//     setTimeout(() => console.log('click'), 3000)
// })

// window.addEventListener('scroll', (e) => {
//     console.log(e)
// })

// const arr = [1,2,34,5]
// console.log('a')
// arr.forEach(el => setTimeout(() => console.log(el)))
// console.log('b')

// console.log(i)
// for (var i = 0; i < 5; i++){
//     setTimeout(() => console.log(i), 1000)
// }

// console.log(i)
// for (let i = 0; i < 5; i++){
//     setTimeout(() => console.log(i), 1000)
// }
