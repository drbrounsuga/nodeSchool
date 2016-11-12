 // include the Lo-Dash library
 var _ = require("lodash");

 var worker = function(collection) {
     return _.filter(collection, { 'active': true });
 };

 // export the worker function as a nodejs module
 module.exports = worker;