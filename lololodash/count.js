// include the Lo-Dash library
var _ = require("lodash");

var worker = function(comments) {
    var result = [];
    var grouped = _.groupBy(comments, function(value, key, items){
        return value.username;
    });

    _.map(grouped, function(value, key, items){
       result.push({
        "username": key,
        "comment_count": _.size(value)
       });
    });

    return _.sortBy(result, 'comment_count').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;