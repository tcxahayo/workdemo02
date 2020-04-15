"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BabyContent.__proto__ || Object.getPrototypeOf(BabyContent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__44"], _this.onPageChange = function (type, v) {}, _this.customComponents = ["MyPagination"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BabyContent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BabyContent.prototype.__proto__ || Object.getPrototypeOf(BabyContent.prototype), "_constructor", this).call(this, props);
      this.state = {};
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__44"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__44 = _genCompid2[0],
          $compid__44 = _genCompid2[1];

      var PAGE_SIZE_LIST = [20, 40, 80, 100];
      propsManager.set({
        "total": 200,
        "pageNo": 1,
        "pageSizeSelector": "dropdown",
        "pageSize": 20,
        "pageSizeList": PAGE_SIZE_LIST,
        "onPageSizeChange": this.onPageChange.bind(this, 'pageSize'),
        "onPageNoChange": this.onPageChange.bind(this, 'pageNo')
      }, $compid__44, $prevCompid__44);
      Object.assign(this.__state, {
        $compid__44: $compid__44
      });
      return this.__state;
    }
  }]);

  return BabyContent;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "components/babyChoice/baby/index", _temp2);
exports.default = BabyContent;

Component(require('../../../npm/_tarojs/taro-alipay/index.js').default.createComponent(BabyContent));