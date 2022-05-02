// !3 = 3 * 2 * 1
// !4 = 4 * 3 *  2 * 1
// n! = n * (n - 1)!
// function factorial(n){
//     var result = 1;
//     for(var i = 1; i <= n; i++){
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5))
// function factorial(n){
//     // if( !n || n < 0){
//     //     console.error('error')
//     // } else if (n === 0){
//     //     return 1
//     // } else {
//     //     return n * factorial(n - 1)
//     // }
//     return n === 0 ? 1 : n * factorial(n - 1)
// }
// console.log(factorial(4))
// factorial(4) = 4 * factorial(3) // 4 * 6 = 24
// factorial(3) = 3 * factorial(2) // 3 * 2 = 6
// factorial(2) = 2 * factorial(1) // 2 * 1 = 2
// factorial(1) = 1 * factorial(0) // 1 * 1 = 1

// 1 1 2 3 5 8 13 21
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2), n > 1

// function fibonacci(n){
//     var a = 1;
//     var b = 1;
//     for(var i = 3; i <= n; i++){
//         var c = a + b;
//         a = b;
//         b = c;
//     }
//     return b
// }
// function fibonacci(n){
//     // if(n <= 1){
//     //     return n
//     // } else {
//     //     return fibonacci(n - 1) + fibonacci(n - 2)
//     // }
//     return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(10))
// function flatten(arr){
//     var result = [];
//     for (var i = 0; i < arr.length; i++){
//         var elem = arr[i];
//         if(Array.isArray(elem)){
//             result.push(flatten(elem))
//         } else {
//             result.push(elem)
//         }
//     }
//     return result
// }
// console.log(flatten([3, [4, [5, [6]]], 'test', [true]]))
//
// var objCourse = {
//     'vasya': {
//         age: 45,
//         course: {
//             'react': {
//                 lessons: 12,
//
//             }
//         }
//     },
//     'petya': {
//         'age': 15,
//         'course': {
//             'vue': {
//                 'lessons': 1,
//                 'course': {
//                     'base-1': {
//                         'lessons': 10,
//                     }
//                 }
//             },
//             'angular': {
//             'lessons': 12,
//             'course': {
//                 'base-4': {
//                 }
//             }
//         }
//         }
//     }
// }
// // console.log(objCourse.course)
// function course(obj){
//     if(obj.course !== undefined){
//         for (var key in obj.course){
//             console.log(key);
//             course(obj.course[key])
//         }
//         // console.log(objCourse.course)
//     }
// }
// for (var key in objCourse) {
//     course(objCourse[key])
// }
//
// console.log(objCourse)
