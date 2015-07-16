'use strict';

/**
 * @module symbol-tree
 * @author Joris van der Wel <joris@jorisvanderwel.com>
 */

const SymbolTreeNode = require('./SymbolTreeNode');

function returnTrue() {
        return true;
}

class SymbolTree {

        /**
         * @constructor
         * @alias module:symbol-tree
         * @param [description='SymbolTree data'] Description used for the Symbol
         */
        constructor(description) {
                this.symbol = Symbol(description || 'SymbolTree data');
        }

        /**
         * You can optionally initialize an object after its creation,
         * to take advantage of V8's fast properties. Also useful if you would like to
         * freeze your object.
         *
         * `O(1)`
         *
         * @method
         * @alias module:symbol-tree#initialize
         * @param {Object} object
         * @return {Object} object
         */
        initialize(object) {
                this._node(object);

                return object;
        }

        _node(object) {
                if (!object) {
                        return null;
                }

                const node = object[this.symbol];

                if (node) {
                        return node;
                }

                return (object[this.symbol] = new SymbolTreeNode());
        }

        /**
         * Returns false if the object has any children. Otherwise it returns true.
         *
         * `O(1)`
         *
         * @method isEmpty
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Boolean}
         */
        isEmpty(object) {
                return this._node(object).isEmpty;
        }

        /**
         * Return the first child of the given object.
         *
         * `O(1)`
         *
         * @method first
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        first(object) {
                return this._node(object).first;
        }

        /**
         * Return the last child of the given object.
         *
         * `O(1)`
         *
         * @method last
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        last(object) {
                return this._node(object).last;
        }

        /**
         * Return the previous sibling of the given object.
         *
         * `O(1)`
         *
         * @method prev
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        prev(object) {
                return this._node(object).prev;
        }

        /**
         * Return the next sibling of the given object.
         *
         * `O(1)`
         *
         * @method next
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        next(object) {
                return this._node(object).next;
        }

        /**
         * Return the parent of the given object.
         *
         * `O(1)`
         *
         * @method parent
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        parent(object) {
                return this._node(object).parent;
        }

        /**
         * Find the inclusive descendant that is last in tree order of the given object.
         *
         * `O(n)` (worst case)
         *
         * @method lastInclusiveDescendant
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        lastInclusiveDescendant(object) {
                let last;

                while ( (last = this._node(object).last) ) {
                        object = last;
                }

                return object;
        }

        /**
         * Find the preceding object (A) of the given object (B).
         * An object A is preceding an object B if A and B are in the same tree
         * and A comes before B in tree order.
         *
         * `O(n)` (worst case)
         *
         * @method preceding
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @param {Object} [treeRoot] If set, `treeRoot` must be an inclusive ancestor
         *        of the return value (or else null is returned). This check _assumes_
         *        that `root` is also an inclusive ancestor of the given `node`
         * @returns {?Object}
         */
        preceding(object, treeRoot) {
                if (object === treeRoot) {
                        return null;
                }

                const prev = this._node(object).prev;

                if (prev) {
                        return this.lastInclusiveDescendant(prev);
                }

                // if there is no previous sibling return the parent (might be null)
                return this._node(object).parent;
        }

        /**
         * Find the following object (A) of the given object (B).
         * An object A is following an object B if A and B are in the same tree
         * and A comes after B in tree order.
         *
         * `O(n)` (worst case)
         *
         * @method following
         * @memberOf module:symbol-tree#
         * @param {!Object} object
         * @param {Object} [treeRoot] If set, `treeRoot` must be an inclusive ancestor
         *        of the return value (or else null is returned). This check _assumes_
         *        that `root` is also an inclusive ancestor of the given `node`
         * @param {Boolean} [skipChildren=false] If set, ignore the childen of `object`
         * @returns {?Object}
         */
        following(object, treeRoot, skipChildren) {
                const first = !skipChildren && this._node(object).first;

                if (first) {
                        return first;
                }

                do {
                        if (object === treeRoot) {
                                return null;
                        }

                        const next = this._node(object).next;

                        if (next) {
                                return next;
                        }

                        object = this._node(object).parent;
                        // https://github.com/jscs-dev/node-jscs/commit/07d30b77388a2e182a40b00891c7ac1837281016
                        // jscs:disable requirePaddingNewlinesBeforeKeywords
                } while (object);
                // jscs:enable requirePaddingNewlinesBeforeKeywords

                return null;
        }

        /**
         * Append all children of the given object to an array.
         *
         * `O(n)`
         *
         * @method childrenToArray
         * @memberOf module:symbol-tree#
         * @param {Object} parent
         * @param {Object[]} [array=[]]
         * @param {Function} [filter] Function to test each object before it is added to the array.
         *                            Invoked with arguments (object). Should return `true` if an object
         *                            is to be included.
         * @param {*} [thisArg] Value to use as `this` when executing `filter`.
         * @return {Object[]}
         */
        childrenToArray(parent, array, filter, thisArg) {
                if (!array) {
                        array = [];
                }

                if (!filter) {
                        filter = returnTrue;
                }

                let object = this._node(parent).first;

                while (object) {
                        if (filter.call(thisArg, object)) {
                                array.push(object);
                        }
                        object = this._node(object).next;
                }

                return array;
        }

