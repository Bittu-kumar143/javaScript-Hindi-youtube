//for 
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

/*for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        const element = array[i];
    }
}*/

 // break and continue
 /*for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
 }*/


 for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
 }

