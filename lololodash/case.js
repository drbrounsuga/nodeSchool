// include the Lo-Dash library
var _ = require("lodash");

var worker = function(towns) {
    return _.forEach(towns, function(town){
      if(town.population > 1){
        town.size = 'big';
      }else if(town.population > 0.5){
        town.size = 'med';
      }else{
        town.size = 'small';
      }
    });
};

// export the worker function as a nodejs module
module.exports = worker;