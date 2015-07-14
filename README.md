symbol-tree
===========
Turn any collection of objects into its own efficient tree or linked list using `Symbol`.

This library has been designed to provide an efficient backing data structure for DOM trees. You can also use this library as an efficient linked list. Any meta data is stored on your objects directly, which ensures any kind of insertion or deletion is performed in constant time. Because an ES6 `Symbol` is used, the meta data does not interfere with your object in any way.

Only io.js is supported at the moment, however io.js and node.js will merge in the near future.

Example
-------
A linked list:

```javascript
const SymbolTree = require('symbol-tree');
const tree = new SymbolTree();

let a = {foo: 'bar'}; // or `new Whatever()`
let b = {foo: 'baz'};
let c = {foo: 'qux'};

tree.insertBefore(a, b); // insert a before b
tree.insertAfter(c, b); // insert c after b

console.log(tree.next(a) === b);
console.log(tree.next(b) === c);
console.log(tree.prev(c) === b);

tree.remove(b);
console.log(tree.next(a) === c);
```

A tree:

```javascript
const SymbolTree = require('symbol-tree');
const tree = new SymbolTree();

let parent = {};
let a = {};
let b = {};
let c = {};

tree.insertFirst(a, parent); // insert a as the first child
tree.insertLast(c, parent); // insert c as the last child
tree.insertAfter(b, a); // insert b after a, it now has the same parent as a

console.log(tree.first(parent) === a);
console.log(tree.next(tree.first(parent)) === b);
console.log(tree.last(parent) === c);

let grandparent = {};
tree.insertFirst(parent, grandparent);
console.log(tree.first(tree.first(grandparent)) === a);
```

See [api.md](api.md) for more documentation.

Testing
-------
Make sure you install the dependencies first:

    npm install

You can now run the unit tests by executing:

    npm test

The line and branch coverage should be 100%.