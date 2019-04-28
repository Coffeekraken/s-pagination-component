'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _coffeekrakenSLitHtmlComponent = _interopRequireDefault(
  require('coffeekraken-s-lit-html-component')
)

var _litHtml = require('lit-html')

var _constrain = _interopRequireDefault(
  require('coffeekraken-sugar/js/utils/numbers/constrain')
)

var _range = _interopRequireDefault(require('lodash/range'))

var _sprintf = _interopRequireDefault(
  require('coffeekraken-sugar/js/utils/strings/sprintf')
)

var _dispatchEvent = _interopRequireDefault(
  require('coffeekraken-sugar/js/dom/dispatchEvent')
)

var _odd = _interopRequireDefault(require('coffeekraken-sugar/js/utils/is/odd'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

function _templateObject16() {
  var data = _taggedTemplateLiteral([
    '\n                  <a\n                    href=',
    '\n                    title=',
    '\n                    @click=',
    '\n                  >\n                    ',
    '\n                  </a>\n                '
  ])

  _templateObject16 = function _templateObject16() {
    return data
  }

  return data
}

function _templateObject15() {
  var data = _taggedTemplateLiteral([
    '\n                  <a\n                    href=',
    '\n                    title=',
    '\n                  >\n                    ',
    '\n                  </a>\n                '
  ])

  _templateObject15 = function _templateObject15() {
    return data
  }

  return data
}

function _templateObject14() {
  var data = _taggedTemplateLiteral([
    '\n            <li\n              class=',
    '\n            >\n              ',
    '\n              ',
    '\n            </li>\n          '
  ])

  _templateObject14 = function _templateObject14() {
    return data
  }

  return data
}

function _templateObject13() {
  var data = _taggedTemplateLiteral([
    '\n                  <a\n                    href=',
    '\n                    title=',
    '\n                    @click=',
    '\n                  >\n                    ',
    '\n                  </a>\n                '
  ])

  _templateObject13 = function _templateObject13() {
    return data
  }

  return data
}

function _templateObject12() {
  var data = _taggedTemplateLiteral([
    '\n                  <a href=',
    ' title=',
    '>\n                    ',
    '\n                  </a>\n                '
  ])

  _templateObject12 = function _templateObject12() {
    return data
  }

  return data
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([
    '\n            <li\n              class=',
    '\n            >\n              ',
    '\n              ',
    '\n            </li>\n          '
  ])

  _templateObject11 = function _templateObject11() {
    return data
  }

  return data
}

function _templateObject10() {
  var data = _taggedTemplateLiteral([
    '\n                <a\n                  href=',
    '\n                  title=',
    '\n                  @click=',
    '\n                >\n                  ',
    '\n                </a>\n              '
  ])

  _templateObject10 = function _templateObject10() {
    return data
  }

  return data
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([
    '\n                <a href=',
    ' title=',
    '>\n                  ',
    '\n                </a>\n              '
  ])

  _templateObject9 = function _templateObject9() {
    return data
  }

  return data
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([
    '\n          <li\n            class=',
    '\n          >\n            ',
    '\n            ',
    '\n          </li>\n        '
  ])

  _templateObject8 = function _templateObject8() {
    return data
  }

  return data
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([
    '\n                  <a\n                    href=',
    '\n                    title=',
    '\n                    @click=',
    '\n                  >\n                    ',
    '\n                  </a>\n                '
  ])

  _templateObject7 = function _templateObject7() {
    return data
  }

  return data
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([
    '\n                  <a\n                    href=',
    '\n                    title=',
    '\n                  >\n                    ',
    '\n                  </a>\n                '
  ])

  _templateObject6 = function _templateObject6() {
    return data
  }

  return data
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    '\n            <li\n              class=',
    '\n            >\n              ',
    '\n              ',
    '\n            </li>\n          '
  ])

  _templateObject5 = function _templateObject5() {
    return data
  }

  return data
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([
    '\n                <a\n                  href="1"\n                  title="1"\n                  @click=',
    '\n                >\n                  ',
    '\n                </a>\n              '
  ])

  _templateObject4 = function _templateObject4() {
    return data
  }

  return data
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n                <a href=',
    ' title="1">\n                  ',
    '\n                </a>\n              '
  ])

  _templateObject3 = function _templateObject3() {
    return data
  }

  return data
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n          <li\n            class=',
    '\n          >\n            ',
    '\n            ',
    '\n          </li>\n          '
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n      <ul class=',
    '>\n        ',
    '\n\n        ',
    '\n\n        ',
    '\n\n        ',
    '\n\n        ',
    '\n      </ul>\n    '
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _get(target, property, receiver) {
  if (typeof Reflect !== 'undefined' && Reflect.get) {
    _get = Reflect.get
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property)
      if (!base) return
      var desc = Object.getOwnPropertyDescriptor(base, property)
      if (desc.get) {
        return desc.get.call(receiver)
      }
      return desc.value
    }
  }
  return _get(target, property, receiver || target)
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object)
    if (object === null) break
  }
  return object
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

