"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taobaoItemListGet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../../tradePolyfills/index.js");

var _handleError = require("../tradeDataCenter/common/handleError.js");

var _qnRouter = require("../qnRouter.js");

var _resolveTopResponse = require("../tradeDataCenter/common/resolveTopResponse.js");

var FIELDS = "total_results,nick,type,valid_thru,has_discount,has_invoice,has_warranty,modified,seller_cids,list_time,pic_url,sold_quantity,postage_id,outer_id,title,num,price,num_iid,delist_time,has_showcase,approve_status,total_results,cid,props,props_name";
var defaultOnsaleMethod = "taobao.items.onsale.get";
var defaultInventoryMethod = "taobao.items.inventory.get";
/**
* 获取出售中/仓库中宝贝列表 https://open.taobao.com/api.htm?docId=162&docType=2&source=search/ https://open.taobao.com/api.htm?spm=a219a.7386797.0.0.1a79669aVXbydp&source=search&docId=18&docType=2
* @param fields
* @param page_no
* @param page_size
* @param status  出售中/仓库中/已售完
* @param callback
* @param errCallback
*/
function taobaoItemListGet(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === undefined ? FIELDS : _ref$fields,
      _ref$page_no = _ref.page_no,
      page_no = _ref$page_no === undefined ? 1 : _ref$page_no,
      _ref$page_size = _ref.page_size,
      page_size = _ref$page_size === undefined ? 20 : _ref$page_size,
      status = _ref.status,
      _ref$extraArgs = _ref.extraArgs,
      extraArgs = _ref$extraArgs === undefined ? {} : _ref$extraArgs,
      _ref$callback = _ref.callback,
      _callback = _ref$callback === undefined ? _index.NOOP : _ref$callback,
      _ref$errCallback = _ref.errCallback,
      errCallback = _ref$errCallback === undefined ? _handleError.handleError : _ref$errCallback;

  var method = defaultOnsaleMethod;
  var banner = '';
  switch (status) {
    case '出售中':
      method = defaultOnsaleMethod;
      break;
    case '仓库中':
      method = defaultInventoryMethod;
      break;
    case '已售完':
      method = defaultInventoryMethod;
      banner = "sold_out";
      break;
  }

  (0, _qnRouter.qnRouter)({
    api: method,
    params: _extends({
      fields: fields,
      page_no: page_no,
      page_size: page_size,
      banner: banner
    }, extraArgs),
    callback: function callback(res) {
      res = (0, _resolveTopResponse.resolveTopResponse)(res);
      res = (0, _resolveTopResponse.integrationDate)(res, 'item', true);
      _callback(res);
    },
    errCallback: errCallback
  });
}
exports.taobaoItemListGet = taobaoItemListGet;