// include the Lo-Dash library
var _ = require("lodash");

var worker = function(towns) {
  var townTemps = {
        hot: [],
        warm: []
      },
      isHot = function(temp){
        return temp > 19;
      };

  _.forEach(towns, function(temps, town){
    if( _.every(temps, isHot) ){
      townTemps.hot.push(town);
    }else if( _.some(temps, isHot) ){
      townTemps.warm.push(town);
    }
  });
  return townTemps;
};

// export the worker function as a nodejs module
module.exports = worker;