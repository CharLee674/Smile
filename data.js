//let pageclip, promise
const Pageclip = require('pageclip')
let pageclip, promise

// Private API key goes down here below: (DO NOT PUSH IT)
pageclip = new Pageclip('')

// Fetch items from the default form
promise = pageclip.fetch().then((response) => {
    console.log(
      response.status, // 200
      response.form, // 'default'
      response.data    // [Item]
    )
  })
var data = JSON.stringify(promise);

console.log(data);

const fs = require('fs') 

fs.writeFile('Output.json', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 