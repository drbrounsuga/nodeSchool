// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection){
  var result = [];

  collection = _.groupBy(collection, 'article');

  _.forEach(collection, function(articleArray, key){
    result.push({
      "article": _.toNumber(key),
      "total_orders": _.reduce(articleArray, function(sum, item){
        return sum + item.quantity;
      }, 0)
    });
  });

  return _.sortBy(result, 'total_orders').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
