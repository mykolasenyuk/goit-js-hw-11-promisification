const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName,) => {
    return new Promise(resolve=>{const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
    );
     resolve(updatedUsers);})
  

};

const logger1 = updatedUsers => console.table(updatedUsers);



const task2Btn = document.querySelector('.task2');

const onTask2 = () => {
  
toggleUserState(users, 'Mango').then(logger1);
toggleUserState(users, 'Lux').then(logger1);
}
task2Btn.addEventListener('click', onTask2);