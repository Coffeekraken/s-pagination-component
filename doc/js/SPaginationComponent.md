# Attributes

Here's the list of available attribute(s).

## pages

Specify how many pages we have to paginate

Type : **{ Integer }**

Default : **null**


## current

Specify the current page we're on

Type : **{ Integer }**

Default : **null**


## limit

Specify a limit of pages to show at a time. Better if it's an odd value

Type : **{ Integer }**

Default : **5**


## showFirst

Specify if want to show the "first" item materialised by a "«". Can be false or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **«**


## showLast

Specify if want to show the "last" item materialised by a "»". Can be false or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **»**


## showPrevious

Specify if want to show the "previous" item materialised by a "<". Can be false or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **<**


## showNext

Specify if want to show the "next" item materialised by a ">". Can be false or a string to use as label

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **>**




# Methods


## goTo

Go to a specific page


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
page  |  **{ Integer }**  |  The page to go to  |  required  |


## goToNext

Go to next


## goToPrevious

Go to previous


## goToFirst

Show first


## goToLast

Show last