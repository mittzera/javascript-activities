const list = [
    {
        name: 'soap',
        price: 30,
    }, 
    {
        name: 'cereal',
        price: 12,
    }, 
    {
        name: 'toalha',
        price: 35,
    }
];

const balanceAvailable = 100;

function balanceCalculator(balanceAvailable, list){
    return list.reduce(function(prev, current, index){
        console.log("round", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, balanceAvailable)
}


console.log(balanceCalculator(balanceAvailable, list));