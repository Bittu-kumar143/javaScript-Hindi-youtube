const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}


//Maps
const map = new Map()
map.set(`IN`,"INDIA")
map.set(`USA`,"UNITED STATES OF AMERICA")
map.set(`FR`,"FRANCE")
map.set(`IN`,"INDIA")

console.log(map);

for (const [key,value] of map) {
    console.log(key,value);
}
const myobject = {
    'game 1' : 'NFS',
    'game 2' : 'SPIDERMAN',
}

for (const [key,value] of myobject) {
    console.log(key , value);
}


