'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (filename) {
  var exts = require('../exts.json');
  var ext = filename.split('.');
  ext = ext[ext.length];
  return exts.filter(function (info) {
    return _lodash2.default.contains(info.exts, ext);
  })[0].name;
};