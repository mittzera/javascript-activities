function numberSum(arr3){
    arr3.reduce( function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr3 = [1, 2];

console.log(numberSum(arr3));