/**
 * Create simple and complexe pagination easily with this webcomponent
 *
 * @example    html
 * <s-pagination
 *   pages="50"
 *   current="10"
 *   limit="5"
 *   href="/comments/%d"
 * ></s-pagination>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SPaginationComponent =
  /*#__PURE__*/
  (function(_SLitHtmlComponent) {
    _inherits(SPaginationComponent, _SLitHtmlComponent)

    function SPaginationComponent() {
      _classCallCheck(this, SPaginationComponent)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(SPaginationComponent).apply(this, arguments)
      )
    }

    _createClass(
      SPaginationComponent,
      [
        {
          key: 'componentWillMount',

          /**
           * Component will mount
           * @definition    SWebComponent.componentWillMount
           * @protected
           */
          value: function componentWillMount() {
            _get(
              _getPrototypeOf(SPaginationComponent.prototype),
              'componentWillMount',
              this
            ).call(this) // check the limit parameter that has to be an odd number

            if (this.props.limit && !(0, _odd.default)(this.props.limit)) {
              throw new Error(
                'The '.concat(
                  this.componentNameDash,
                  ' "limit" property has to be an odd integer...'
                )
              )
            }
          }
          /**
           * Mount component
           * @definition    SWebComponent.componentMount
           * @protected
           */
        },
        {
          key: 'componentMount',
          value: function componentMount() {
            _get(
              _getPrototypeOf(SPaginationComponent.prototype),
              'componentMount',
              this
            ).call(this)
          }
          /**
           * Component unmount
           * @definition    SWebComponent.componentUnmount
           * @protected
           */
        },
        {
          key: 'componentUnmount',
          value: function componentUnmount() {
            _get(
              _getPrototypeOf(SPaginationComponent.prototype),
              'componentUnmount',
              this
            ).call(this)
          }
          /**
           * Component will receive prop
           * @definition    SWebComponent.componentWillReceiveProp
           * @protected
           */
        },
        {
          key: 'componentWillReceiveProp',
          value: function componentWillReceiveProp(name, newVal, oldVal) {
            _get(
              _getPrototypeOf(SPaginationComponent.prototype),
              'componentWillReceiveProp',
              this
            ).call(this, name, newVal, oldVal)

            switch (name) {
              case 'current':
                if (newVal === oldVal) return

                this._changePageHandler(newVal, oldVal)

                break
            }
          }
          /**
           * Change page handler
           * @param    {Integer}    newPage    The new current page
           * @param    {Integer}    previousPage    The previous current page
           */
        },
        {
          key: '_changePageHandler',
          value: function _changePageHandler(newPage, previousPage) {
            /**
             * Change event dispatched when the pagination current page is updated
             * @event
             * @name    change
             * @example    js
             * $myPagination.addEventListener('change', (e) => {
             *   // e.detail.newPage
             *   // e.detaul.previousPage
             *   // do something on page change
             * })
             */
            ;(0, _dispatchEvent.default)(this, 'change', {
              newPage: newPage,
              previousPage: previousPage
            }) // chec if the onChange property exist

            this.props.onchange && this.props.onchange(newPage, previousPage)
          }
          /**
           * Go to a specific page
           * @param    {Integer}    page    The page to go to
           */
        },
        {
          key: 'goTo',
          value: function goTo(page) {
            this.props.current = page
          }
          /**
           * Go to next
           */
        },
        {
          key: 'goToNext',
          value: function goToNext() {
            this.props.current =
              this.props.current + 1 <= this.props.pages
                ? this.props.current + 1
                : this.props.pages
          }
          /**
           * Go to previous
           */
        },
        {
          key: 'goToPrevious',
          value: function goToPrevious() {
            this.props.current =
              this.props.current - 1 >= 1 ? this.props.current - 1 : 1
          }
          /**
           * Show first
           */
        },
        {
          key: 'goToFirst',
          value: function goToFirst() {
            this.props.current = 1
          }
          /**
           * Show last
           */
        },
        {
          key: 'goToLast',
          value: function goToLast(e) {
            this.props.current = this.props.pages
          }
          /**
           * Render the component
           * Here goes the code that reflect the this.props state on the actual html element
           * @definition    SWebComponent.render
           * @protected
           */
        },
        {
          key: 'render',
          value: function render() {
            var _this = this

            var before = this.props.limit
              ? (this.props.limit - 1) / 2
              : this.props.pages
            var after = this.props.limit
              ? (this.props.limit - 1) / 2
              : this.props.pages
            var firstPage = this.props.current - before
            firstPage = (0, _constrain.default)(firstPage, 1, this.props.pages)
            var lastPage = this.props.current + after
            lastPage = (0, _constrain.default)(lastPage, 0, this.props.pages)

            if (this.props.limit) {
              if (lastPage - firstPage < this.props.limit - 1) {
                if (lastPage === this.props.pages) {
                  firstPage = lastPage - (this.props.limit - 1)
                } else {
                  lastPage = firstPage + this.props.limit - 1
                }
              }

              firstPage = (0, _constrain.default)(
                firstPage,
                1,
                this.props.pages
              )
              lastPage = (0, _constrain.default)(lastPage, 0, this.props.pages)
            }

            var nextPage =
              this.props.current + 1 <= this.props.pages
                ? this.props.current + 1
                : this.props.pages
            var previousPage =
              this.props.current - 1 >= 1 ? this.props.current - 1 : 1
            var pages = (0, _range.default)(firstPage, lastPage + 1)

            _get(
              _getPrototypeOf(SPaginationComponent.prototype),
              'render',
              this
            ).call(
              this,
              (0, _litHtml.html)(
                _templateObject(),
                this.componentNameDash,
                this.props.showFirst
                  ? (0, _litHtml.html)(
                      _templateObject2(),
                      ''
                        .concat(this.componentNameDash, '__item ')
                        .concat(
                          this.componentNameDash,
                          '__item--first\n              '
                        )
                        .concat(
                          this.props.current === 1
                            ? ''.concat(
                                this.componentNameDash,
                                '__item--disabled'
                              )
                            : ''
                        ),
                      this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject3(),
                            (0, _sprintf.default)(this.props.href, 1),
                            this.props.showFirst
                          )
                        : '',
                      !this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject4(),
                            function(e) {
                              e.preventDefault()

                              _this.goTo(1)
                            },
                            this.props.showFirst
                          )
                        : ''
                    )
                  : '',
                this.props.showPrevious
                  ? (0, _litHtml.html)(
                      _templateObject5(),
                      ''
                        .concat(this.componentNameDash, '__item ')
                        .concat(this.componentNameDash, '__item--previous ')
                        .concat(
                          this.props.current === 1
                            ? ''.concat(
                                this.componentNameDash,
                                '__item--disabled'
                              )
                            : ''
                        ),
                      this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject6(),
                            (0, _sprintf.default)(
                              this.props.href,
                              previousPage
                            ),
                            previousPage,
                            this.props.showPrevious
                          )
                        : '',
                      !this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject7(),
                            previousPage,
                            previousPage,
                            function(e) {
                              e.preventDefault()

                              _this.goTo(previousPage)
                            },
                            this.props.showPrevious
                          )
                        : ''
                    )
                  : '',
                pages.map(function(page) {
                  return (0, _litHtml.html)(
                    _templateObject8(),
                    ''
                      .concat(_this.componentNameDash, '__item ')
                      .concat(_this.props.current === page ? 'active' : ''),
                    _this.props.href
                      ? (0, _litHtml.html)(
                          _templateObject9(),
                          (0, _sprintf.default)(
                            _this.props.href,
                            page.toString()
                          ),
                          page,
                          page
                        )
                      : '',
                    !_this.props.href
                      ? (0, _litHtml.html)(
                          _templateObject10(),
                          page,
                          page,
                          function(e) {
                            e.preventDefault()

                            _this.goTo(page)
                          },
                          page
                        )
                      : ''
                  )
                }),
                this.props.showNext
                  ? (0, _litHtml.html)(
                      _templateObject11(),
                      ''
                        .concat(this.componentNameDash, '__item ')
                        .concat(this.componentNameDash, '__item--next ')
                        .concat(
                          this.props.current === this.props.pages
                            ? ''.concat(
                                this.componentNameDash,
                                '__item--disabled'
                              )
                            : ''
                        ),
                      this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject12(),
                            (0, _sprintf.default)(this.props.href, nextPage),
                            nextPage,
                            this.props.showNext
                          )
                        : '',
                      !this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject13(),
                            nextPage,
                            nextPage,
                            function(e) {
                              e.preventDefault()

                              _this.goTo(nextPage)
                            },
                            this.props.showNext
                          )
                        : ''
                    )
                  : '',
                this.props.showLast
                  ? (0, _litHtml.html)(
                      _templateObject14(),
                      ''
                        .concat(this.componentNameDash, '__item ')
                        .concat(this.componentNameDash, '__item--last ')
                        .concat(
                          this.props.current === this.props.pages
                            ? ''.concat(
                                this.componentNameDash,
                                '__item--disabled'
                              )
                            : ''
                        ),
                      this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject15(),
                            (0, _sprintf.default)(
                              this.props.href,
                              this.props.pages
                            ),
                            this.props.pages,
                            this.props.showLast
                          )
                        : '',
                      !this.props.href
                        ? (0, _litHtml.html)(
                            _templateObject16(),
                            this.props.pages,
                            this.props.pages,
                            function(e) {
                              e.preventDefault()

                              _this.goTo(_this.props.pages)
                            },
                            this.props.showLast
                          )
                        : ''
                    )
                  : ''
              )
            )
          }
        }
      ],
      [
        {
          key: 'defaultCss',

          /**
           * Css
           * @protected
           */
          value: function defaultCss(componentName, componentNameDash) {
            return '\n      '
              .concat(
                componentNameDash,
                ' {\n        display : block;\n      }\n      .'
              )
              .concat(
                componentNameDash,
                '__item {\n        display: inline-block;\n      }\n    '
              )
          }
        },
        {
          key: 'defaultProps',

          /**
           * Default props
           * @definition    SWebComponent.defaultProps
           * @protected
           */
          get: function get() {
            return {
              /**
               * Specify a function to call on page change.
               * This will have as parameter the `newPage` and the `previousPage`
               * @prop
               * @type    {Function}
               */
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
               * Specify a limit of pages to show at a time. This number has to be an odd one
               * @prop
               * @type    {Integer}
               */
              limit: null,

              /**
               * Specify a link string to use to generate the anchor tags. Use the %d token in your url to specify where the page number has to appear.
               * Ex: `/comments/%d` => `/comments/3`
               * @prop
               * @type    {String}
               */
              href: null,

              /**
               * Specify if want to show the "first" item materialised by a "<<".
               * Can be `false` or a string to use as label
               * @prop
               * @type    {Boolean|String}
               */
              showFirst: '<<',

              /**
               * Specify if want to show the "last" item materialised by a ">>".
               * Can be `false` or a string to use as label
               * @prop
               * @type    {Boolean|String}
               */
              showLast: '>>',

              /**
               * Specify if want to show the "previous" item materialised by a "<".
               * Can be `false` or a string to use as label
               * @prop
               * @type    {Boolean|String}
               */
              showPrevious: '<',

              /**
               * Specify if want to show the "next" item materialised by a ">".
               * Can be `false` or a string to use as label
               * @prop
               * @type    {Boolean|String}
               */
              showNext: '>'
            }
          }
          /**
           * Default state
           * @definition    STemplateComponent.defaultState
           * @protected
           */
        },
        {
          key: 'defaultState',
          get: function get() {
            return {}
          }
          /**
           * Physical props
           * @definition    SWebComponent.physicalProps
           * @protected
           */
        },
        {
          key: 'physicalProps',
          get: function get() {
            return ['pages', 'current']
          }
          /**
           * Required props
           * @definition    SWebComponent.requiredProps
           * @protected
           */
        },
        {
          key: 'requiredProps',
          get: function get() {
            return ['pages', 'current']
          }
        }
      ]
    )

    return SPaginationComponent
  })(_coffeekrakenSLitHtmlComponent.default)

exports.default = SPaginationComponent
