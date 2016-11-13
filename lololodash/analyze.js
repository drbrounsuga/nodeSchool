// include the Lo-Dash library
var _ = require("lodash");

var worker = function(freelancers){

  var sum = _.reduce(freelancers, function(sum, freelancer, all){
    return sum + freelancer.income;
  }, 0);

  var average = sum / freelancers.length;
  var underperform = _.filter(freelancers, function(freelancer){
    return freelancer.income <= average;
  });
  var overperform = _.filter(freelancers, function(freelancer){
    return freelancer.income > average;
  });

  return {
    average: average,
    underperform: _.sortBy(underperform, 'income'),
    overperform: _.sortBy(overperform, 'income')
  };

};

// export the worker function as a nodejs module
module.exports = worker;
