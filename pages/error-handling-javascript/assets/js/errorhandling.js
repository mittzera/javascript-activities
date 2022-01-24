function validateArray(arr, num){

    try{
    if(!arr && !num) throw new ReferenceError("Insert the parameters");

    if(typeof arr !== 'object') throw new TypeError("Invalid Array, it needs to be an object.");

    if(typeof num !== 'number') throw new TypeError("Invalid num, it needs to be an number.");
    
    if(arr.length !== num) throw new RangeError("Invalid Length");
    
    return arr;
}
catch(e){
    if(e instanceof ReferenceError) {
        console.log("This error is a ReferenceError!");
        console.log(e.message);
    } else if(e instanceof TypeError) {
        console.log("This error is a TypeError!");
        console.log(e.message);
    } else if(e instanceof RangeError) {
        console.log("This error is a RangeError!");
        console.log(e.message);
    } else {
        console.log("Error type not expected: " + e);
    }
}

};

console.log(validateArray([1,2,3,4,5], 5));