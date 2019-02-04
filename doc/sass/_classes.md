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
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Mixins


### s-pagination-classes

Print out the bare and style component css
Generated classes:
- `.s-pagination[color="{color}"]`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-pagination-classes-bare

Print out the bare component css
Generated classes:
- `.s-pagination`


### s-pagination-classes-style

Print out the style component css
Generated classes:
- `s-pagination[color="{color}"]`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary