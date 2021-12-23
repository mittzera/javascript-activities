function receiveData(){
    var n1 = Number(prompt('Enter the first Number'));
    var n2 = Number(prompt('Enter the second Number'));

    if(n1 == n2 ){
        firstsentence = (`The numbers ${n1} and ${n2} are equals.<br>`);
    } else if(n1 != n2){
        firstsentence = (`The numbers ${n1} and ${n2} aren't equals.<br>`);
    }
    sum = n1 + n2;
    secondsentence = (` Their Sum is ${sum}.<br>`);
    let t = "";

    if(sum > 10 ){
        t = (` It is more than 10.<br>`);
    } else if(sum < 10) {
        t = (` It is less than 10.<br>`);
    }

    if(sum > 20 ){
        fourthsentence = (` It is more than 20.<br>`);
    } else if(sum < 20) {
        fourthsentence = (` It is less than 20.<br>`);
    }
    var sentences = document.createElement('h1')
    sentences.innerHTML = (firstsentence + secondsentence + t + fourthsentence);
    document.body.appendChild(sentences);
}
receiveData();



  