function whoIsPaying(name){
    let myArr = [];
    if(name.length > 2){
        myArr.push(name)
    }
    myArr.push(name.substring(0, 2))
    return myArr;
}

console.log(whoIsPaying("Mexico")); // ["Mexico", "Me"]
console.log(whoIsPaying("Melania")); // ["Melania", "Me"]
console.log(whoIsPaying("Melissa")); // ["Melissa", "Me"]
console.log(whoIsPaying("Me")); // ["Mexico", "Me"]
console.log(whoIsPaying("")); // [""]
console.log(whoIsPaying("I")); // ["I"]