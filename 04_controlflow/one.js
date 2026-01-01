//if

const isLoggedIn = true

if(2!=2){
    console.log("executed");
    
}else{
    console.log("hii");
}

// === this operator check data as well as data type
//<,>,<=,>=,==,!=,===,!==

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`);

const balance = 1000
if(balance > 500) console.log("test");
console.log("test2");

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else{
    console.log("less than 120 0");
} 

// && and || are conditional operator for checking multiple conditions
