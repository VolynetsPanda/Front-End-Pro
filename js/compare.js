// var arr1 = [1, 2, 3, 4]
// var arr2 = [1, 2, 3, 4]
// var arr3 = arr1
// console.log(arr1 === arr2)
// console.log(arr1 === arr1)
// console.log(arr1 === arr3)
// console.log(arr1.join(''), arr2.join(''), arr1.join('') === arr2.join(''))
// var data1 = {a: 1}
// var data2 = {a: 1}
// console.log(data1 === data2)
// console.log(data1 === data1)
// console.log(typeof {})
// console.log(typeof null)
// console.log(typeof [])
// console.log(Object.prototype.toString.call([]))
// console.log(Object.prototype.toString.call({}))
// console.log(Object.prototype.toString.call(null))
// console.log(Object.keys({a: 1, b: 2}).length)
// console.log(Object.keys([1,2]).length)
// console.log([1,2].length)
// var test = {
//     a: 1,
//     b: 2
// }
// console.log(test.hasOwnProperty('c'))
// console.log(JSON.stringify([1,2,3,4,{c: 13}]))
//
// function isCompare(data1, data2){
//     function getType(type){
//         return Object.prototype.toString.call(type)
//             .replace('[object ', '')
//             .replace(']', '')
//     }
//     function isObject(obj){
//         return getType(obj) === 'Object'
//     }
//     function isArray(arr){
//         return getType(arr) === 'Array'
//     }
//     function isOther(type1, type2){
//         return getType(type1) === getType(type2)
//     }
//     if(data1 === data2){
//         return true
//     }
//     if((!isObject(data1) && !isArray(data1))
//         && (!isObject(data2) && !isArray(data2))){
//         return false
//     }
//     if(!isOther(data1, data2)
//         || Object.keys(data1).length !== Object.keys(data2).length){
//         return false
//     }
//     for (var key of Object.keys(data1)){
//         if(!data2.hasOwnProperty(key)){
//             return false
//         }
//         if(!isCompare(data1[key], data2[key])) {
//             return false
//         }
//     }
//     return true
// }
//
// console.log(isCompare(5, 5))
// console.log(isCompare(null, null))
// console.log(isCompare(null, {}))
// console.log(isCompare({}, []))
// console.log(isCompare({a: 1, b: 2}, {a: 1, b: 2}))
// console.log(isCompare([1,2,3,4], [1,2,3,4]))
// console.log(isCompare([1,2,3,4,{c: 13}], [1,2,3,4,{c: 3}]))
