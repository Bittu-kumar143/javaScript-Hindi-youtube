/*const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values);

*/

const myNums = [1,2,3,4,5,6,7,8,9,10]
/*const newNums = myNums.filter( (num) => {
    return num > 4
} )*/

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )

console.log(newNums); 

const books = [
    {title: 'Book One' , genre: 'Fiction' , publish: 1981,edition: 2004 },
    {title: 'Book two' , genre: 'history' , publish: 1999,edition: 2004 },
    {title: 'Book three' , genre: 'Fiction' , publish: 1981,edition: 2004 },
    {title: 'Book four' , genre: 'Fiction' , publish: 2002,edition: 2004 },
    {title: 'Book five' , genre: 'Fiction' , publish: 1981,edition: 2004 },
    {title: 'Book six' , genre: 'Fiction' , publish: 1981,edition: 2004 },
    {title: 'Book seven' , genre: 'Fiction' , publish: 2008,edition: 2004 },
    {title: 'Book eight' , genre: 'history' , publish: 1998,edition: 2004 },
    {title: 'Book nine' , genre: 'history' , publish: 1981,edition: 2004 },
    {title: 'Book ten' , genre: 'Fiction' , publish: 1981,edition: 2004 }
];

let userBooks = books.filter( (bk) => bk.genre === 'history' )
console.log(userBooks)

userBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === 'history'})
console.log(userBooks)





