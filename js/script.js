//---- Singleton
// let instance;
// class Counter {
//     constructor() {
//         if(typeof Counter.instance === 'object'){
//             return Counter.instance
//         }
//         Counter.instance = this;
//         this.count = 0
//         return this
//     }
//     addCount (){
//         return this.count++
//     }
//     getCount (){
//         return this.count
//     }
// }
// const a = new Counter();
// const b = new Counter();
//
// a.addCount()
// a.addCount()
// console.log(a.getCount())
// b.addCount()
// b.addCount()
// console.log(b.getCount())
// console.log(a)

// == Factory
// class User{
//     constructor(name, age, rank) {
//         this.name = name
//         this.age = age
//         this.rank = rank
//     }
// }
//
// class UserFactory{
//     constructor() {
//     }
//     create(type){
//         if(type == 'Vasya') return new User(type, 10, 1)
//         if(type == 'Petya') return new User(type, 20, 2)
//     }
// }
//
// const factory = new UserFactory();
//
// const user1 = factory.create('Vasya')
// const user2 = factory.create('Vasya')
// console.log(user2)

// === Abstract Factory

// class Test1 {
//     render(){
//         return new UserFactory().create('Vasya')
//     }
// }
// class Test2 {
//     render(){
//         return new UserFactory().create('Petya')
//     }
// }
// function one(){
//     return new UserFactory().create('Vasya')
// }
// function two(){
//     return new Test2()
// }
// const factory = (type) => type === "one" ? Test1 : Test2

// ====Proto
// class User{
//     constructor(name, age, rank) {
//         this.name = name
//         this.age = age
//         this.rank = rank
//     }
//     create(){
//         return new User(this.name, this.age, this.rank)
//     }
// }
//
// const testUser = new User('Vasya',10, 1)
//
// const a1 = testUser.create()
// const a2 = testUser.create()
// const a3 = testUser.create()
// const a4 = testUser.create()
//
// a2.name = 'Petya'
// a3.age = 100
//
// console.log(a1, a2, a3, a4)

// === Builder
// class User{
//     constructor() {
//         this.name = ""
//         this.age = 0
//     }
// }
//
// class BuilderUser {
//     constructor() {
//         this.user = new User()
//     }
//     addName(name){
//         this.user.name = name
//         return this
//     }
//     addAge(age){
//         this.user.age = age
//         return this
//     }
//     addRank(rank){
//         this.user.rank = rank
//         return this
//     }
//     build(){
//         return this.user
//     }
// }
//
// const myUser = new BuilderUser()
// .addName('Vasya')
// .addAge(90)
// .addRank(10)
// .build()
// console.log(myUser)

// === Decor
//
// class Car{
//     constructor() {
//         this.price = 1000
//         this.model = 'car'
//     }
//     getPrice(){
//         return this.price
//     }
//     getInfo(){
//         return this.model
//     }
// }
//
// class Ferrari extends Car{
//     constructor() {
//         super()
//         this.price = 10000
//         this.model = 'Ferrari'
//     }
// }
// class Turbo{
//     constructor(car, price = 5000) {
//         this.car = car
//         this.price = price
//     }
//     getPrice(){
//         return this.car.getPrice() + this.price
//     }
//     getInfo(){
//         return this.car.getInfo() + " plus turbo!"
//     }
// }
//
// const myCar = new Turbo(new Ferrari())
// console.log(myCar.getPrice())
// console.log(myCar.getInfo())

// Facade
// class User{
//     constructor() {
//         this.name = ""
//         this.age = 0
//     }
// }
//
// class BuilderUser {
//     constructor() {
//         this.user = new User()
//     }
//     addName(name){
//         this.user.name = name
//         return this
//     }
//     addAge(age){
//         this.user.age = age
//         return this
//     }
//     addRank(rank){
//         this.user.rank = rank
//         return this
//     }
//     build(){
//         return this.user
//     }
// }
//
// class FacadeUser{
//     constructor(user) {
//         this.user = user
//         this.user.build()
//     }
//     completed(){
//         this.user.addRank(10)
//         this.user.addAge(110)
//         this.user.addName('treew')
//     }
//     build(){
//         return this.user
//     }
// }
//
// const user = new FacadeUser(new BuilderUser())
// user.completed()
// console.log(user)
