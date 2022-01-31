function evenFilter(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}


const nums3 = [ 1, 3, ,12, 5, 23, 4 ,6264, 645, 3422,];

console.log(evenFilter(nums3));


function oddFilter(arr){
    return arr.filter(callback2);
}

function callback2(item){
    return item % 2 !== 0;
}

console.log(oddFilter(nums3));