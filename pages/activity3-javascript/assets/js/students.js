const students = [
    {
        name: ' John',
        score: 5,
        class: '1B',
    },
    {
        name: 'Sofia',
        score: 9,
        class: '1B',
    },
    {
        name: 'Paulo',
        score: 6,
        class: '2C',
    },
    {
        name: 'Miguel',
        score: 3,
        class: '2C',
    }
];


function approvedStudents(arr, average){
    let approved = [];
    for(let i = 0; i < arr.length; i++){

       const {score, name} = arr[i];

        if(score >= average){
            approved.push(name);
        }
    }

    return approved;
}

console.log(approvedStudents(students, 5));