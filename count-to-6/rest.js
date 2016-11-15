module.exports = (...args) => {
  var sum = args.reduce( (accumulator, value) => {
    return accumulator + value;
  }, 0);
  return sum/args.length;
};
