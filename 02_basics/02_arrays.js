const marvelheros = ["ironman","thor","spiderman"]
const dcheros = ["superman","flash","raone"]
//marvelheros.push(dcheros)
//console.log(marvelheros)
//console.log(marvelheros[3][1]) //it is not good to access like this in array


marvelheros.concat(dcheros) //conact returns a new array after merge unlike push
console.log(marvelheros)

const allheros = marvelheros.concat(dcheros) //conact returns a new array after merge unlike push
console.log(allheros)                    


const allnewheros = [...marvelheros,...dcheros]
console.log(allnewheros);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = anotherarray.flat(Infinity) 
console.log(realanotherarray);


console.log(Array.isArray("Bittu"))
console.log(Array.from("Bittu"))
console.log(Array.from({name: "Bittu"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







