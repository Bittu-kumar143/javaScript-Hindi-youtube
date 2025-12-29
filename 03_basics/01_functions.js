function add(number1,number2){
   console.log(number1 + number2);
}

function add(number1,number2){
   let result = number1 + number2
   console.log("Hitesh");
   return result
   console.log("Hitesh");  
}

const result = add(3,"a")

console.log("result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("pls enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Bittu"));
console.log(loginUserMessage("Bittu"));




function calculateCartPrice(...num1){  //...rest operator or Spread operator
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username:  "Bittu",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username:  "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,900,500,1000]));










 


