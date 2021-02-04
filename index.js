//IMPORTS
const fetch = require('node-fetch')

fetch('https://espn.com')
.then((response) => {
console.log(response.text());
})

fetch('https://api.github.com/users/facebook') //endpoint
.then(response => {
    return response.json(); //changing response so I can work with data in JS
})
.then(data => {
    console.log(data)
})

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(dataArray => {
    console.log(dataArray);
    let c102Object = dataArray[1]
    let capsuleSerial = c102Object['capsule_serial'] //bracket notation to avoid error with underscore in name
    let capsuleStatus = c102Object.status
    console.log(c102Object)
    console.log(capsuleSerial)
})