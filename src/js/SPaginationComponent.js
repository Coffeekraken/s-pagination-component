import STemplateComponent from 'coffeekraken-s-template-component'
import constrain from 'coffeekraken-sugar/js/utils/numbers/constrain'
import range from 'lodash/range'
import sprintf from 'coffeekraken-sugar/js/utils/strings/sprintf'
import dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
import isOdd from 'coffeekraken-sugar/js/utils/is/odd'

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
export default class SPaginationComponent extends STemplateComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
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
  static get defaultState() {
    return {}
  }

  /**
   * Physical props
   * @definition    SWebComponent.physicalProps
   * @protected
   */
  static get physicalProps() {
    return ['pages', 'current']
  }

  /**
   * Required props
   * @definition    SWebComponent.requiredProps
   * @protected
   */
  static get requiredProps() {
    return ['pages', 'current']
  }

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
      }
      .${componentNameDash}__item {
        display: inline-block;
      }
    `
  }

  /**
   * Component will mount
   * @definition    SWebComponent.componentWillMount
   * @protected
   */
  componentWillMount() {
    super.componentWillMount()

    // check the limit parameter that has to be an odd number
    if (this.props.limit && !isOdd(this.props.limit)) {
      throw new Error(
        `The ${
          this.componentNameDash
        } "limit" property has to be an odd integer...`
      )
    }
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount() {
    super.componentMount()
  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount() {
    super.componentUnmount()
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp(name, newVal, oldVal) {
    super.componentWillReceiveProp(name, newVal, oldVal)

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
  _changePageHandler(newPage, previousPage) {
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
    dispatchEvent(this, 'change', {
      newPage,
      previousPage
    })
    // chec if the onChange property exist
    this.props.onchange && this.props.onchange(newPage, previousPage)
  }

  /**
   * Go to a specific page
   * @param    {Integer}    page    The page to go to
   */
  goTo(page) {
    this.props.current = page
  }

  /**
   * Go to next
   */
  goToNext() {
    this.props.current =
      this.props.current + 1 <= this.props.pages
        ? this.props.current + 1
        : this.props.pages
  }

  /**
   * Go to previous
   */
  goToPrevious() {
    this.props.current =
      this.props.current - 1 >= 1 ? this.props.current - 1 : 1
  }

  /**
   * Show first
   */
  goToFirst() {
    this.props.current = 1
  }

  /**
   * Show last
   */
  goToLast(e) {
    this.props.current = this.props.pages
  }

  /**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition    SWebComponent.render
   * @protected
   */
  render() {
    const before = this.props.limit
      ? (this.props.limit - 1) / 2
      : this.props.pages
    const after = this.props.limit
      ? (this.props.limit - 1) / 2
      : this.props.pages
    let firstPage = this.props.current - before
    firstPage = constrain(firstPage, 1, this.props.pages)
    let lastPage = this.props.current + after
    lastPage = constrain(lastPage, 0, this.props.pages)

    if (this.props.limit) {
      if (lastPage - firstPage < this.props.limit - 1) {
        if (lastPage === this.props.pages) {
          firstPage = lastPage - (this.props.limit - 1)
        } else {
          lastPage = firstPage + this.props.limit - 1
        }
      }
      firstPage = constrain(firstPage, 1, this.props.pages)
      lastPage = constrain(lastPage, 0, this.props.pages)
    }

    const nextPage =
      this.props.current + 1 <= this.props.pages
        ? this.props.current + 1
        : this.props.pages
    const previousPage =
      this.props.current - 1 >= 1 ? this.props.current - 1 : 1

    const pages = range(firstPage, lastPage + 1)

    super.render(
      <ul class={`${this.componentNameDash}`}>
        {this.props.showFirst && (
          <li
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--first ${
              this.props.current === 1
                ? `${this.componentNameDash}__item--disabled`
                : ''
            }`}
          >
            {this.props.href && (
              <a href={sprintf(this.props.href, 1)} title={1}>
                {this.props.showFirst}
              </a>
            )}
            {!this.props.href && (
              <a
                href={1}
                title={1}
                onClick={e => {
                  e.preventDefault()
                  this.goTo(1)
                }}
              >
                {this.props.showFirst}
              </a>
            )}
          </li>
        )}

        {this.props.showPrevious && (
          <li
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--previous ${
              this.props.current === 1
                ? `${this.componentNameDash}__item--disabled`
                : ''
            }`}
          >
            {this.props.href && (
              <a
                href={sprintf(this.props.href, previousPage)}
                title={previousPage}
              >
                {this.props.showPrevious}
              </a>
            )}
            {!this.props.href && (
              <a
                href={previousPage}
                title={previousPage}
                onClick={e => {
                  e.preventDefault()
                  this.goTo(previousPage)
                }}
              >
                {this.props.showPrevious}
              </a>
            )}
          </li>
        )}

        {pages.map(page => (
          <li
            class={`${this.componentNameDash}__item ${
              this.props.current === page ? 'active' : ''
            }`}
          >
            {this.props.href && (
              <a href={sprintf(this.props.href, page.toString())} title={page}>
                {page}
              </a>
            )}
            {!this.props.href && (
              <a
                href={page}
                title={page}
                onClick={e => {
                  e.preventDefault()
                  this.goTo(page)
                }}
              >
                {page}
              </a>
            )}
          </li>
        ))}

        {this.props.showNext && (
          <li
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--next ${
              this.props.current === this.props.pages
                ? `${this.componentNameDash}__item--disabled`
                : ''
            }`}
          >
            {this.props.href && (
              <a href={sprintf(this.props.href, nextPage)} title={nextPage}>
                {this.props.showNext}
              </a>
            )}
            {!this.props.href && (
              <a
                href={nextPage}
                title={nextPage}
                onClick={e => {
                  e.preventDefault()
                  this.goTo(nextPage)
                }}
              >
                {this.props.showNext}
              </a>
            )}
          </li>
        )}

        {this.props.showLast && (
          <li
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--last ${
              this.props.current === this.props.pages
                ? `${this.componentNameDash}__item--disabled`
                : ''
            }`}
          >
            {this.props.href && (
              <a
                href={sprintf(this.props.href, this.props.pages)}
                title={this.props.pages}
              >
                {this.props.showLast}
              </a>
            )}
            {!this.props.href && (
              <a
                href={this.props.pages}
                title={this.props.pages}
                onClick={e => {
                  e.preventDefault()
                  this.goTo(this.props.pages)
                }}
              >
                {this.props.showLast}
              </a>
            )}
          </li>
        )}
      </ul>
    )
  }
}
