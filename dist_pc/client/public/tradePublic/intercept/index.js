"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.batchImportBlackList = exports.getOnSaleBabyList = exports.getInterceptBabySelectDataSource = exports.searchRegionList = exports.searchInterceptReceiver = exports.getImportRecord = exports.serachInterceptBLackList = exports.serachInterceptWhiteList = exports.serachInterceptRecord = exports.getInterceptOperationLog = exports.changeInterceptStauts = exports.getInterceptStatus = exports.interceptRegionsAdd = exports.interceptRegionRemove = exports.interceptRegionsGet = exports.interceptReceiverRemove = exports.interceptReceiversAdd = exports.interceptReceiversGet = exports.getallstartcondition = exports.getInterceptRecord = exports.addBabylist = exports.delInterBabyList = exports.getInteceptBabyList = exports.batchDelBlackListApi = exports.delInterceptBlackOrWhiteList = exports.getInterceptWhiteList = exports.addInterceptBlackOrWhiteList = exports.getInterceptBlackList = undefined;
exports.getWwblackListInterceptStatus = getWwblackListInterceptStatus;

var _consts = require("../consts.js");

var _index = require("../../tradePolyfills/index.js");

var _qnRouter = require("../qnRouter.js");

var _resolveTopResponse = require("../tradeDataCenter/common/resolveTopResponse.js");

var _handleError = require("../tradeDataCenter/common/handleError.js");

var _consts2 = require("./consts.js");

