# Coffeekraken s-pagination-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-pagination-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-pagination-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-pagination-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-pagination-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-pagination-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-pagination-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-pagination-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-pagination-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-pagination-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-pagination-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-pagination-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-pagination-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Create simple and complexe pagination easily with this webcomponent</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-pagination-component)

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-pagination-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Listen for changes](#readme-changes)
5. [Javascript API](doc/js)
6. [SASS API](doc/sass)
7. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
8. [Browsers support](#readme-browsers-support)
9. [Code linting](#readme-code-linting)
10. [Contribute](#readme-contribute)
11. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
12. [Licence](#readme-license)

<a name="readme-install"></a>

## Install

```
npm install coffeekraken-s-pagination-component --save
```

<a name="readme-get-started"></a>

## Get Started

First, import the component into your javascript file like so:

```js
import SPaginationComponent from "coffeekraken-s-pagination-component"
```

Then simply use it inside your html like so:

```html
<s-pagination
  pages="50"
  current="10"
  limit="5"
  href="/comments/%d"
></s-pagination>
```

Optionally you can generate a base css for your pagination like so:

```scss
@import "node_modules/coffeekraken-s-pagination-component/index";
@include s-pagination-classes($colors: default primary secondary);
```

> This use the [sugar colors system](https://github.com/Coffeekraken/sugar/blob/master/doc/sass/colors.md)

<a id="readme-changes"></a>

## Listen for changes

This component has two "modes". The first is the one where you define an `href` property. By doing this, each links in the pagination will be plain old html links. Here's an example:

```html
<s-pagination
  pages="50"
  current="10"
  limit="5"
  href="/comments/%d"
></s-pagination>
```

In this example, each links would be something like so:

- comments/1
- comments/2
- comments/3
- comments/4
- etc...

The second mode is when you do not define an `href` property. You have then two ways to listen for changes in the pagination component. Here's how:

#### Using `addEventListener`

```js
$pagination.addEventListener("change", e => {
  // e.detail.newPage
  // e.detail.previousPage
  // do whatever you need to here...
})
```

#### Using `onchange` property

```js
$pagination.setProp({
  onchange: (newPage, previousPage) => {
    // do whatever you need to here...
  }
})
```

<a id="readme-browsers-support"></a>

## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*IE11+                                                                                                                                                            | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

- This component use the Proxy feature that is not natively supported by IE11. You'll need to load a polyfill in order to make it work properly.

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>

## Code linting

This package uses some code linting rules. Here's the list:

1. [StandardJS](https://standardjs.com/) for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>

## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>

## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
