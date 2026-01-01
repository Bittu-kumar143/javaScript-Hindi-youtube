(function chai(){ //named iffe
    console.log(`DB CPONNECTED`);
})(); //semicolon must be there for end of first immediate function call

((name) => { //Un-named iffe
    console.log(`DB CONNECTED TWO ${name}`);
})('bittu')
