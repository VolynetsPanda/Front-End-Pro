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
// var fields = ['a', 'b', 'c', 'd']
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
//         createBtn('button', 'btn', i + 1 + fields[i])
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












