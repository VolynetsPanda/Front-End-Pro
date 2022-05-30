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

var reg1 = /([a-zа-яё\.\d])/ig
var str = "My name is vasya^$."
console.log(reg1.test(str))