        /**
         * Append all inclusive ancestors of the given object to an array.
         *
         * `O(n)`
         *
         * @method ancestorsToArray
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @param {Object[]} [array=[]]
         * @param {Function} [filter] Function to test each object before it is added to the array.
         *                            Invoked with arguments (object). Should return `true` if an object
         *                            is to be included.
         * @param {*} [thisArg] Value to use as `this` when executing `filter`.
         * @return {Object[]}
         */
        ancestorsToArray(object, array, filter, thisArg) {
                if (!array) {
                        array = [];
                }

                if (!filter) {
                        filter = returnTrue;
                }

                let ancestor = object;

                while (ancestor) {
                        if (filter.call(thisArg, ancestor)) {
                                array.push(ancestor);
                        }
                        ancestor = this._node(ancestor).parent;
                }

                return array;
        }

        /**
         * Append all descendants of the given object to an array (in tree order).
         *
         * `O(n)`
         *
         * @method treeToArray
         * @memberOf module:symbol-tree#
         * @param {Object} root
         * @param {Object[]} [array=[]]
         * @param {Function} [filter] Function to test each object before it is added to the array.
         *                            Invoked with arguments (object). Should return `true` if an object
         *                            is to be included.
         * @param {*} [thisArg] Value to use as `this` when executing `filter`.
         * @return {Object[]}
         */
        treeToArray(root, array, filter, thisArg) {
                if (!array) {
                        array = [];
                }

                if (!filter) {
                        filter = returnTrue;
                }

                let object = root;

                while (object) {
                        if (filter.call(thisArg, object)) {
                                array.push(object);
                        }
                        object = this.following(object, root);
                }

                return array;
        }

        /**
         * Iterate over all children of the given object to an array.
         *
         * `O(1)` for a single iteration
         *
         * @method childrenIterator
         * @memberOf module:symbol-tree#
         * @param {Object} parent
         * @return {Object} An iterable iterator (ES6)
         */
        childrenIterator(parent) {
                const _node = this._node.bind(this);

                let nextObject = this._node(parent).first;
                const iterator = {};

                iterator.next = function() {
                        if (!nextObject) {
                                return {
                                        done  : true,
                                        value : parent
                                };
                        }

                        const value = nextObject;
                        nextObject = _node(nextObject).next;

                        return {
                                done  : false,
                                value : value
                        };
                };

                iterator[Symbol.iterator] = function() {
                        return iterator;
                };

                return iterator;
        }

        /**
         * Iterate over all inclusive ancestors of the given object
         *
         * `O(1)` for a single iteration
         *
         * @method ancestorsIterator
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object} An iterable iterator (ES6)
         */
        ancestorsIterator(object) {
                const _node = this._node.bind(this);

                let nextObject = object;
                const iterator = {};

                iterator.next = function() {
                        if (!nextObject) {
                                return {
                                        done  : true,
                                        value : object
                                };
                        }

                        const value = nextObject;
                        nextObject = _node(nextObject).parent;

                        return {
                                done  : false,
                                value : value
                        };
                };

                iterator[Symbol.iterator] = function() {
                        return iterator;
                };

                return iterator;
        }

        /**
         * Iterate over all descendants of the given object (in tree order).
         *
         * `O(n)` for the entire iteration<br>
         * `O(n)` for a single iteration (worst case)
         *
         * @method treeIterator
         * @memberOf module:symbol-tree#
         * @param {Object} root
         * @return {Object} An iterable iterator (ES6)
         */
        treeIterator(root) {
                const following = this.following.bind(this);

                let nextObject = root;
                const iterator = {};

                iterator.next = function() {
                        if (!nextObject) {
                                return {
                                        done  : true,
                                        value : root
                                };
                        }

                        const value = nextObject;
                        nextObject = following(nextObject, root);

                        return {
                                done  : false,
                                value : value
                        };
                };

                iterator[Symbol.iterator] = function() {
                        return iterator;
                };

                return iterator;
        }

        /**
         * Find the index of the given object (the number of preceding siblings).
         *
         * `O(n)`<br>
         * `O(1)` (cached)
         *
         * @method index
         * @memberOf module:symbol-tree#
         * @param {Object} child
         * @return {Number} The number of preceding siblings, or -1 if the object has no parent
         */
        index(child) {
                const childNode = this._node(child);
                const parentNode = this._node(childNode.parent);

                if (!parentNode) {
                        // In principal, you could also find out the number of preceding siblings
                        // for objects that do not have a parent. This method limits itself only to
                        // objects that have a parent because that lets us optimize more.
                        return -1;
                }

                let index = childNode.getCachedIndex(parentNode);

                if (index >= 0) {
                        return index;
                }

                index = 0;
                let object = parentNode.first;

                while (object) {
                        const node = this._node(object);
                        node.setCachedIndex(parentNode, index);

                        if (object === child) {
                                break;
                        }

                        ++index;
                        object = node.next;
                }

                return index;
        }

