var _ = require('lodash');
var NodeAxosoft = require('./');

function promisify(obj) {
  _.forEach(obj, function(fn, key) {
    if (_.isFunction(fn)) {
      obj[key] = function() {
        var args = Array.prototype.slice.call(arguments);

        return new Promise(function(resolve, reject) {
          args.push(function(error, result) {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });

          fn.apply(null, args);
        });
      }
    }
  });
}

module.exports = function NodeAxosoftPromise() {
  var nodeAxosoft = NodeAxosoft.apply(null, arguments);

  _.forEach(nodeAxosoft, function(prop) {
    if (_.isObject(prop)) {
      promisify(prop);
    }
  });

  return nodeAxosoft;
};
