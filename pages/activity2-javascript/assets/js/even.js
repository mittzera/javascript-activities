

function checkIfEven(){

    const num = Number(prompt('Enter a Number: '));

    if( num % 2 == 0){
       alert(`The number ${num} is Even`);
    } else {
        alert(`The number ${num} isn't Even`);
    }
    reload();
}

function reload(){
    let option = prompt('Reload the aplication?\n 1- Yes\n 2- No');

    if(option == 1){
        checkIfEven();
    }else if( option ==2){
        alert('See you later!');
    } else {
        alert('Enter a valid option!');
        reload();
    }

}
checkIfEven();