function calculator(){
    const operation = Number(prompt('Select an Operation:\n 1- Sum(+)\n 2- Subtraction(-)\n 3- Multiplication(*)\n 4- Real Diviion(/)\n 5- Integer Division(%)\n 6- Exponentiation(**)\n'));

    if(!operation || operation >= 7){
        alert('Error - Invalid Operation');
        calculator();
    }else{
 

    let n1 = Number(prompt('Enter the first number:'));
    let n2 = Number(prompt('Enter the second number:'));
    let result;

    if(!n1 || !n2){
        alert('Error - Invalid Parameters!');
        calculator();
    } else{

    function sum(){
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
        newOperation();
    }
    function subtraction(){
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`);
        newOperation();
    }
    function multiplication(){
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`);
        newOperation();
    }
    function realdivision(){
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`);
        newOperation();
    }
    function integerdivision(){
        result = n1 % n2;
        alert(`The Integer Division between ${n1} and ${n2} is equal to ${result}`);
        newOperation();
    }
    function exponentiation(){
        result = n1 ** n2;
        alert(`the exponentiation between ${n1} and ${n2} is equal to ${result}`);
        newOperation();
    }
    function newOperation(){
        let option = prompt('Reload the aplication?\n 1- Yes\n 2- No');

        if(option == 1){
            calculator();
        }else if( option ==2){
            alert('See you later!');
        } else {
            alert('Enter a valid option!');
            newOperation();
        }

    

    }
   /* if(operation == 1){
        soma();
    } else if(operation == 2){
        subtracao();
    } else if(operation == 3){
        multiplicacao();
    } else if(operation == 4){
        divisaor();
    }else if(operation == 5){
        divisaoi();
    }else if(operation == 6){
        potenciacao();
    }
    */

    switch(operation){
        case 1:
        sum();
        break;
        case 2:
        subtraction();
        break;
        case 3:
        multiplication();
        break;
        case 4: 
        realdivision();
        break;
        case 5:
        integerdivision();
        break;
        case 6:
        exponentiation();
        break;

    }
}
}
}

calculator();