// 获取差评拦截中的旺旺黑名单
function getInterceptBlackList(page_no) {
  var _callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.get',
    host: _index.ENV.hosts.trade,
    method: '/iytrade2/getaddBlack',
    args: { page_no: page_no },
    callback: function callback(res) {
      _callback(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

exports.getInterceptBlackList = getInterceptBlackList;
var isWwBlackListInterceptOn = false; // 旺旺黑名单拦截是否开启
var isGetInterceptStatus = false; // 是否获取过拦截状态

/**
 * 获取旺旺黑名单拦截的开启状态
 * @return {Promise<unknown>}
 */
function getWwblackListInterceptStatus() {
  return new Promise(function (resolve, reject) {
    if (!isGetInterceptStatus) {
      getInterceptStatus(function (res) {
        isGetInterceptStatus = true;
        if (res.denfenon && res.switchArr.handon.checked) {
          isWwBlackListInterceptOn = true;
        }
        resolve(isWwBlackListInterceptOn);
      });
    } else {
      resolve(isWwBlackListInterceptOn);
    }
  });
}

// 差评拦截中的添加旺旺黑名单
function addInterceptBlackOrWhiteList(nicks, reason, type) {
  var _callback2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  var errorCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _consts.NOOP;

  var reasonLog = type == 'black' ? '旺旺黑名单：' + reason : '旺旺白名单' + reason;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.add',
    host: _index.ENV.hosts.trade,
    method: '/iytrade2/saveblaNick',
    args: {
      nicks: nicks,
      reason: reason,
      type: type,
      reasonLog: reasonLog,
      operator: (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick
    },
    callback: function callback(res) {
      _callback2(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

// 获取差评拦截中的旺旺白名单
exports.addInterceptBlackOrWhiteList = addInterceptBlackOrWhiteList;
function getInterceptWhiteList(page_no) {
  var _callback3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.whitelist.add',
    method: '/iytrade2/getaddWhil',
    args: { page_no: page_no },
    callback: function callback(res) {
      _callback3(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

// 删除差评拦截中的旺旺白名单或者黑名单
exports.getInterceptWhiteList = getInterceptWhiteList;
function delInterceptBlackOrWhiteList(buyernick, type) {
  var _callback4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.remove',
    host: _index.ENV.hosts.trade,
    method: '/iytrade2/delblackbynick',
    args: {
      nicks: buyernick,
      type: type,
      reasonLog: (type == 'white' ? '旺旺白名单：' : '旺旺黑名单：') + '删除【' + buyernick + '】',
      operator: (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick
    },
    callback: function callback(res) {
      _callback4(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}
/**
 * 批量移除黑名单
 * @Author ZW
 * @date   2020-03-31T16:09:49+0800
 * @param  {Array}                  options.nickList    黑名单nick数组
 * @param  {Function}               options.callback    成功回调
 * @param  {Function}               options.errCallback 失败回调
 */
exports.delInterceptBlackOrWhiteList = delInterceptBlackOrWhiteList;
function batchDelBlackListApi(_ref) {
  var _ref$nickList = _ref.nickList,
      nickList = _ref$nickList === undefined ? [] : _ref$nickList,
      _ref$callback = _ref.callback,
      _callback5 = _ref$callback === undefined ? _consts.NOOP : _ref$callback,
      _ref$errCallback = _ref.errCallback,
      _errCallback = _ref$errCallback === undefined ? _consts.NOOP : _ref$errCallback;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.batchdelete',
    host: _index.ENV.hosts.trade,
    method: '/iytrade2/batchDelBlackList',
    args: {
      nicks: nickList,
      operator: (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick
    },
    callback: function callback(res) {
      _callback5(res);
    },
    errCallback: function errCallback(err) {
      _errCallback(err);
    }
  });
}

// 获取宝贝白名单
exports.batchDelBlackListApi = batchDelBlackListApi;
function getInteceptBabyList() {
  var _callback6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _consts.NOOP;

  var errorCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.itemwhitelist.get',
    method: '/Iytrade2/getbabylist',
    callback: function callback(res) {
      _callback6(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

// 移除宝贝白名单
exports.getInteceptBabyList = getInteceptBabyList;
function delInterBabyList(item) {
  var _callback7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var operator = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.itemwhitelist.delete',
    method: '/iyprint2/delwhite',
    args: {
      num_id: item.num_id,
      reasonLog: '宝贝白名单：移除【' + item.title + '】',
      operator: operator
    },
    callback: function callback(res) {
      _callback7(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

// 添加出售中的宝贝
exports.delInterBabyList = delInterBabyList;
function addBabylist(item) {
  var _callback8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var remark = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.itemwhitelist.add',
    host: _index.ENV.hosts.trade,
    method: '/defence/addBabylist',
    args: {
      title: item.title,
      imgurl: item.pic_url,
      num_id: item.num_iid,
      remark: '赵东浩的测试店铺', // 操作人
      reasonLog: '宝贝白名单：添加【' + item.title + '】'
    },
    callback: function callback(res) {
      _callback8(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

// 获取差评拦截中的拦截记录
exports.addBabylist = addBabylist;
function getInterceptRecord(page_no) {
  var _callback9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.log.get',
    method: '/Iytrade2/getblacklist',
    args: { page_no: page_no },
    callback: function callback(res) {
      _callback9(res);
    },
    errCallback: function errCallback(err) {
      errorCallback(err);
    }
  });
}

// 获取检测订单状态的数据
exports.getInterceptRecord = getInterceptRecord;
function getallstartcondition() {
  var _callback10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _consts.NOOP;

  var _errCallback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.scandata.get',
    method: '/defence/suspected',
    callback: function callback(res) {
      _callback10(res);
    },
    errCallback: function errCallback(err) {
      _errCallback2(err);
    }
  });
}

/**
 * 获取收件人拦截列表
 * @param pageno 页码
 * @param callback
 * @param errCallback
 */
exports.getallstartcondition = getallstartcondition;
function interceptReceiversGet(_ref2) {
  var _ref2$pageno = _ref2.pageno,
      pageno = _ref2$pageno === undefined ? 1 : _ref2$pageno,
      _ref2$callback = _ref2.callback,
      _callback11 = _ref2$callback === undefined ? _consts.NOOP : _ref2$callback,
      _ref2$errCallback = _ref2.errCallback,
      errCallback = _ref2$errCallback === undefined ? _handleError.handleError : _ref2$errCallback;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.settings.bytype.get',
    method: '/iytrade2/gettype',
    args: {
      pageno: pageno,
      type: 'con'
    },
    callback: function callback(res) {
      _callback11(res);
    },
    errCallback: errCallback
  });
}

/**
 * 添加需要拦截的收件人
 * @param name
 * @param phone
 * @param tel
 * @param addr
 * @param reason
 */
exports.interceptReceiversGet = interceptReceiversGet;
function interceptReceiversAdd(_ref3) {
  var _ref3$name = _ref3.name,
      name = _ref3$name === undefined ? '' : _ref3$name,
      _ref3$phone = _ref3.phone,
      phone = _ref3$phone === undefined ? '' : _ref3$phone,
      _ref3$tel = _ref3.tel,
      tel = _ref3$tel === undefined ? '' : _ref3$tel,
      _ref3$addr = _ref3.addr,
      addr = _ref3$addr === undefined ? '' : _ref3$addr,
      _ref3$reason = _ref3.reason,
      reason = _ref3$reason === undefined ? '' : _ref3$reason,
      _ref3$callback = _ref3.callback,
      _callback12 = _ref3$callback === undefined ? _consts.NOOP : _ref3$callback,
      _ref3$errCallback = _ref3.errCallback,
      errCallback = _ref3$errCallback === undefined ? _consts.NOOP : _ref3$errCallback;

  var operator = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.receiveinfointercept.add',
    method: '/iytrade2/savetype',
    args: {
      name: name,
      phone: phone,
      tel: tel,
      addr: addr,
      reason: reason,
      operator: operator,
      reasonLog: "\u6536\u4EF6\u4EBA\u62E6\u622A\uFF1A\u6DFB\u52A0\u3010" + name + "\uFF0C" + phone + "\uFF0C" + tel + "\uFF0C" + addr + "\u3011\u62C9\u9ED1\u539F\u56E0\uFF1A" + reason,
      type: 'con'
    },
    callback: function callback(res) {
      if (res === 1) {
        _callback12(res);
      } else {
        errCallback(res);
      }
    },
    errCallback: errCallback
  });
}

/**
 * 删除收件人拦截信息
 * @param data interceptReceiversGet接口返回的res的item
 * @param callback
 * @param errCallback
 */
exports.interceptReceiversAdd = interceptReceiversAdd;
function interceptReceiverRemove(_ref4) {
  var data = _ref4.data,
      _ref4$callback = _ref4.callback,
      _callback13 = _ref4$callback === undefined ? _consts.NOOP : _ref4$callback,
      _ref4$errCallback = _ref4.errCallback,
      errCallback = _ref4$errCallback === undefined ? _consts.NOOP : _ref4$errCallback;

  var operator = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.remove',
    method: '/iytrade2/delblackbynick',
    args: {
      nicks: data.id,
      type: 'con',
      operator: operator,
      reasonLog: "\u6536\u4EF6\u4EBA\u62E6\u622A\uFF1A\u5220\u9664\u3010" + data.bname + "\uFF0C" + data.phone + "\uFF0C" + data.tel + "\uFF0C" + data.addr + "\u3011"
    },
    callback: function callback(res) {
      if (res === 1) {
        _callback13(res);
      } else {
        errCallback(res);
      }
    },
    errCallback: errCallback
  });
}

/**
 * 获取区域拦截列表
 * @param pageno 页码
 * @param callback
 * @param errCallback
 */
exports.interceptReceiverRemove = interceptReceiverRemove;
function interceptRegionsGet(_ref5) {
  var _ref5$pageno = _ref5.pageno,
      pageno = _ref5$pageno === undefined ? 1 : _ref5$pageno,
      _ref5$callback = _ref5.callback,
      _callback14 = _ref5$callback === undefined ? _consts.NOOP : _ref5$callback,
      _ref5$errCallback = _ref5.errCallback,
      errCallback = _ref5$errCallback === undefined ? _handleError.handleError : _ref5$errCallback;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.settings.bytype.get',
    method: '/iytrade2/gettype',
    args: {
      pageno: pageno,
      type: 'area'
    },
    callback: function callback(res) {
      _callback14(res);
    },
    errCallback: errCallback
  });
}

/**
 * 删除区域拦截信息
 * @param data interceptReceiversGet接口返回的res的item
 * @param callback
 * @param errCallback
 */
exports.interceptRegionsGet = interceptRegionsGet;
function interceptRegionRemove(_ref6) {
  var data = _ref6.data,
      _ref6$callback = _ref6.callback,
      _callback15 = _ref6$callback === undefined ? _consts.NOOP : _ref6$callback,
      _ref6$errCallback = _ref6.errCallback,
      errCallback = _ref6$errCallback === undefined ? _consts.NOOP : _ref6$errCallback;

  var operator = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.remove',
    method: '/iytrade2/delblackbynick',
    args: {
      nicks: data.id,
      type: 'area',
      operator: operator,
      reasonLog: "\u6536\u4EF6\u4EBA\u62E6\u622A\uFF1A\u5220\u9664\u3010" + data.shen + "\uFF0C" + data.shi + "\uFF0C" + data.qu + "\u3011"
    },
    callback: function callback(res) {
      if (res === 1) {
        _callback15(res);
      } else {
        errCallback(res);
      }
    },
    errCallback: errCallback
  });
}

/**
 * 添加需要拦截的区域
 * @param name
 * @param phone
 * @param tel
 * @param addr
 * @param reason
 */
exports.interceptRegionRemove = interceptRegionRemove;
function interceptRegionsAdd(_ref7) {
  var _ref7$province = _ref7.province,
      province = _ref7$province === undefined ? '' : _ref7$province,
      _ref7$city = _ref7.city,
      city = _ref7$city === undefined ? '' : _ref7$city,
      _ref7$country = _ref7.country,
      country = _ref7$country === undefined ? '' : _ref7$country,
      _ref7$reason = _ref7.reason,
      reason = _ref7$reason === undefined ? '' : _ref7$reason,
      _ref7$zip = _ref7.zip,
      zip = _ref7$zip === undefined ? '' : _ref7$zip,
      _ref7$callback = _ref7.callback,
      _callback16 = _ref7$callback === undefined ? _consts.NOOP : _ref7$callback,
      _ref7$errCallback = _ref7.errCallback,
      errCallback = _ref7$errCallback === undefined ? _consts.NOOP : _ref7$errCallback;

  var operator = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.receiveinfointercept.add',
    method: '/iytrade2/savetype',
    args: {
      shen: province,
      shi: city,
      qu: country,
      reason: reason,
      operator: operator,
      zip: zip,
      reasonLog: "\u533A\u57DF\u62E6\u622A\uFF1A\u6DFB\u52A0\u3010" + province + "\uFF0C" + city + "\uFF0C" + country + "\u3011\u62C9\u9ED1\u539F\u56E0\uFF1A" + reason,
      type: 'area_set'
    },
    callback: function callback(res) {
      if (res === '1添加成功') {
        _callback16(res);
      } else {
        errCallback(res);
      }
    },
    errCallback: errCallback
  });
}

// PC获取差评拦截的开关状态
exports.interceptRegionsAdd = interceptRegionsAdd;
function getInterceptStatus() {
  var _callback17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _consts.NOOP;

  var _errCallback3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var obj = JSON.parse(JSON.stringify(_consts2.INTERCEPT_SWITCH_DATASOURCE));
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.summary.get',
    method: '/defence/getsummary',
    callback: function callback(rsp) {
      // callback(rsp);
      if (rsp) {
        var switchArr = obj.switchArr;
        // 订单件数小于(开关和数据) || 一个订单中同一个宝贝购数小于(开关和数据)
        if (!rsp.carnumless || !rsp.babynumless) {
          rsp.carnumless = "off;5";
        }
        Object.keys(switchArr).forEach(function (item, index) {
          // 关键字返回的数据与其他返回值不同，所以要做特殊处理
          if (item != 'conditions') {
            if (rsp[item].indexOf('on') > -1) {
              switchArr[item].type != 'no' && obj.modeNum[switchArr[item].type]++;
              switchArr[item].checked = true;
            } else {
              switchArr[item].checked = false;
            }
          } else {
            var _conditionsArr = rsp.conditions.split('|Y|');
            if (_conditionsArr[0] == "on") {
              obj.modeNum.relaxNum++;
              switchArr[item].checked = true;
            } else {
              switchArr[item].checked = false;
            }
          }
        });

        var bigmoneyArr = rsp.bigmoney.split(';'); // 订单金额大于(开关和数据)
        var bigmoney = bigmoneyArr[1] || '1000'; // 订单金额大于数据
        var isHasPostfeeMore = bigmoneyArr[2] || true; // 订单金额大于(含运费不含运费的标志)
        var carnumlessArr = rsp.carnumless ? rsp.carnumless.split(';') : "off;5".split(';'); // 订单件数小于(开关和数据)
        var carnumless = carnumlessArr[1] || '5'; // 订单件数小于数据
        var carnumArr = rsp.carnum.split(';'); // 订单件数大于(开关和数据)
        var carnum = carnumArr[1] || '10'; // 订单件数大于数据
        var smallmoneyArr = rsp.smallmoney.split(';'); // 订单金额小于(开关和数据)
        var smallmoney = smallmoneyArr[1] || '10'; // 订单金额小于数据
        var isHasPostfeeLess = smallmoneyArr[2] || true; // 订单金额小于(含运费不含运费的标志)
        var babynumlessArr = rsp.babynumless ? rsp.babynumless.split(';') : "off;5".split(';'); // 一个订单中同一个宝贝购数小于(开关和数据)
        var babynumless = babynumlessArr[1] || '5'; // 一个订单中同一个宝贝购数小于数据
        var babynumArr = rsp.babynum.split(';'); // 一个订单中同一个宝贝购数大于(开关和数据)
        var babynum = babynumArr[1] || '15'; // 一个订单中同一个宝贝购数大于数据
        var conditionsArr = rsp.conditions.split('|Y|'); // 关键字开关和内容
        var conditions = conditionsArr[1]; // 关键字内容
        var sellernote = Number(rsp.sellernote); // 交易时卖家解释当前选择
        var receivePhone = rsp.phone; // 接受手机号
        var goodrate = rsp.goodrate.split(';'); // 好评率
        var goodrateTit = goodrate[1]; // 好评率开关
        var credit = rsp.credit.split(';'); // 信用分
        var creditData = credit[1]; // 信用分数据
        var regdays = rsp.regdays.split(';'); // 注册天数
        var regdaysData = regdays[1]; // 注册天数数据

        // 组装数据
        obj.denfenon = rsp.denfenon == 'on'; // 差评拦截总开关
        obj.switchArr.bigmoney.value = bigmoney; // 订单金额大于数据
        obj.switchArr.bigmoney.isHasPostfeeMore = isHasPostfeeMore; // 订单金额大于(含运费不含运费的标志)
        obj.switchArr.carnumless.value = carnumless; // 订单件数小于数据
        obj.switchArr.carnum.value = carnum; // 订单件数大于数据
        obj.switchArr.smallmoney.value = smallmoney; // 订单金额小于数据
        obj.switchArr.smallmoney.isHasPostfeeLess = isHasPostfeeLess; // 订单金额小于(含运费不含运费的标志)
        obj.switchArr.babynumless.value = babynumless; // 一个订单中同一个宝贝购数小于数据
        obj.switchArr.babynum.value = babynum; // 一个订单中同一个宝贝购数大于数据
        obj.switchArr.conditions.value = conditions; // 关键字内容
        obj.sellernote = sellernote; // 交易时卖家解释当前选择
        obj.receivePhone = receivePhone; // 接受手机号
        obj.switchArr.goodrate.value = goodrateTit; // 好评率
        obj.switchArr.credit.value = creditData; // 信用分
        obj.switchArr.regdays.value = regdaysData; // 注册天数

        _callback17(obj);
      }
    },
    errCallback: function errCallback(err) {
      _errCallback3(err);
    }
  });
}

// PC差评拦截修改单个开关状态
exports.getInterceptStatus = getInterceptStatus;
function changeInterceptStauts(obj) {
  var _callback18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var _errCallback4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.settings.save',
    method: '/defence/saveDefenSetting',
    args: {
      "key": obj.keyArr,
      "value": obj.valueArr,
      operator: (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick,
      isHasPostfeeMoreFlag: obj.isHasPostfeeMoreFlag,
      isHasPostfeeLessFlag: obj.isHasPostfeeLessFlag
    },
    callback: function callback(res) {
      isGetInterceptStatus = false; // 每次修改之后把改值修改为false
      _callback18(res);
    },
    errCallback: function errCallback(err) {
      _errCallback4(err);
    }
  });
}

// 获取差评拦截的操作日志
exports.changeInterceptStauts = changeInterceptStauts;
function getInterceptOperationLog(page_no) {
  var _callback19 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var _errCallback5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.opreation.log.get',
    method: '/Iytrade2/showNegativeLogs',
    args: { page_no: page_no },
    callback: function callback(res) {
      _callback19(res);
    },
    errCallback: function errCallback(err) {
      _errCallback5(err);
    }
  });
}

