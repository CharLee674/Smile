//let pageclip, promise
const Pageclip = require('pageclip')
const fs = require('fs') 
let pageclip, promise

// Private API key goes down here below:
pageclip = new Pageclip('')

var thing;

var result;


// Fetch items from the default form
promise = pageclip.fetch().then((response) => {
    response.status, // 200
    response.form, // 'default'
    thing = response.data    // [Item]


    var hello = 'hello'
    console.log(thing.payload)
    //console.log(result);
    console.log(thing);
  })


function saveData(data){
  const fs = require('fs')

  fs.writeFile('Output.txt', JSON.stringify(data), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
  }) 

}