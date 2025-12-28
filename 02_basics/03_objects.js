//objrcts in java script

const mySym = Symbol("key1") //special keyword symbol 

const JsUser = {
    name : "Bittu",
    "full name":"Bittu kumar",
    [mySym]:"myKey1",
    age: 18,
    location: "Punjab",
    email: "bittu@google.com",
    isLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);



JsUser.email = "bittu@yahoo.com"
console.log(JsUser.email);
//Object.freeze(JsUser)                 //it freeze the object content  so that it cant be changed
JsUser.email = "bittu.com"
console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