// 搜索拦截日志
exports.getInterceptOperationLog = getInterceptOperationLog;
function serachInterceptRecord() {
  var pageno = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var nickid = arguments[1];

  var _callback20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var _errCallback6 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.interceptlog.get',
    method: '/Iytrade2/getblaRecByList',
    args: { pageno: pageno, nickid: nickid },
    callback: function callback(res) {
      _callback20(res);
    },
    errCallback: function errCallback(err) {
      _errCallback6(err);
    }
  });
}

// 搜索旺旺白名单或者黑名单
exports.serachInterceptRecord = serachInterceptRecord;
function serachInterceptWhiteList(nick, type) {
  var _callback21 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var _errCallback7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.settings.bytype.get',
    method: '/iytrade2/gettype',
    args: { nick: nick, type: type },
    callback: function callback(res) {
      _callback21(res);
    },
    errCallback: function errCallback(err) {
      _errCallback7(err);
    }
  });
}

// 搜索黑名单
exports.serachInterceptWhiteList = serachInterceptWhiteList;
function serachInterceptBLackList(nickid, type) {
  var _callback22 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var _errCallback8 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.search',
    method: '/iytrade2/getblackOne',
    args: {
      nickid: nickid,
      type: type == 'autorate' ? 'zdpj' : 'cplj'
    },
    callback: function callback(res) {
      _callback22(res);
    },
    errCallback: function errCallback(err) {
      _errCallback8(err);
    }
  });
}

