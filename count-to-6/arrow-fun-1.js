var inputs = process.argv.slice(2);
var result = inputs.map(str => str.slice(0, 1))
  .reduce((a, v) => a + v, '');
console.log(`[${inputs}] becomes "${result}"`);