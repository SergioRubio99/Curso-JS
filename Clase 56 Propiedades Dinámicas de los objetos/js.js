let random = Math.round(Math.random() * 100 + 5)

const objUsers = {
    [`id_${random}`]: 'Valor aleatorio'
};
//It is the syntaxis of the square brackets what indicates that a property will be dynamically generated. 
console.log(objUsers);
const users = ['Jon', 'Irma', 'Miguel', 'Kala', 'kEnAi'];

users.forEach((user, index) => objUsers[`id_${index}`] = user);
console.log(objUsers);