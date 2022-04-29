// var test = {
//     id: "4234232ew",
//     name: 'Vasya',
//     age: 100,
//     user: {
//         a: 'aaaa',
//         b: 'bbbbb'
//     },
//     getInfo: function (name){
//         return 'test ' + name
//     }
// }
//
// var a = {
//     id: '4234232ew',
//     name: 'Vasya',
//     age: 100,
//     user: {
//         a: 'aaaa',
//         b: 'bbbbb'
//     },
//     getInfo: function (name){
//         return 'test ' + name
//     }
// }
//
// console.log(test.id == a.id)


// var arr = [12, 4, true, null, 'Vasya']
// arr[1] = 23;
// delete arr[1];
// console.log(arr)
// for(var i = 0; i < arr.length; i++){
//     console.log('i => ', i, 'arr => ', arr[i] * 10)
// }

// var arr = [23, 45, 10, 4, 100, false];

// push
// var test = arr.push(4234, 423, 'rer', [1, 2 ,3 ,4]);
// console.log('arr => ', arr, 'test => ', test)

// unshift
// var test = arr.unshift(4234, 423, 'rer', [1, 2 ,3 ,4]);
// console.log('arr => ', arr, 'test => ', test)

// pop
// var test = arr.pop();
// console.log('arr => ', arr, 'test => ', test)

// shift
// var test = arr.shift();
// console.log('arr => ', arr, 'test => ', test)

// isArray
// var test = Array.isArray(arr)
// console.log(Array.prototype)

// slice
// var test = arr.slice(0)
// console.log('arr => ', arr, 'test => ', test)

// splice
// var test = arr.splice(3, 1, 'yryr', 4323)
// console.log('arr => ', arr, 'test => ', test)

// indexOf
// var test = arr.indexOf(10, 4)
// console.log('arr => ', arr, 'test => ', test)

// lastIndexOf
// var test = arr.lastIndexOf(10, 4)
// console.log('arr => ', arr, 'test => ', test)

// sort
// arr.sort(function (a, b){
//     // console.log(a, b)
//     // if(a > b) return -1
//     // if(a === b) return 0
//     // if(a < b) return 1
//     return b - a
// })
// console.log(arr)

// reverse
// var test = arr.reverse()
// console.log('arr => ', arr, 'test => ', test)

// includes
// var test = arr.includes('dss')
// console.log('arr => ', arr, 'test => ', test)

// var arr = [ 45, 23, 10, 4, 100, 10, false, 'vasya', 'fedya', 'petya', [1, 2 ,3]];

// concat
// var test = arr.concat([34, true], 'vasya');
// console.log('arr => ', arr, 'test => ', test)

// join
// var str = arr.join('!')
// console.log('arr => ', arr, 'str => ', str)

// find
// var arr = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'},];
// var elem = arr.find(function (item, index){
//     return item.id === 2
// })
// console.log('arr => ', arr, 'elem => ', elem)

// findIndex
// var arr = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'},];
// var elem = arr.findIndex(function (item, index){
//     return item.id === 2
// })
// arr.splice(elem, 1)
// console.log('arr => ', arr, 'elem => ', elem)

// filter
// var arr = [ 45, 23, 10, 4, 100, 10, false, 'vasya', 'fedya', 'petya', [1, 2 ,3]];
// var test = arr.filter(function (item, index){
//     return item > 10
// })
// console.log('arr => ', arr, 'test => ', test)
// var test = [];
// for (var i = 0; i < arr.length; i++){
//     var item = arr[i];
//     if(item > 10) test.push(item)
// }
// console.log('arr => ', arr, 'test => ', test)

// forEach
// var arr = [ 45, 23, 10, 4, 100, 10, false, 'vasya', 'fedya', 'petya', [1, 2 ,3]];
// arr.forEach(function (item, index){
//     return item + index
// })
// console.log('arr => ', arr)

// map
// var arr = [ 45, 23, 10, 4, 100, 10, false, 'vasya', 'fedya', 'petya', [1, 2 ,3]];
// var test = arr.map(function (item, index){
//     return item > 0 ? item * 2 : index
// })
// console.log('arr => ', arr, 'test => ', test)

// reduce
// var arr = [
//     {name: 'a', age: 19},
//     {name: 'b', age: 18},
//     {name: 'c', age: 18},
//     {name: 'h', age: 20},
//     {name: 'f', age: 19},
// ];
// var test = arr.reduce(function (acc, item, index){
//     console.log(acc, item.age, acc[item.age])
//     if(!acc[item.age]){
//         acc[item.age] = [item.name]
//     } else {
//         acc[item.age].push(item.name)
//     }
//     return acc
// }, {})
// console.log('arr => ', arr, 'test => ', test)

var arr = [ 45, 23, 10, 4, 100, 10, false, 'vasya', 'fedya', 'petya', [1, 2 ,3]];
var test = [];
for (var i = 0; i < arr.length; i++){
    var item = arr[i];
    if(Array.isArray(item)){
        for (var j = 0; j < item.length; j++){
            var elem = arr[i][j];
            test.push(elem);
        }
    } else {
        test.push(item);
    }
}
console.log('arr => ', arr, 'test => ', test)



