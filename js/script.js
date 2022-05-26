// var btn = document.querySelector('.btn');
// btn.onclick = function (){
//     myConsole('Petya')
//     // return false
// }
// // btn.onclick = myConsole
//
// function myConsole(){
//     console.log('vasya test' )
// }
// btn.onclick = function (){
//     console.log('vasya test')
// }
// btn.onclick = function (){ //done
//     console.log('petya test')
// }
// btn.addEventListener('click', function (){
//     console.log('vasya test')
// })
// var opt = {
//     "capture": false,
//     "once": false,
//     "passive": false
// }
// btn.addEventListener('click', function (e){
//     // console.log('event => ', e.target)
//     // console.log('event => ', e.currentTarget)
//     console.log('event => ', e.which)
// }, opt)
// var wrap = document.querySelector('.wrap');
// var btn = document.querySelector('.btn');
// var span = document.querySelector('span');
// function myConsole(){
//     console.log('vasya test' )
//     // wrap.removeEventListener('click', myConsole)
// }
// wrap.addEventListener('click', myConsole, {"once": false})
// wrap.addEventListener('click', function (e){
//     console.log('wrap => lvl 1')
// })
// // btn.addEventListener('click', function (e){
// //     console.log('btn => lvl 2')
// // }, {"capture": true})
// btn.addEventListener('click', function (e){
//     console.log('btn => lvl 2')
// })
// span.addEventListener('click', function (e){
//     console.log('span => lvl 3')
//     // e.stopPropagation()
// })
// var btn = document.querySelectorAll('.btn');
// function myConsole(i){
//     console.log('vasya => ', i)
// }
// console.log(btn)
// btn.forEach(function (elem, i){
//     elem.addEventListener('click', function (){
//         myConsole(i)
//     })
// })
// var wrap = document.querySelector('.wrap');
// function toggleBlock(elem){
//     // elem.classList.toggle('active')
//     console.log(elem.hidden)
//     elem.hidden = !elem.hidden
// }
// wrap.addEventListener('click', function (e){
//     // var elem = e.target.matches('.btn')
//     e.preventDefault()
//     var elem = e.target.closest('.btn')
//     var block = document.querySelector('.block');
//     if (elem) {
//         toggleBlock(block)
//         console.log(elem.textContent)
//     } else {
//         block.hidden = true
//     }
// })
// var fields = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// var col = 0
// function createBtn(tag, clName, text){
//     var btn = document.createElement(tag);
//     btn.className = clName;
//     btn.innerHTML = text;
//     btn.setAttribute('data-id', text)
//     var wrap = document.querySelector('.wrap');
//     wrap.append(btn)
// }
// for (var i = 0; i<fields.length; i++) {
//     for(var j = 0; j<fields.length; j++) {
//         createBtn('button', 'btn', `${j + 1}-${fields[i]} (${col})`)
//         col++;
//     }
// }
// var wrap = document.querySelector('.wrap');
// document.addEventListener('click', function (e){
//     var elem = e.target;
//     var check = elem.matches('.btn');
//     if (check) {
//         console.log(elem.dataset.id)
//     }
// })
// var btn = document.querySelector('.btn');
// btn.addEventListener('mousedown', function (e){
//     console.log('mousedown', e)
// })
// btn.addEventListener('mouseup', function (e){
//     console.log('mouseup', e)
// })
// btn.addEventListener('click', function (e){
//     console.log('click', e)
// })
// btn.addEventListener('contextmenu', function (e){
//     console.log('contextmenu', e)
// })
// var block = document.querySelector('.block');
// // var wrap = document.querySelector('.wrap');
// block.addEventListener('mouseover', function (e){
//     var target = e.target.closest('span');
//     console.log(target)
//     if (!target) return;
//     target.style.cssText = 'background: red;'
// })
// block.addEventListener('mouseout', function (e){
//     var target = e.target.closest('span');
//     if (!target) return;
//     target.style.cssText = 'background: orange;'
// })
// var block = document.querySelector('.block');
// var x = document.querySelector('.x');
// var y = document.querySelector('.y');
// var opt = {
//     move: false,
//     down: false,
//     up: false
// }
// block.addEventListener('mousemove', function (e){
//     var target = e.target.closest('span');
//     if(target && opt.down){
//         target.style.left = e.clientX - (target.offsetWidth / 2) + 'px';
//         target.style.top = e.clientY - (target.offsetHeight / 2) + 'px';
//     }
//     x.innerHTML = e.clientX
//     y.innerHTML = e.clientY
//     // x.innerHTML = e.pageX
//     // y.innerHTML = e.pageY
// })
// block.addEventListener('mousedown', function (e){
//     var target = e.target.closest('span');
//     if(target){
//         opt.down = true
//         target.style.position = 'fixed'
//     }
// })
// block.addEventListener('mouseup', function (e){
//     opt.down = false
// })
// var block = document.querySelector('.block');
// console.log(block.getBoundingClientRect())
// console.log(window.innerHeight)
// document.addEventListener('keydown', function (e){
//     console.log(e.code, " - ", e.key)
// })
// var count = document.querySelector('.count')
// var text = document.querySelector('.text')
// document.addEventListener('keyup', setTextCount)
// document.addEventListener('keydown', function (e){
//     if(e.repeat) setTextCount()
// })
//
// function setTextCount(){
//     count.innerHTML = text.value.length
// }
// var step = 10;
// document.addEventListener('keydown', function (e){
//     var car = document.querySelector('.car');
//     var wCar = car.getBoundingClientRect().width;
//     var lCar = car.getBoundingClientRect().left;
//     var tCar = car.getBoundingClientRect().top;
//     if(e.code === "KeyD"){
//         console.log(window.innerWidth, lCar)
//         car.style.left = lCar >= window.innerWidth - wCar - step
//             ? window.innerWidth - wCar + 'px'
//             : lCar + step + 'px'
//         car.style.transform = 'rotate(180deg)';
//     } else if(e.code === "KeyA"){
//         car.style.left = lCar < 0 ? 0 + 'px' : lCar - step + 'px'
//         car.style.transform = 'rotate(0deg)';
//     }
// })
// window.addEventListener('scroll', function (e){
//     console.log(scrollY + innerHeight)
// })

