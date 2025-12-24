let name = "Bittu"
let repocount = 50

//console.log(name + repocount + "value"); //This is not a good practice to write

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('Hitesh')

console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newstring  = gamename.substring(0,4)
console.log(newstring);

const anotherstring  = gamename.slice(-7,5)
console.log(anotherstring);

const newstringone = "     bittuKumar   "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://bittu%20google.com"
console.log(url.replace('%20','-'));

console.log(url.includes('sunder'));

console.log(gamename.split('t'));



