let score = "33abc"
console.log(typeof score)
let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


let number = "22"
let StringNumber = String(number)
console.log(StringNumber)
console.log(typeof StringNumber)


//************opeartions**************//
let a = 3
let b = -a
console.log(b)

let str1 = "bittu"
let str2 = " kumar"

console.log(str1+str2)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") //suspecious//




//**********Memory in JavaScript************//
let myyoutubeName = "bittu kumar"

let anotherName = myyoutubeName
anotherName = "chaiAurCode"

console.log(myyoutubeName)
console.log(anotherName)

let userone = {
    email: "bittu@gmail.com"
}

let usertwo = userone

usertwo.email = "kumar@gmil.com"

console.log(userone.email)
console.log(usertwo.email)







