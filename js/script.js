// String

// var str = 'Hello\n\t"Vasya!"';
// var str = "HellO Vasya!";
// str[4] = "---"
// var firstLetter = str[str.length - 1];
// console.log(str);
// console.log(firstLetter);
// var str2 = '';
// for (var i = 0; i< str.length; i++){
//     str2 += str[i].toLowerCase() === "o" ? "---" : str[i]
//     // if(str[i] === "o") str2 += "---"
//     // else str2 += str[i]
//     console.log(str[i])
// }
// console.log(str2)
// var str = "Hello Vasya!";
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// var str = "Hello Vasya! Vas";
// console.log(str.indexOf('Vas', 8))
// console.log(str.includes('Vas'))
// var str = "Hello Vasya! Vas";
// console.log(str.slice(1, 5))
// console.log(str)
// var str = "Hello 'Vasyao! Vas";
// var str2 = str.slice()
// // var str2 = str.replace('o', '----')
// for(;;){
//     if(!str2.includes('o')) break
//     str2 = str2.replace('o', '')
// }
// console.log(str2)
// var glas = ['o', 'e', 'i', 'a']
// var str = "Hello 'Vasyao! Vas";
// var arr = str.split('')
// console.log(arr)
// var arr2 = arr.filter(function (item){
//     return !glas.includes(item)
// })
// console.log(arr2.join(''))
// var str2 = str.split('')
//     .filter(function (item){
//         return !glas.includes(item)
//     })
//     .join('')
// console.log(str2)

//timer
// var count = 0;
// var count2 = 0;
// function ms(time){
//     return time * 1000
// }
// var timer = function () {
//     setTimeout(function (){
//         count++
//         console.log('test', count);
//         if(count < 5) timer()
//     }, ms(2))
// }
// timer()
// var timer2 = setInterval(function (){
//     if(count2 >= 5) return clearInterval(timer2)
//     count2++
//     console.log('test2', count2, timer2);
// }, ms(2))
// var timer = setInterval(function (){
//     if(count >= 5) return clearInterval(timer)
//     count++
//     console.log('test', count, timer);
// }, ms(2))
// var posX = 0;
// var step = 1;
// var anime = setInterval(function (){
//     posX += step;
//     document.getElementById('block').style.left = posX + '%'
// }, 100)

// date
// var weeks = ["s2", 'mon', 'th1', 'wen', "th2", 'fri', "s1"]
// var date = "10.10.2030"
//     .split('.')
//     .reverse()
//     .join('/')
// var time = new Date(date);
// var day = time.getDay();
// console.log(weeks[day])


setInterval(function (){
    var date = new Date();
    var time = date.toLocaleTimeString()
    document.getElementById('block').innerHTML = time
    document.getElementById('audio').setAttribute('muted', false)
}, 1000)













