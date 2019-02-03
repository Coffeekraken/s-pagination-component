"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _coffeekrakenSTemplateComponent = _interopRequireDefault(require("coffeekraken-s-template-component"));

var _constrain = _interopRequireDefault(require("coffeekraken-sugar/js/utils/numbers/constrain"));

var _range = _interopRequireDefault(require("lodash/range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SPaginationComponent =
/*#__PURE__*/
function (_STemplateComponent) {
  _inherits(SPaginationComponent, _STemplateComponent);

  function SPaginationComponent() {
    _classCallCheck(this, SPaginationComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SPaginationComponent).apply(this, arguments));
  }

  _createClass(SPaginationComponent, [{
    key: "componentWillMount",

    /**
     * Component will mount
     * @definition    SWebComponent.componentWillMount
     * @protected
     */
    value: function componentWillMount() {
      _get(_getPrototypeOf(SPaginationComponent.prototype), "componentWillMount", this).call(this);

      console.log(this.physicalProps);
    }
    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */

  }, {
    key: "componentMount",
    value: function componentMount() {
      _get(_getPrototypeOf(SPaginationComponent.prototype), "componentMount", this).call(this);
    }
    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: "componentUnmount",
    value: function componentUnmount() {
      _get(_getPrototypeOf(SPaginationComponent.prototype), "componentUnmount", this).call(this);
    }
    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: "componentWillReceiveProp",
    value: function componentWillReceiveProp(name, newVal, oldVal) {
      _get(_getPrototypeOf(SPaginationComponent.prototype), "componentWillReceiveProp", this).call(this, name, newVal, oldVal);
    }
    /**
     * Go to a specific page
     * @param    {Integer}    page    The page to go to
     */

  }, {
    key: "goTo",
    value: function goTo(page) {
      this.props.current = page;
    }
    /**
     * Go to next
     */

  }, {
    key: "goToNext",
    value: function goToNext() {
      this.props.current = this.props.current + 1 <= this.props.pages ? this.props.current + 1 : this.props.pages;
    }
    /**
     * Go to previous
     */

  }, {
    key: "goToPrevious",
    value: function goToPrevious() {
      this.props.current = this.props.current - 1 >= 1 ? this.props.current - 1 : 1;
    }
    /**
     * Show first
     */

  }, {
    key: "goToFirst",
    value: function goToFirst() {
      this.props.current = 1;
    }
    /**
     * Show last
     */

  }, {
    key: "goToLast",
    value: function goToLast(e) {
      this.props.current = this.props.pages;
    }
    /**
     * Render the component
     * Here goes the code that reflect the this.props state on the actual html element
     * @definition    SWebComponent.render
     * @protected
     */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var before = this.props.limit ? (this.props.limit - 1) / 2 : this.props.pages;
      var after = this.props.limit ? (this.props.limit - 1) / 2 : this.props.pages;
      var firstPage = this.props.current - before;
      firstPage = (0, _constrain.default)(firstPage, 1, this.props.pages);
      var lastPage = this.props.current + after;
      lastPage = (0, _constrain.default)(lastPage, 0, this.props.pages);

      if (this.props.limit) {
        if (lastPage - firstPage < this.props.limit - 1) {
          if (lastPage === this.props.pages) {
            firstPage = lastPage - (this.props.limit - 1);
          } else {
            lastPage = firstPage + this.props.limit - 1;
          }
        }

        firstPage = (0, _constrain.default)(firstPage, 1, this.props.pages);
        lastPage = (0, _constrain.default)(lastPage, 0, this.props.pages);
      }

      var pages = (0, _range.default)(firstPage, lastPage + 1);

      _get(_getPrototypeOf(SPaginationComponent.prototype), "render", this).call(this, _coffeekrakenSTemplateComponent.default.createElement("ul", {
        class: "".concat(this.componentNameDash)
      }, this.props.showFirst && _coffeekrakenSTemplateComponent.default.createElement("li", {
        onClick: this.goToFirst.bind(this),
        class: "".concat(this.componentNameDash, "__item ").concat(this.componentNameDash, "__item--first")
      }, this.props.showFirst), this.props.showPrevious && _coffeekrakenSTemplateComponent.default.createElement("li", {
        onClick: this.goToPrevious.bind(this),
        class: "".concat(this.componentNameDash, "__item ").concat(this.componentNameDash, "__item--previous")
      }, this.props.showPrevious), pages.map(function (page) {
        return _coffeekrakenSTemplateComponent.default.createElement("li", {
          onClick: function onClick() {
            return _this.goTo(page);
          },
          class: "".concat(_this.componentNameDash, "__item ").concat(_this.props.current === page ? "active" : "")
        }, page);
      }), this.props.showNext && _coffeekrakenSTemplateComponent.default.createElement("li", {
        onClick: this.goToNext.bind(this),
        class: "".concat(this.componentNameDash, "__item ").concat(this.componentNameDash, "__item--next")
      }, this.props.showNext), this.props.showLast && _coffeekrakenSTemplateComponent.default.createElement("li", {
        onClick: this.goToLast.bind(this),
        class: "".concat(this.componentNameDash, "__item ").concat(this.componentNameDash, "__item--last")
      }, this.props.showLast)));
    }
  }], [{
    key: "defaultCss",

    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return "\n      ".concat(componentNameDash, " {\n        display : block;\n      }\n    ");
    }
  }, {
    key: "defaultProps",

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {
        onchange: null,

        /**
         * Specify how many pages we have to paginate
         * @prop
         * @type    {Integer}
         */
        pages: null,

        /**
         * Specify the current page we're on
         * @prop
         * @type    {Integer}
         */
        current: null,

        /**
         * Specify a limit of pages to show at a time. Better if it's an odd value
         * @prop
         * @type    {Integer}
         */
        limit: 5,

        /**
         * Specify if want to show the "first" item materialised by a "«". Can be false or a string to use as label
         * @prop
         * @type    {Boolean|String}
         */
        showFirst: "«",

        /**
         * Specify if want to show the "last" item materialised by a "»". Can be false or a string to use as label
         * @prop
         * @type    {Boolean|String}
         */
        showLast: "»",

        /**
         * Specify if want to show the "previous" item materialised by a "<". Can be false or a string to use as label
         * @prop
         * @type    {Boolean|String}
         */
        showPrevious: "<",

        /**
         * Specify if want to show the "next" item materialised by a ">". Can be false or a string to use as label
         * @prop
         * @type    {Boolean|String}
         */
        showNext: ">"
      };
    }
    /**
     * Default state
     * @definition    STemplateComponent.defaultState
     * @protected
     */

  }, {
    key: "defaultState",
    get: function get() {
      return {};
    }
    /**
     * Physical props
     * @definition    SWebComponent.physicalProps
     * @protected
     */

  }, {
    key: "physicalProps",
    get: function get() {
      return ["pages", "current"];
    }
    /**
     * Required props
     * @definition    SWebComponent.requiredProps
     * @protected
     */

  }, {
    key: "requiredProps",
    get: function get() {
      return ["pages", "current"];
    }
  }]);

  return SPaginationComponent;
}(_coffeekrakenSTemplateComponent.default);

exports.default = SPaginationComponent;