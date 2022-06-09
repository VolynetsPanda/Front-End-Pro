class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    checkPass(){
        return this.password.length > 10
    }
}

// const test = new User('Vasya', '1234')
// const test2 = new User('Vasya2', '12343')
// const users = [test, test2, new User('Vasya4', '1234erwerwefsd'), new User('Vasya6', '1dfs 234')]
// console.log(users)
// // users.forEach((elem) => console.log(`${elem.login} - ${elem.checkPass() ? 'прошел' : 'не прошел'}`))
// users.forEach((elem) => {
//     let { login } = elem
//     let check = elem.checkPass() ? 'прошел' : 'не прошел'
//     console.log(`${login} - ${check}`)
// })

// console.log(test.checkPass())