// include the Lo-Dash library
var _ = require("lodash");

var worker = function(person){
    var data = {
      name: person.name,
      logins: person.login.length
    }
    return _.template('Hello <%= name %> (logins: <%= logins %>)')(data);
};

// export the worker function as a nodejs module
module.exports = worker;