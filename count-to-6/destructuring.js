//[userId, username, email, age, firstName, lastName]
let userArray = process.argv.slice(2);
let user = {};

[ ,user.username, user.email] = userArray;

console.log(user); // {username: "jdoe", email: "john@doe.com"}

