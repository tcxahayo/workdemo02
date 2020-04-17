"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index2 = require("../../../npm/_tarojs/taro-alipay/index.js");

var _index3 = _interopRequireDefault(_index2);

var _taobaoItemListGet = require("../../../public/tradePublic/itemTopApi/taobaoItemListGet.js");

var _index4 = require("../../../public/tradePublic/intercept/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsManager = my.propsManager;
var BabyContent = (_temp2 = _class = function (_BaseComponent) {
  _inherits(BabyContent, _BaseComponent);

  function BabyContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BabyContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BabyContent.__proto__ || Object.getPrototypeOf(BabyContent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__75", "classList", "keywords", "checkAll", "order_by", "list", "cheackList", "total_results", "fields", "page", "status", "current", "seller_cids", "changeWord"], _this.getClasstify = function () {
      (0, _index4.getInterceptBabySelectDataSource)(function (data) {
        _this.setState({
          classList: data
        });
      });
    }, _this.getList = function () {
      (0, _taobaoItemListGet.taobaoItemListGet)({
        fields: _this.state.fields,
        page_no: _this.state.current,
        page_size: 20,
        status: _this.state.status,
        extraArgs: {
          order_by: _this.state.order_by,
          q: _this.state.keywords,
          seller_cids: _this.state.seller_cids
        },
        callback: function callback(data) {
          console.log(data);
          if (data.total_results > 0) {
            var newList = data.items.item.map(function (item, index) {
              item.pic_url = item.pic_url + '_60x60.jpg';
              item.checked = false;
              if (_this.state.cheackList.indexOf(item.num_iid) !== -1) {
                item.checked = true;
              }
              return item;
            });
            _this.setState({
              list: newList,
              total_results: data.total_results,
              keywords: ''
            });
          } else {
            _this.setState({
              list: []
            });
          }
        }
      });
    }, _this.getListById = function () {
      (0, _taobaoItemListGet.taobaoItemListGet)({
        fields: _this.state.fields,
        page_no: _this.state.current,
        page_size: 20,
        status: _this.state.status,
        extraArgs: {
          order_by: _this.state.order_by,
          seller_cids: _this.state.seller_cids
        },
        callback: function callback(data) {
          var num = data.total_results / 20;
          console.log(data);
          if (data.total_results > 0) {
            var newList = data.items.item.map(function (item, index) {
              item.pic_url = item.pic_url + '_60x60.jpg';
              item.checked = false;
              if (_this.state.cheackList.indexOf(item.num_iid) !== -1) {
                item.checked = true;
              }
              return item;
            });
            _this.setState({
              list: newList,
              total_results: data.total_results,
              keywords: ''
            });
          } else {
            _this.setState({
              list: []
            });
          }
        }
      });
    }, _this.changeStatus = function (e) {
      _this.setState({
        status: e.detail.value
      });
    }, _this.changeClasstify = function (e) {
      _this.setState({
        seller_cids: e.detail.value
      });
    }, _this.changeWord = function (e) {
      _this.setState({
        changeWord: e.detail.value
      });
    }, _this.changePage = function (current) {
      _this.setState({
        current: current,
        checkAll: false
      }, function () {
        _this.getList();
      });
    }, _this.serach = function () {
      if (_this.state.changeWord === '宝贝关键词') {
        _this.setState({
          current: 1,
          order_by: 'list_time:desc',
          cheackList: [],
          checkAll: false
        }, function () {
          _this.getList();
        });
      } else {
        _this.setState({
          current: 1,
          order_by: 'list_time:desc',
          cheackList: [],
          checkAll: false,
          keywords: ''
        }, function () {
          _this.getListById();
        });
      }
    }, _this.orderBy = function (value) {
      _this.setState({
        order_by: value,
        cheackList: [],
        checkAll: false
      }, function () {
        _this.getList();
      });
    }, _this.valueChange = function (e) {
      _this.setState({
        keywords: e.target.value
      });
    }, _this.changeChecked = function (e) {
      console.log(e);
      var id = e.target.id;
      var index = e.target.dataset.index;
      var newList = _this.state.list;
      newList[index].checked = !newList[index].checked;
      if (e.target.value) {
        _this.setState({
          cheackNum: _this.state.cheackNum + 1,
          list: newList,
          cheackList: [].concat(_toConsumableArray(_this.state.cheackList), [id])
        });
      } else {
        var _index = _this.state.cheackList.indexOf(id);
        var newCheackList = _this.state.cheackList;
        newCheackList.splice(_index, 1);
        _this.setState({
          cheackNum: _this.state.cheackNum - 1,
          list: newList,
          cheackList: newCheackList
        });
      }
    }, _this.checkAll = function (e) {
      console.log(e);
      var newList = _this.state.list;
      var newCheackList = _this.state.cheackList;
      if (e.target.value) {
        newList.map(function (item) {
          newCheackList.push(item.num_iid);
          item.checked = true;
          return item;
        });
        var arr = new Set(newCheackList);
        _this.setState({
          list: newList,
          cheackList: Array.from(arr),
          checkAll: true
        });
      } else {
        newList.map(function (item) {
          newCheackList.splice(newCheackList.indexOf(item.id), 1);
          item.checked = false;
          return item;
        });
        _this.setState({
          list: newList,
          cheackList: newCheackList,
          checkAll: false
        });
      }
    }, _this.demo = function () {
      sessionStorage.setItem('data', _this.state.list);
      console.log(_this.state.list);
      console.log(_this.state.cheackList);
      console.log(_this.state.classList);
    }, _this.customComponents = ["MyPagination"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BabyContent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BabyContent.prototype.__proto__ || Object.getPrototypeOf(BabyContent.prototype), "_constructor", this).call(this, props);
      this.state = {
        fields: 'title,num_iid,pic_url,num,price,sold_quantity,outer_id',
        page: 1,
        status: '出售中',
        list: [],
        total_results: '',
        current: 1,
        order_by: 'list_time:desc',
        keywords: '',
        cheackList: [],
        checkAll: false,
        classList: [],
        seller_cids: 'all',
        changeWord: '宝贝关键词'
      };
      this.$$refs = [];
    }
    //分类接口

    //接口调取数据,非商家编码

    //查询商家编码接口

    //切换商品状态

    //选择分类

    //切换查询关键词

    //点击页数

    //确定查询

    //点击排序

    //输入关键词

    //cheackbox,单选

    //全选

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //初始化页面数据，获取出售中的商品
      this.getList();
      //获取分类
      this.getClasstify();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index2.genCompid)(__prefix + "$compid__75"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__75 = _genCompid2[0],
          $compid__75 = _genCompid2[1];

      var _state = this.__state,
          list = _state.list,
          total_results = _state.total_results,
          current = _state.current,
          order_by = _state.order_by,
          keywords = _state.keywords,
          checkAll = _state.checkAll,
          cheackList = _state.cheackList,
          classList = _state.classList;

      list.length > 0 && propsManager.set({
        "total": total_results,
        "pageNo": current,
        "pageSizeSelector": "dropdown",
        "pageSize": 20,
        "onPageNoChange": this.changePage
      }, $compid__75, $prevCompid__75);
      Object.assign(this.__state, {
        $compid__75: $compid__75
      });
      return this.__state;
    }
  }]);

  return BabyContent;
}(_index2.Component), _class.$$events = ["changeStatus", "changeClasstify", "changeWord", "valueChange", "serach", "checkAll", "demo", "orderBy", "changeChecked"], _class.$$componentPath = "components/babyChoice/baby/index", _temp2);
exports.default = BabyContent;

Component(require('../../../npm/_tarojs/taro-alipay/index.js').default.createComponent(BabyContent));