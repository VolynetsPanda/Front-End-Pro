(function() {
    var test = 100;
    console.log(test)
// var user = {
//     age: 29,
//     name: 'Vasya',
//     status: 'm',
//     working: "test",
//     "001": null
// };
// var fields = ['age', 'name'];
// for(var key in user){
//     console.log(key)
//     for(var i = 0; i < fields.length; i++){
//         !(fields[i] === key) && delete user[key]
//     }
//     (!fields.includes(key)) && delete user[key]
// }
// var test = Object.keys(user)
//     test.forEach(function (key){
//     (!fields.includes(key)) && delete user[key]
// })
// console.log(user)
// console.log(test)
// function test(callback, sep){
//     //...
//     var arr = [1,2,3,4,5];
//     console.log(callback(arr, sep))
// }
//
// function createStr(arr, sep){
//     return arr.join(sep);
// }
//
// function createStrRevers(arr, sep){
//     return arr.reverse().join(sep);
// }
//
// test(createStr, "-")
// test(createStrRevers, "@")

// var test = 10;
// function viewGlobal(){
//     console.log('global => ', test)
// }
// viewGlobal()
// function viewLocal(){
//     var test = 1000;
//     console.log('local => ', test)
// }
// viewLocal()
// console.log('test => ', test)
// viewGlobal()
// function byCount(n) {
//     var count = n || 10;
//     return function(m) {
//         count += m;
//
//         return function (){
//             console.log('test => ',count)
//         }
//     }
// }
// var test = byCount();
// var test2 = byCount(1000);
// var a = test(12);
// a()
// test2(3)
//
// console.log(test)
// function random(){
//     return Math.ceil(Math.random() * 10)
// }
// function createTest(){
//     var sum = 0;
//     return function toSum(){
//         if(sum >= 50) return;
//         sum += random();
//         console.log(sum);
//
//         toSum();
//     }
// }
//
// var test = createTest();
// test();
// test();
// test();

})()