// document.addEventListener('DOMContentLoaded', function (e){
//     var car = document.querySelector('.car')
//     console.log('1', document.readyState)
//     console.log(car)
//     console.log('2', document.readyState)
//     console.log(car.getBoundingClientRect().width)
//     console.log('2', document.readyState)
// })
// window.addEventListener('load', function (e){
//     console.log('test')
//     var car = document.querySelector('.car')
//     console.log('1', document.readyState)
//     console.log(car)
//     console.log('2', document.readyState)
//     console.log(car.getBoundingClientRect().width)
//     console.log('2', document.readyState)
// })
// window.onload = function (){
//     console.log('test')
// }

// FORMS
// var testForm = document.forms
// console.log(testForm)
//
// var testForm2 = document.querySelectorAll('form')
// console.log(testForm2)
//
// document.body.insertAdjacentHTML(
//     "beforeend",
//     '<form action="" name="aaaa"></form>'
// )
//
// Array.prototype.slice.call(testForm).forEach(function (elem) {
//     console.log(elem)
// })
var testForm = document.forms.testForm
var elem = testForm.select
// // // elem.value = 'sdsasdas'
// // console.log(elem.options)
// // console.log(elem.options[elem.selectedIndex].value)
// Array.prototype.slice.call(elem.options).forEach(function (elem) {
//     console.log(elem.value, elem.text)
//     // if(elem.value == 10) elem.selected = true
// })
// console.log(elem.options)
// var myOption = new Option('Galya', '10000', false, false)
//
// elem.append(myOption)
// var arr = Array.from(elem.options)
//     .filter(function (item ){
//         return item.selected
//     }).map(function (item){
//         return item.text
//     })
// console.log(arr)

// var pl1 = [1,2,3],
//     pl2 = [],
//     win = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//         [1,4,7],
//         [2,5,8],
//         [3,6,9],
//         [1,5,9],
//         [3,5,7]
//     ];








