//arrays//

const arr = [1,2,3,4,"bittu"]
const hero = ["shaktimaan","krrish"]
const arr2 = new Array(1,2,3,4,5)

console.log(arr[0]);

//Deep copy / shallow copy

//Array methods
arr.push(6)
arr.push(7)
console.log(arr);
//arr.pop()
console.log(arr);


arr.unshift(9)
//arr.shift()
console.log(arr);


console.log(arr.includes(7));
console.log(arr.includes(6));
console.log(arr.indexOf(6));


const newArr = arr.join() //this covert array to string
console.log(arr);
console.log(newArr);
console.log(typeof newArr);


const myn1 = arr.slice(1,3) //it prints portion of array and not includes last index value
console.log(myn1);

const myn2 = arr.splice(1,3)    //it includes last value and also it manipulates the array
console.log(arr);
console.log(myn2);












