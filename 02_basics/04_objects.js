//const tinderUser = new Object() //this is singleton object
const tinderUser = {}  //Non singleTon object

tinderUser.id = "123aqbc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

console.log(tinderUser);

const regular = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Bittu",
            lastname: "kumar"
        }
    }
}

console.log(regular.fullname.userfullname);
console.log(regular.fullname.userfullname.firstname);
 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1,obj2} //merging of objects

//const obj3 = Object.assign({},obj1,obj2,obj4) //merging of objects

const obj3 = {...obj1,...obj2} //latest and mostly used

console.log(obj3);

const users = [ //array ob objects
      {
        id: 1,
        email: "h@gmail.com"
      },
      {
        id: 2,
        email: "sjb@gtmail.com"
      },
]

users[1].email
console.log(tinderUser );

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "Bittu"
}

//course.courseInstructor

const{courseinstructor: instructor} = course //this is known as destructuring

//console.log(courseinstructor);
console.log(instructor);

/*  {                                 //This is known as json
    "name": "Bittu"
    "coursename": "js in hindi"
    "price": "free"
}*/