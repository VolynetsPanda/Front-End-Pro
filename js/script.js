let url = 'http://gateway.marvel.com/v1/public/comics'
// let ts = Date.now()
let ts = '1656951848714'
let apikey = 'bb5bb3476d24cc359afcce18e800391e'
let hash = 'f3cab8e90d178f805aa4c07c69f1b3a0'
let api = `${url}?ts=${ts}&apikey=${apikey}&hash=${hash}0`
let token = 'zm6qal8nzx7t6824ayngio6nl4agydwhgd52gp38'
let url2 = 'https://api.json-generator.com/templates/Z9xhHIPuW35L/data'
let api2 = `${url2}?access_token=${token}`

// fetch(api)
//     .then(arg => arg.json())
//     .then(res0 => {
//         console.log("testng json 0 => ", res0)
//         fetch('https://cat-fact.herokuapp.com/facts?animal_type=cat')
//             .then(res => res.json())
//             .then(json1 => {
//                 console.log("testng json 1 => ", json1)
//                 fetch(api2)
//                     .then(res => res.json())
//                     .then(json2 => {
//                         console.log("testng json 2 => ", json2)
//                         fetch('../generated.json')
//                             .then(res=>res.json())
//                             .then(json3 => {
//                                 console.log("testng json 3 => ", json3)
//                                 console.log("final => ", [res0, json1, json2, json3])
//                             })
//                     })
//             })
//     })

const a1 = new Promise( resolve => resolve(fetch(api)
    .then(arg => arg.json())))
    // .then(res0 => console.log("testng json 0 => ", res0))

const a2 = () => fetch('https://cat-fact.herokuapp.com/facts?animal_type=cat')
    .then(res=>res.json())
    // .then(json => console.log("testng json 1 => ", json))

const a3 = () => fetch(api2)
    .then(res=>res.json())
    // .then(json=> console.log("testng json 2 => ", json))

const a4 = () => fetch('../generated.json')
    .then(res=>res.json())
    // .then(json=> console.log("testng json 3 => ", json))

Promise.all([a4(), a1, a2(), a3()]).then(value => console.log("testng value => ", value))
