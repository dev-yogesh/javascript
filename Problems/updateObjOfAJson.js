const users = {
    count: 4,
    data: [
        {
            id: 101,
            firstname: 'Vishal',
            lastname: 'Bhandari',
            position: 'SDE-I',
            enabled: false,
        },
        {
            id: 102,
            firstname: 'Omkar',
            lastname: 'Rokade',
            position: 'SDE-III',
            enabled: false,
        },
        {
            id: 103,
            firstname: 'Vaibhav',
            lastname: 'Wachkal',
            position: 'SDE-III',
            enabled: false,
        },
        {
            id: 104,
            firstname: 'Yogesh',
            lastname: 'Gupta',
            position: 'SDE-III',
            enabled: false,
        }
    ] 
}

const resObj = {
    userId: 101,
    enabled: true,
}

// const tempUsers = {...users};
const tempUsers = Object.assign({}, users);

// tempUsers.data.forEach(user => {
//     if(user.id === resObj.userId){
//         user.enabled = resObj.enabled
//     }
// })

for(let i = 0; i < tempUsers.data.length; i++){
    // console.log(tempUsers.data[i].id === resObj.userId);
    if(tempUsers.data[i].id === resObj.userId){
           console.log(tempUsers.data[i].enabled); 
           console.log(resObj.enabled);
        //    tempUsers.data[i].enabled  = resObj.enabled
    }
}

console.log('old json ==> ', users);
console.log('object to change ==> ', resObj);
console.log('updated json ==> ', tempUsers);