// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
  return _.chain(collection)
    .map(function(value){
      return value+'chained';
    })
    .map(function(value){
      return _.toUpper(value);
    })
    .sortBy()
    .value();
};

// export the worker function as a nodejs module
module.exports = worker;