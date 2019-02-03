import STemplateComponent from "coffeekraken-s-template-component"
import constrain from "coffeekraken-sugar/js/utils/numbers/constrain"
import range from "lodash/range"

export default class SPaginationComponent extends STemplateComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
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
    return ["pages", "current"]
  }

  /**
   * Required props
   * @definition    SWebComponent.requiredProps
   * @protected
   */
  static get requiredProps() {
    return ["pages", "current"]
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
    `
  }

  /**
   * Component will mount
   * @definition    SWebComponent.componentWillMount
   * @protected
   */
  componentWillMount() {
    super.componentWillMount()
    console.log(this.physicalProps)
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

    const pages = range(firstPage, lastPage + 1)

    super.render(
      <ul class={`${this.componentNameDash}`}>
        {this.props.showFirst && (
          <li
            onClick={this.goToFirst.bind(this)}
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--first`}
          >
            {this.props.showFirst}
          </li>
        )}
        {this.props.showPrevious && (
          <li
            onClick={this.goToPrevious.bind(this)}
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--previous`}
          >
            {this.props.showPrevious}
          </li>
        )}
        {pages.map(page => (
          <li
            onClick={() => this.goTo(page)}
            class={`${this.componentNameDash}__item ${
              this.props.current === page ? "active" : ""
            }`}
          >
            {page}
          </li>
        ))}
        {this.props.showNext && (
          <li
            onClick={this.goToNext.bind(this)}
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--next`}
          >
            {this.props.showNext}
          </li>
        )}
        {this.props.showLast && (
          <li
            onClick={this.goToLast.bind(this)}
            class={`${this.componentNameDash}__item ${
              this.componentNameDash
            }__item--last`}
          >
            {this.props.showLast}
          </li>
        )}
      </ul>
    )
  }
}
