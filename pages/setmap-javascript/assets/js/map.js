function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
        admins.push(key);
    }
    }
    return admins;
}


const users = new Map();

users.set('Hugo', 'Admin');
users.set('Beatriz', 'Admin');
users.set('Bruna', 'User');
users.set('Amelie', 'User');

alert(`${getAdmins(users)}`);