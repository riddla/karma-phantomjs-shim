var path = require('path');

var createPattern = function (file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
};

var initShims = function (files) {
  var es6ShimPath = path.dirname(require.resolve('es6-shim'));
  files.unshift(createPattern(es6ShimPath + '/es6-shim.js'));

  var es5ShimPath = path.dirname(require.resolve('es5-shim'));
  files.unshift(createPattern(es5ShimPath + '/es5-shim.js'));
};

initShims.$inject = ['config.files'];

module.exports = {
  'framework:phantomjs-shim': ['factory', initShims]
};