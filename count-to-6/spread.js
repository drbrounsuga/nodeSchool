var args = process.argv;
var [a, b, ...inputs] = args;
var min = Math.min(...inputs);
console.log(`The minimum of [${inputs}] is ${min}`);