// ES6
// let name = 'vasya'
// console.log(name)
// name = 'petya'
// console.log(name)
// let a = 10;
// function test(){
//     a = 11
// }
// test()
// for (let i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log(a)
// const b = 'fdfdfd'
// const test2 = function (){
//     let b = 'sddd'
//     console.log(b)
// }
// test2()
// const arr = []
// arr.push('rewrwerw')
// console.log(arr)
// const obj = {
//     a: 'sss'
// }
// obj.a = 'ddddd'
// obj.c = 'ddddsdsd'
// console.log(obj)

// const arr1 = [1,2,3]
// const arr2 = [1,2,3]
// const arr3 = arr1.concat(arr2)
// Array.prototype.push.apply(arr1, arr2)
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const obj1 = {
//     a: '1111',
//     b: true
// }
// const obj2 = {
//     a: '22222',
//     c: 45,
// }
// const obj3 = Object.assign(obj1, obj2, {s: arr3})
// const obj3 = {
//     ...obj1,
//     ...obj2,
//     s: arr3
//     // ...arr3
// }
// console.log(obj3)
//
// const sum = function (a,b,c){
//     console.log(a,b,c)
//     return a+b+c
// }
// console.log(sum(...arr1))

// const sum = function (...data){
//     console.log(data)
// }
// sum(...arr1, ...arr2)
// const name = 'vasya'
// const str = `Hello ${2 + 4}!`
// console.log(str)
// const test = function (text){
//     console.log(text)
// }
// const users = [
//     {name: 'Vasya'},
//     {name: 'Vasya2'},
//     {name: 'Vasya3'},
// ]
// const listUsers = users.map((elem, i) =>
//     i%2 == 0 ? `<li><a href="#" onclick="test('aaaa')">${elem.name}</a></li>` : null
// ).join('')
//
// const list = `<ul>${listUsers}</ul>`
// document.body.innerHTML = list
// // const a = `${20}px`
//
// const test = (n, m) => n + m
// console.log(test(2, 5))

// const user = {
//     name: 'Vasya',
//     age: 11,
// }
// // const arr = ['test', 1]
// // const name = user.name
// // const {name, age} = user
// // const [a, b, c] = arr
// // console.log(`${name} - ${age}!`)
// // console.log(`${a} - ${b} - ${c}!`)
// const test = ({name, age = 0, test = true}) => {
// // const test = (name, age = 100, flag = false) => {
//     console.log(`${name} - ${age} - ${test}!`)
// }
// // const vasya = user || {}
// test(user)

// const user = {
//     name: 'Vasya',
//     age: 11,
//     test: {
//         'lessons-1': 1000,
//         'lessons-2': 10000,
//         b: 3
//     }
// }
// // const user = null
// console.log(user?.['test']?.['b'])
// console.log(user['test']['b'])
// const test = (key) => {
//     console.log(user.test[`lessons-${key}`])
// }
// for(let i = 1; i <= 2; i++){
//     test(i)
// }

//-----------ООП----------
// Абстракция
// user(login/email, password, name, id, logout(), role)
// Наследование
// const user = {
//     email: '',
//     password: '',
//     name: '',
//     id: '',
//     logout: () => {},
//     role: '',
//     getListHomeWorks: () => {},
//     getListGroup: () => {},
// }
// admin(user){
//     getListGroup: () => {
//         return []
//     },
// }
// dir(admin){
//     changeGroup: (id) => {
//         return status
//     },
// }
// teacher(user){
//     addHomeWorks: () => {},
//     getListGroup: (id) => {
//          return []
//     },
// }
// students(user){
//     photo: '',
//     uploadHomeWorks: () => {},
//     getMyRank: () => {},
//     getListGroup: () => {
//         return null
//     },
// }
//
// students.getListGroup()
// teacher.getListGroup()
// admin.getListGroup()
// Инкапсуляция

const addCount = () => {
    let count = 0;
    let flag = true;
    return ({
        add: (step = 1) => {
            console.log(flag)
            if(flag) {
                if(count >= 100) flag = false;
                count += step
            }
        } ,
        remove: () => count--,
        getCount: () => count
    })
}

const test = addCount()
console.log(test.getCount())
test.add()
test.add()
test.add()
test.add()
test.add(10)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
console.log(test.getCount())




