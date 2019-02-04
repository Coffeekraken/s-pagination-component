# SPaginationComponent

Create simple and complexe pagination easily with this webcomponent


### Example
```html
	<s-pagination
  pages="50"
  current="10"
  limit="5"
  href="/comments/%d"
></s-pagination>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **STemplateComponent**




## Attributes

Here's the list of available attribute(s).

### onchange

Specify a function to call on page change.
This will have as parameter the `newPage` and the `previousPage`

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**


### pages

Specify how many pages we have to paginate

Type : **{ Integer }**

Default : **null**


### current

Specify the current page we're on

Type : **{ Integer }**

Default : **null**


### limit

Specify a limit of pages to show at a time. This number has to be an odd one

Type : **{ Integer }**

Default : **null**


### href

Specify a link string to use to generate the anchor tags. Use the %d token in your url to specify where the page number has to appear.
Ex: `/comments/%d` => `/comments/3`

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### showFirst

Specify if want to show the "first" item materialised by a "<<".
Can be `false` or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **<<**


### showLast

Specify if want to show the "last" item materialised by a ">>".
Can be `false` or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **>>**


### showPrevious

Specify if want to show the "previous" item materialised by a "<".
Can be `false` or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **<**


### showNext

Specify if want to show the "next" item materialised by a ">".
Can be `false` or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **>**




## Methods


### goTo

Go to a specific page


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
page  |  **{ Integer }**  |  The page to go to  |  required  |


### goToNext

Go to next


### goToPrevious

Go to previous


### goToFirst

Show first


### goToLast

Show last


## Events


### change

Change event dispatched when the pagination current page is updated

#### Example
```js
	$myPagination.addEventListener('change', (e) => {
  // e.detail.newPage
  // e.detaul.previousPage
  // do something on page change
})
```