// var reg1 = /vasya/igm
// var reg2 = new RegExp('vasya', 'igm')
// function check(str, reg){
//     return reg.test(str)
// }
// console.log(check('My name is Vasya', /vasya/igm))
// var str = 'My name is Vasya vasya';
// var reg = /vasya/ig
// console.log(str.match(reg))
// var str = `1 Vasya
// 2 vasya
// 3 vasya`;
// var str = '1 Vasya \n2 vasya \n3 vasya'
// var reg = /^\d/gm
// console.log(str.match(reg))
// var str = 'My name is Vasya vasya';
// var reg = /vasyya/ig
// var test = str.match(reg) || []
// console.log(test.length)
// // console.log(str.match(reg))
// console.log(reg.test(str))
// console.log(str.replace(reg, 'petya'))
// \d - 0-9
// \w - a-z0-9_
// \s - space
// \D - !0-9
// \W - !a-z!0-9!_
// \S - !space
// . - !\n
// \b
// var str = "My name is vasya.s";
// var reg = /\bvasya\b/g
// console.log(reg.test(str))
// var reg1 = /\^\$\../igm
// var reg2 = new RegExp('\\^\\$\\.', 'igm')
// var str = "My name is vasya^$."
// console.log(reg1.test(str))
// var reg1 = /([a-zа-яё\.\d])/ig
// var str = "My name is vasya^$."
// console.log(reg1.test(str))

//^
//$
// var reg1 = /[0-9]$/ig
// var str = "+My name is vasya0"
// console.log(reg1.test(str))
// var reg1 = /\d?/ig
// var reg1 = /\d{1,3}/ig
// var str = "656565"
// console.log(reg1.test(str))
// {n}
// {n, m}
// {n,}

// {0,} *
// {0, 1} ?
// {1,} +

// var str = "My name is vavasya vasya"
// var reg1 = /(va){1,}/g
// console.log(reg1.test(str))
// console.log(str.match(reg1))
// var str = "My name is vavasya vasya"
// var str = "+38067984214"
// var reg1 = /(\+380)(\d){9}/g
// console.log(reg1.test(str))
// console.log(str.match(reg1))

// var str = 'Eugene Volynets'
// console.log(str.replace(/(\w+)/,
//     '$2 $1'))

// var str = 'EUGENE Volynets'
// var reg1 = /[A-Z]{2,}/g
// console.log(str.match(reg1))

// var str = 'GENE lynets0'
// var reg1 = /EU|Vo|\d/
// console.log(reg1.test(str))
// console.log('  Te  st  '.trim())


// ---------------------------------
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
for (let i = 0; i < 5; i++){
    console.log(i)
}
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




