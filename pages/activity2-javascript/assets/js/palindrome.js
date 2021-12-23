



function checkPalindrome(){

    const verpalin = prompt('Enter a word: ');

    for(i = 0; i < verpalin.length / 2; i++){
        if(verpalin[i] !== verpalin[verpalin.length - 1 - i]){
            alert(`${verpalin} isn't a palindrome `);
        } else if(verpalin[i] === verpalin[verpalin.length - 1 - i]) {
            alert(`${verpalin} is a palindrome `);
        }
    }
    reload();
}

function reload(){
    let option = prompt('Reload the aplication?\n 1- Yes\n 2- No');

    if(option == 1){
        checkPalindrome();
    }else if( option ==2){
        alert('See you later!');
    } else {
        alert('Enter a valid option!');
        reload();
    }

}
checkPalindrome();