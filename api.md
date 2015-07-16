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
    * [.lastInclusiveDescendant(object)](#module_symbol-tree--SymbolTree+lastInclusiveDescendant) ⇒ <code>Object</code>
    * [.preceding(object, [treeRoot])](#module_symbol-tree--SymbolTree+preceding) ⇒ <code>Object</code>
    * [.following(object, [treeRoot], [skipChildren])](#module_symbol-tree--SymbolTree+following) ⇒ <code>Object</code>
    * [.childrenToArray(parent, [array], [filter], [thisArg])](#module_symbol-tree--SymbolTree+childrenToArray) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.ancestorsToArray(object, [array], [filter], [thisArg])](#module_symbol-tree--SymbolTree+ancestorsToArray) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.treeToArray(root, [array], [filter], [thisArg])](#module_symbol-tree--SymbolTree+treeToArray) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.childrenIterator(parent)](#module_symbol-tree--SymbolTree+childrenIterator) ⇒ <code>Object</code>
    * [.ancestorsIterator(object)](#module_symbol-tree--SymbolTree+ancestorsIterator) ⇒ <code>Object</code>
    * [.treeIterator(root)](#module_symbol-tree--SymbolTree+treeIterator) ⇒ <code>Object</code>
    * [.index(child)](#module_symbol-tree--SymbolTree+index) ⇒ <code>Number</code>
    * [.childrenCount(parent)](#module_symbol-tree--SymbolTree+childrenCount) ⇒ <code>Number</code>
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
to take advantage of V8's fast properties. Also useful if you would like to
freeze your object.

`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - object  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+isEmpty"></a>
#### symbolTree.isEmpty(object) ⇒ <code>Boolean</code>
Returns false if the object has any children. Otherwise it returns true.

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

<a name="module_symbol-tree--SymbolTree+lastInclusiveDescendant"></a>
#### symbolTree.lastInclusiveDescendant(object) ⇒ <code>Object</code>
Find the inclusive descendant that is last in tree order of the given object.

`O(n)` (worst case)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+preceding"></a>
#### symbolTree.preceding(object, [treeRoot]) ⇒ <code>Object</code>
Find the preceding object (A) of the given object (B).
An object A is preceding an object B if A and B are in the same tree
and A comes before B in tree order.

`O(n)` (worst case)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| [treeRoot] | <code>Object</code> | If set, `treeRoot` must be an inclusive ancestor        of the return value (or else null is returned). This check _assumes_        that `root` is also an inclusive ancestor of the given `node` |

<a name="module_symbol-tree--SymbolTree+following"></a>
#### symbolTree.following(object, [treeRoot], [skipChildren]) ⇒ <code>Object</code>
Find the following object (A) of the given object (B).
An object A is following an object B if A and B are in the same tree
and A comes after B in tree order.

`O(n)` (worst case)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  |  |
| [treeRoot] | <code>Object</code> |  | If set, `treeRoot` must be an inclusive ancestor        of the return value (or else null is returned). This check _assumes_        that `root` is also an inclusive ancestor of the given `node` |
| [skipChildren] | <code>Boolean</code> | <code>false</code> | If set, ignore the childen of `object` |

<a name="module_symbol-tree--SymbolTree+childrenToArray"></a>
#### symbolTree.childrenToArray(parent, [array], [filter], [thisArg]) ⇒ <code>Array.&lt;Object&gt;</code>
Append all children of the given object to an array.

`O(n)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parent | <code>Object</code> |  |  |
| [array] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> |  |
| [filter] | <code>function</code> |  | Function to test each object before it is added to the array.                            Invoked with arguments (object). Should return `true` if an object                            is to be included. |
| [thisArg] | <code>\*</code> |  | Value to use as `this` when executing `filter`. |

<a name="module_symbol-tree--SymbolTree+ancestorsToArray"></a>
#### symbolTree.ancestorsToArray(object, [array], [filter], [thisArg]) ⇒ <code>Array.&lt;Object&gt;</code>
Append all inclusive ancestors of the given object to an array.

`O(n)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  |  |
| [array] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> |  |
| [filter] | <code>function</code> |  | Function to test each object before it is added to the array.                            Invoked with arguments (object). Should return `true` if an object                            is to be included. |
| [thisArg] | <code>\*</code> |  | Value to use as `this` when executing `filter`. |

<a name="module_symbol-tree--SymbolTree+treeToArray"></a>
#### symbolTree.treeToArray(root, [array], [filter], [thisArg]) ⇒ <code>Array.&lt;Object&gt;</code>
Append all descendants of the given object to an array (in tree order).

`O(n)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>Object</code> |  |  |
| [array] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> |  |
| [filter] | <code>function</code> |  | Function to test each object before it is added to the array.                            Invoked with arguments (object). Should return `true` if an object                            is to be included. |
| [thisArg] | <code>\*</code> |  | Value to use as `this` when executing `filter`. |

<a name="module_symbol-tree--SymbolTree+childrenIterator"></a>
#### symbolTree.childrenIterator(parent) ⇒ <code>Object</code>
Iterate over all children of the given object to an array.

`O(1)` for a single iteration

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - An iterable iterator (ES6)  

| Param | Type |
| --- | --- |
| parent | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+ancestorsIterator"></a>
#### symbolTree.ancestorsIterator(object) ⇒ <code>Object</code>
Iterate over all inclusive ancestors of the given object

`O(1)` for a single iteration

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - An iterable iterator (ES6)  

| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+treeIterator"></a>
#### symbolTree.treeIterator(root) ⇒ <code>Object</code>
Iterate over all descendants of the given object (in tree order).

`O(n)` for the entire iteration<br>
`O(n)` for a single iteration (worst case)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - An iterable iterator (ES6)  

| Param | Type |
| --- | --- |
| root | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+index"></a>
#### symbolTree.index(child) ⇒ <code>Number</code>
Find the index of the given object (the number of preceding siblings).

`O(n)`<br>
`O(1)` (cached)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Number</code> - The number of preceding siblings, or -1 if the object has no parent  

| Param | Type |
| --- | --- |
| child | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+childrenCount"></a>
#### symbolTree.childrenCount(parent) ⇒ <code>Number</code>
Calculate the number of children.

`O(n)`<br>
`O(1)` (cached)

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  

| Param |
| --- |
| parent | 

<a name="module_symbol-tree--SymbolTree+remove"></a>
#### symbolTree.remove(removeObject) ⇒ <code>Object</code>
Remove the object from this tree.
Has no effect if already removed.

`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - removeObject  

| Param | Type |
| --- | --- |
| removeObject | <code>Object</code> | 

<a name="module_symbol-tree--SymbolTree+insertBefore"></a>
#### symbolTree.insertBefore(newObject, referenceObject) ⇒ <code>Object</code>
Insert the given object before the reference object.
`newObject` is now the previous sibling of `referenceObject`.

`O(1)`

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
`newObject` is now the next sibling of `referenceObject`.

`O(1)`

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
`newObject` is now the first child of `referenceObject`.

`O(1)`

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
`newObject` is now the last child of `referenceObject`.

`O(1)`

**Kind**: instance method of <code>[SymbolTree](#exp_module_symbol-tree--SymbolTree)</code>  
**Returns**: <code>Object</code> - newObject  
**Throws**:

- <code>Error</code> If the newObject is already present in this SymbolTree


| Param | Type |
| --- | --- |
| newObject | <code>Object</code> | 
| referenceObject | <code>Object</code> | 