// 导入记录
exports.serachInterceptBLackList = serachInterceptBLackList;
function getImportRecord(page, type) {
  var _callback23 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var _errCallback9 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.importrecord.get',
    method: '/iytrade2/getImportLog',
    args: {
      page: page,
      type: type === 'autorate' ? 'zdpj' : 'cplj'
    },
    callback: function callback(res) {
      _callback23(res);
    },
    errCallback: function errCallback(err) {
      _errCallback9(err);
    }
  });
}

// 搜索收件人拦截
exports.getImportRecord = getImportRecord;
function searchInterceptReceiver(parmas) {
  var _callback24 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var _errCallback10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.receiveinfointercept.search',
    method: '/iytrade2/searchArea',
    args: {
      name: parmas.bname || '',
      phone: parmas.phone || '',
      tel: parmas.tel || '',
      addr: parmas.addr || '',
      pageNo: parmas.pageNo,
      type: "con" // 收件人拦截查询
    },
    callback: function callback(res) {
      _callback24(res);
    },
    errCallback: function errCallback(err) {
      _errCallback10(err);
    }
  });
}

exports.searchInterceptReceiver = searchInterceptReceiver;
function searchRegionList(skey, pageNo) {
  var _callback25 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var _errCallback11 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _consts.NOOP;

  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.receiveinfointercept.search',
    method: '/iytrade2/searchArea',
    args: {
      skey: skey, // 省市区模糊查询
      pageNo: pageNo,
      type: "area" // 区域拦截的搜索
    },
    callback: function callback(res) {
      _callback25(res);
    },
    errCallback: function errCallback(err) {
      _errCallback11(err);
    }
  });
}

