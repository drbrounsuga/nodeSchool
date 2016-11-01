 function repeat(operation, num) {
  if(num > 0){
    operation();
    num--;
    repeat.call(operation, num);
  }
}

// Do not remove the line below
module.exports = repeat