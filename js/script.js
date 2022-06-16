// call
// const sum = (a, b, c) => a + b + c;
// function sum2(a, b, c){
//     return `${this.test}${a + b + c}`
// }
// console.log(sum(1,2,3))
// console.log(sum2(1,2,3))
// console.log(sum2.call(null, 1,2,3))
//
// const obj = {
//     test: 'result: '
// }
//
// console.log(sum2.call(obj, 1,2,3))
// // apply
// console.log(sum2.apply(obj, [1,2,3]))

// const li = document.querySelectorAll('li')
// console.log(li)
// const newLi = Array.from(li);
// const li = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }
// const sum = [].reduce.call(li, (acc, elem) => {
//     console.log(elem)
//     return acc + parseInt(elem)
// }, 0)
// console.log(sum)
// const arr = [3,4,7,9,1,3,11,100,2]
// console.log(Math.max(...arr))
// console.log(new Array)
// console.log(Math)
// console.log(new Date)
// console.log(window)
// console.log(Math.max.apply(null, arr))
// function sum2(a, b, c){
//     return `${this.test}${a + b + c}`
// }
//
// const obj = {
//     test: 'result: '
// }
// const test = sum2.bind(obj, 1,2,3)
// console.log(test())
// class User{
//     constructor(name) {
//         this.name = name;
//         this.other = this.other.bind(this)
//     }
//     remove(){
//         this.user.addEventListener('click', this.other)
//     }
//     other(){
//         console.log(this)
//     }
// }

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
// console.log(random(0,5))

const nums = [[], []];
const opt = {
    count: 8,
    min: 1,
    max: 6,
    turn: 0,
    pl1: 0,
    pl2: 0
};
const { count, min, max } = opt
for (let i = 0; i < count; i++){
    if (count/2 ==  i) opt.turn = 1
    nums[opt.turn].push(random(min, max))
}
nums.forEach((elem, i) => {
    opt[`pl${i+1}`] = elem.reduce((acc, el) => acc + el, 0)
})
const {pl1, pl2} = opt
let text = pl1 !== pl2  ? `win pl${pl1 > pl2 ? 1 : 2}` : 'tie'
console.log(text)




