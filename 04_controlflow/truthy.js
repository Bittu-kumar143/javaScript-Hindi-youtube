const userEmail = "h@Bittu.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("dont have user email");
}

//falsy values
//false,0,-0,NigInt 0n , null,undefined,NaN


//truthy values
//"0",'flase'," ",[],{},function(){}


if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish coalescing operator (???): null undefined

let val1;
//val1 = 5 ?? 10
//val = null ?? 10
var1 = undefined ?? 15
console.log(val1);



//Ternary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80");



