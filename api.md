<a name="module_symbol-tree"></a>
## symbol-tree
**Author:** Joris van der Wel <joris@jorisvanderwel.com>  

* [symbol-tree](#module_symbol-tree)
  * [SymbolTree](#exp_module_symbol-tree--SymbolTree) ⏏
    * [new SymbolTree([description])](#new_module_symbol-tree--SymbolTree_new)
    * [.initialize(object)](#module_symbol-tree--SymbolTree+initialize) ⇒ <code>Object</code>
    * [.isEmpty(object)](#module_symbol-tree--SymbolTree+isEmpty) ⇒ <code>Boolean</code>
    * [.first(object)](#module_symbol-tree--SymbolTree+first) ⇒ <code>Object</code>
    * [.last(object)](#module_symbol-tree--SymbolTree+last) ⇒ <code>Object</code>
    * [.prev(object)](#module_symbol-tree--SymbolTree+prev) ⇒ <code>Object</code>
    * [.next(object)](#module_symbol-tree--SymbolTree+next) ⇒ <code>Object</code>
    * [.parent(object)](#module_symbol-tree--SymbolTree+parent) ⇒ <code>Object</code>
    * [.remove(removeObject)](#module_symbol-tree--SymbolTree+remove) ⇒ <code>Object</code>
    * [.insertBefore(newObject, referenceObject)](#module_symbol-tree--SymbolTree+insertBefore) ⇒ <code>Object</code>
    * [.insertAfter(newObject, referenceObject)](#module_symbol-tree--SymbolTree+insertAfter) ⇒ <code>Object</code>
    * [.insertFirst(newObject, referenceObject)](#module_symbol-tree--SymbolTree+insertFirst) ⇒ <code>Object</code>
    * [.insertLast(newObject, referenceObject)](#module_symbol-tree--SymbolTree+insertLast) ⇒ <code>Object</code>

<a name="exp_module_symbol-tree--SymbolTree"></a>
### SymbolTree ⏏
**Kind**: Exported class  
<a name="new_module_symbol-tree--SymbolTree_new"></a>
#### new SymbolTree([description])

| Param | Default | Description |
| --- | --- | --- |
| [description] | <code>&#x27;SymbolTree data&#x27;</code> | Description used for the Symbol |

<a name="module_symbol-tree--SymbolTree+initialize"></a>
#### symbolTree.initialize(object) ⇒ <code>Object</code>
You can optionally initialize an object after its creation,
to take advantage of fast properties

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - object  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+isEmpty"></a>
#### symbolTree.isEmpty(object) ⇒ <code>Boolean</code>
Returns true if the object has any children.
`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+first"></a>
#### symbolTree.first(object) ⇒ <code>Object</code>
Return the first child of the given object.
`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+last"></a>
#### symbolTree.last(object) ⇒ <code>Object</code>
Return the last child of the given object.
`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+prev"></a>
#### symbolTree.prev(object) ⇒ <code>Object</code>
Return the previous sibling of the given object.
`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+next"></a>
#### symbolTree.next(object) ⇒ <code>Object</code>
Return the next sibling of the given object.
`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+parent"></a>
#### symbolTree.parent(object) ⇒ <code>Object</code>
Return the parent of the given object.
`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+remove"></a>
#### symbolTree.remove(removeObject) ⇒ <code>Object</code>
Remove the object from this tree.
`O(1)`
Has no effect if already removed.

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - removeObject  

| Param | Type |
| --- | --- |
| removeObject | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+insertBefore"></a>
#### symbolTree.insertBefore(newObject, referenceObject) ⇒ <code>Object</code>
Insert the given object before the reference object.
`O(1)`
`newObject` is now the previous sibling of `referenceObject`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - newObject  
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| newObject | <code>Object</code> | 
| referenceObject | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+insertAfter"></a>
#### symbolTree.insertAfter(newObject, referenceObject) ⇒ <code>Object</code>
Insert the given object after the reference object.
`O(1)`
`newObject` is now the next sibling of `referenceObject`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - newObject  
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| newObject | <code>Object</code> | 
| referenceObject | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+insertFirst"></a>
#### symbolTree.insertFirst(newObject, referenceObject) ⇒ <code>Object</code>
Insert the given object as the first child of the given reference object.
`O(1)`
`newObject` is now the first child of `referenceObject`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - newObject  
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| newObject | <code>Object</code> | 
| referenceObject | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+insertLast"></a>
#### symbolTree.insertLast(newObject, referenceObject) ⇒ <code>Object</code>
Insert the given object as the last child of the given reference object.
`O(1)`
`newObject` is now the last child of `referenceObject`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - newObject  
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| newObject | <code>Object</code> | 
| referenceObject | <code>Object</code> | 

