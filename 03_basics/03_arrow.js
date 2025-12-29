const user = {
    username: "Bittu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

//console.log(this);

/*function chai(){
    let username: "Bittu"
    console.log(this);
}

chai()*/


/*const code  = function(){
    let username = "Aman"
    console.log(this.username);
}

code()*/

const code  = () => {
    let username = "Aman"
    console.log(this);
}

code()

/*const addTwo = (num1,num2) => { //arrow function syntax
    return num1 + num2
}*/

//const addTwo = (num1,num2) => num1 + num2 //this is known as implicit return

//const addTwo = (num1,num2) => (num1 + num2) 

const addTwo = (num1,num2) => ({username: "Bittu"}) 

console.log(addTwo(3,4));