exports.searchRegionList = searchRegionList;
function getInterceptBabySelectDataSource() {
  var _callback26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _consts.NOOP;

  var _errCallback12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var nick = (0, _index.getUserInfo)().userNick;
  (0, _qnRouter.qnRouter)({
    api: 'taobao.sellercats.list.get',
    params: { nick: nick },
    callback: function callback(res) {
      var dataSource = [{ label: "全部宝贝", value: "all" }, { label: "未分类宝贝", value: "-1" }];
      var data = {};
      res = (0, _resolveTopResponse.resolveTopResponse)(res);
      res = (0, _resolveTopResponse.getArrayByKey)('seller_cat', res);
      // 配置每一个父类下面有多少个子类的分类
      res.map(function (item) {
        if (item.parent_cid == 0) {
          data[item.cid] = [{ label: item.name, value: item.cid }];
        } else {
          data[item.parent_cid].push({ label: '┗ ' + item.name, value: item.cid });
        }
      });
      Object.keys(data).map(function (item) {
        dataSource = dataSource.concat(data[item]);
      });
      _callback26(dataSource);
    },
    errCallback: function errCallback(error) {
      _errCallback12(error);
    }
  });
}

exports.getInterceptBabySelectDataSource = getInterceptBabySelectDataSource;
function getOnSaleBabyList(params) {
  var _callback27 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var _errCallback13 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  (0, _qnRouter.qnRouter)({
    api: "taobao.items.onsale.get",
    params: params,
    callback: function callback(res) {
      var data = {};
      res = (0, _resolveTopResponse.resolveTopResponse)(res);
      data.sum = res.total_results;
      data.data = (0, _resolveTopResponse.getArrayByKey)('item', res);
      _callback27(data);
    },
    errCallback: function errCallback(error) {
      _errCallback13(error);
    }
  });
}

// 批量导入黑名单
exports.getOnSaleBabyList = getOnSaleBabyList;
function batchImportBlackList(type) {
  var _callback28 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _consts.NOOP;

  var _errCallback14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _consts.NOOP;

  var operator = (0, _index.getUserInfo)().subUserNick || (0, _index.getUserInfo)().userNick;
  (0, _index.api)({
    apiName: 'aiyong.trade.order.defence.blacklist.badrate.import',
    method: '/iytrade2/batchImport',
    args: {
      type: type,
      operator: operator
    },
    callback: function callback(res) {
      var title = '';
      var result = res.result;
      if (result == 'lose_session') {
        title = '授权失效';
      }
      if (result == 'api_fail') {
        title = '接口调用失败';
      }
      if (result == 'every_good') {
        title = '恭喜亲，近六个月并没有收到任何中差评，无需导入。';
      }
      if (result == 'noNeedSave') {
        title = '已经导入过了，无需导入。';
      }
      _callback28(title);
    },
    errCallback: function errCallback(err) {
      _errCallback14(err);
    }
  });
}
exports.batchImportBlackList = batchImportBlackList;