        /**
         * Calculate the number of children.
         *
         * `O(n)`<br>
         * `O(1)` (cached)
         *
         * @method childrenCount
         * @memberOf module:symbol-tree#
         * @param parent
         * @return {Number}
         */
        childrenCount(parent) {
                const parentNode = this._node(parent);

                if (!parentNode.last) {
                        return 0;
                }

                return this.index(parentNode.last) + 1;
        }

        /**
         * Remove the object from this tree.
         * Has no effect if already removed.
         *
         * `O(1)`
         *
         * @method remove
         * @memberOf module:symbol-tree#
         * @param {Object} removeObject
         * @return {Object} removeObject
         */
        remove(removeObject) {
                const removeNode = this._node(removeObject);
                const parentNode = this._node(removeNode.parent);
                const prevNode = this._node(removeNode.prev);
                const nextNode = this._node(removeNode.next);

                if (parentNode) {
                        if (parentNode.first === removeObject) {
                                parentNode.first = removeNode.next;
                        }

                        if (parentNode.last === removeObject) {
                                parentNode.last = removeNode.prev;
                        }
                }

                if (prevNode) {
                        prevNode.next = removeNode.next;
                }

                if (nextNode) {
                        nextNode.prev = removeNode.prev;
                }

                removeNode.parent = null;
                removeNode.prev = null;
                removeNode.next = null;

                if (parentNode) {
                        parentNode.childrenChanged();
                }

                return removeObject;
        }

        /**
         * Insert the given object before the reference object.
         * `newObject` is now the previous sibling of `referenceObject`.
         *
         * `O(1)`
         *
         * @method insertBefore
         * @memberOf module:symbol-tree#
         * @param {Object} newObject
         * @param {Object} referenceObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        insertBefore(newObject, referenceObject) {
                const referenceNode = this._node(referenceObject);
                const prevNode = this._node(referenceNode.prev);
                const newNode = this._node(newObject);
                const parentNode = this._node(referenceNode.parent);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                newNode.parent = referenceNode.parent;
                newNode.prev = referenceNode.prev;
                newNode.next = referenceObject;
                referenceNode.prev = newObject;

                if (prevNode) {
                        prevNode.next = newObject;
                }

                if (parentNode && parentNode.first === referenceObject) {
                        parentNode.first = newObject;
                }

                if (parentNode) {
                        parentNode.childrenChanged();
                }

                return newObject;
        }

        /**
         * Insert the given object after the reference object.
         * `newObject` is now the next sibling of `referenceObject`.
         *
         * `O(1)`
         *
         * @method insertAfter
         * @memberOf module:symbol-tree#
         * @param {Object} newObject
         * @param {Object} referenceObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        insertAfter(newObject, referenceObject) {
                const referenceNode = this._node(referenceObject);
                const nextNode = this._node(referenceNode.next);
                const newNode = this._node(newObject);
                const parentNode = this._node(referenceNode.parent);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                newNode.parent = referenceNode.parent;
                newNode.prev = referenceObject;
                newNode.next = referenceNode.next;
                referenceNode.next = newObject;

                if (nextNode) {
                        nextNode.prev = newObject;
                }

                if (parentNode && parentNode.last === referenceObject) {
                        parentNode.last = newObject;
                }

                if (parentNode) {
                        parentNode.childrenChanged();
                }

                return newObject;
        }

        /**
         * Insert the given object as the first child of the given reference object.
         * `newObject` is now the first child of `referenceObject`.
         *
         * `O(1)`
         *
         * @method insertFirst
         * @memberOf module:symbol-tree#
         * @param {Object} newObject
         * @param {Object} referenceObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        insertFirst(newObject, referenceObject) {
                const referenceNode = this._node(referenceObject);
                const newNode = this._node(newObject);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                if (referenceNode.isEmpty) {
                        newNode.parent = referenceObject;
                        referenceNode.first = newObject;
                        referenceNode.last = newObject;
                        referenceNode.childrenChanged();
                }
                else {
                        this.insertBefore(newObject, referenceNode.first);
                }

                return newObject;
        }

        /**
         * Insert the given object as the last child of the given reference object.
         * `newObject` is now the last child of `referenceObject`.
         *
         * `O(1)`
         *
         * @method insertLast
         * @memberOf module:symbol-tree#
         * @param {Object} newObject
         * @param {Object} referenceObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        insertLast(newObject, referenceObject) {
                const referenceNode = this._node(referenceObject);
                const newNode = this._node(newObject);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                if (referenceNode.isEmpty) {
                        newNode.parent = referenceObject;
                        referenceNode.first = newObject;
                        referenceNode.last = newObject;
                        referenceNode.childrenChanged();
                }
                else {
                        this.insertAfter(newObject, referenceNode.last);
                }

                return newObject;
        }
}

module.exports = SymbolTree;
