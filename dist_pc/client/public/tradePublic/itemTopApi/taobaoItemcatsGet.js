"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taobaoItemcatsGet = undefined;

var _index = require("../../tradePolyfills/index.js");

var _handleError = require("../tradeDataCenter/common/handleError.js");

var _resolveTopResponse = require("../tradeDataCenter/common/resolveTopResponse.js");

var _qnRouter = require("../qnRouter.js");

function taobaoItemcatsGet(_ref) {
  var _ref$callback = _ref.callback,
      _callback = _ref$callback === undefined ? _index.NOOP : _ref$callback,
      _ref$errCallback = _ref.errCallback,
      errCallback = _ref$errCallback === undefined ? _handleError.handleError : _ref$errCallback;

  (0, _qnRouter.qnRouter)({
    api: 'taobao.itemcats.get',
    params: {
      datetime: '2020-04-17 16:25:25'
    },
    callback: function callback(res) {
      res = (0, _resolveTopResponse.resolveTopResponse)(res);
      _callback(res);
    },
    errCallback: errCallback
  });
}
exports.taobaoItemcatsGet = taobaoItemcatsGet;