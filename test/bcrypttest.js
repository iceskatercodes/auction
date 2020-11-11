const bcrypt = require('bcrypt')
console.log("in to fun");
const temppass = 'Iceskater@123'
//async function createPass() {
//   console.log(temppass);
//   let pass = await bcrypt.hash(temppass, bcrypt.genSaltSync(12))

//   console.log(pass)
// } 
// createPass()

async function CheckPass() {
  let r = await bcrypt.compare(temppass, '$2b$12$kXuBRvf14AuCl085ile.7.rmbqfPQOrUhv7JQ3/3MlL/ENtAAe9dO')
  console.log(r)
}

CheckPass()