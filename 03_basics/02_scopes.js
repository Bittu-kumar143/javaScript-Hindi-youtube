var c = 300
let a = 300 //global scope
if(true){
    let a = 10            //local scope
    const b = 20
    var c = 30
    console.log("INNER: ", a);
}

 
//console.log(a);
//console.log(b);
console.log(c); //var variable is not used becoz its data also works outside of the scope

function one(){
    const username = "Bittu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username = "Bittu"
    if(username === "Bittu"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



//++++++++++++++++++++++ INTERESTING +++++++++++++++++//
console.log(addone(5))   
function addone(num){
    return num + 1;
}
//addone(5)

console.log(addtwo(5));
const addtwo = function(num){
    return num + 2;
}    
addtwo(5)
