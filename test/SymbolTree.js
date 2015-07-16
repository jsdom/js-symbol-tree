'use strict';

const SymbolTree = require('..');
const test = require('tape');

test('initialize', function(t) {
        const tree = new SymbolTree();
        const obj = {foo: 'bar'};

        t.equal(obj, tree.initialize(obj));
        t.deepEqual(['foo'], Object.getOwnPropertyNames(obj),
                'initialize() should not introduce any enumerable properties');

        t.end();
});

test('unassociated object', function(t) {
        const tree = new SymbolTree();
        const a = {};

        t.equal(true, tree.isEmpty(a));
        t.equal(null, tree.first  (a));
        t.equal(null, tree.last   (a));
        t.equal(null, tree.prev   (a));
        t.equal(null, tree.next   (a));
        t.equal(null, tree.parent (a));

        t.end();
});

test('insertBefore without parent or siblings', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        t.equal(a, tree.insertBefore(a, b));

        t.equal(true, tree.isEmpty(a));
        t.equal(null, tree.first  (a));
        t.equal(null, tree.last   (a));
        t.equal(null, tree.parent (a));
        t.equal(true, tree.isEmpty(b));
        t.equal(null, tree.first  (b));
        t.equal(null, tree.last   (b));
        t.equal(null, tree.parent (b));

        t.equal(null, tree.prev(a));
        t.equal(b   , tree.next(a));
        t.equal(a   , tree.prev(b));
        t.equal(null, tree.next(b));

        t.end();
});

test('insertAfter without parent or siblings', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        t.equal(b, tree.insertAfter(b, a));

        t.equal(true, tree.isEmpty(a));
        t.equal(null, tree.first  (a));
        t.equal(null, tree.last   (a));
        t.equal(null, tree.parent (a));
        t.equal(true, tree.isEmpty(b));
        t.equal(null, tree.first  (b));
        t.equal(null, tree.last   (b));
        t.equal(null, tree.parent (b));

        t.equal(null, tree.prev(a));
        t.equal(b   , tree.next(a));
        t.equal(a   , tree.prev(b));
        t.equal(null, tree.next(b));

        t.end();
});

test('insertFirst without children', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};

        t.equal(a, tree.insertFirst(a, parent));

        t.equal(true  , tree.isEmpty(a));
        t.equal(null  , tree.first  (a));
        t.equal(null  , tree.last   (a));
        t.equal(null  , tree.prev   (a));
        t.equal(null  , tree.next   (a));
        t.equal(parent, tree.parent (a));

        t.equal(false, tree.isEmpty(parent));
        t.equal(a    , tree.first  (parent));
        t.equal(a    , tree.last   (parent));
        t.equal(null , tree.prev   (a));
        t.equal(null , tree.next   (parent));
        t.equal(null , tree.parent (parent));

        t.end();
});

test('insertLast without children', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};

        t.equal(a, tree.insertLast(a, parent));

        t.equal(true  , tree.isEmpty(a));
        t.equal(null  , tree.first  (a));
        t.equal(null  , tree.last   (a));
        t.equal(null  , tree.prev   (a));
        t.equal(null  , tree.next   (a));
        t.equal(parent, tree.parent (a));

        t.equal(false, tree.isEmpty(parent));
        t.equal(a    , tree.first  (parent));
        t.equal(a    , tree.last   (parent));
        t.equal(null , tree.prev   (a));
        t.equal(null , tree.next   (parent));
        t.equal(null , tree.parent (parent));

        t.end();
});

test('insertFirst with children', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};
        const b = {};

        tree.insertFirst(b, parent);
        tree.insertFirst(a, parent);

        t.equal(false, tree.isEmpty(parent));
        t.equal(a    , tree.first  (parent));
        t.equal(b    , tree.last   (parent));

        t.equal(parent, tree.parent (a));
        t.equal(null  , tree.prev   (a));
        t.equal(b     , tree.next   (a));

        t.equal(parent, tree.parent (b));
        t.equal(a     , tree.prev   (b));
        t.equal(null  , tree.next   (b));
        t.end();
});

test('insertLast with children', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};
        const b = {};

        tree.insertLast(a, parent);
        tree.insertLast(b, parent);

        t.equal(false, tree.isEmpty(parent));
        t.equal(a    , tree.first  (parent));
        t.equal(b    , tree.last   (parent));

        t.equal(parent, tree.parent (a));
        t.equal(null  , tree.prev   (a));
        t.equal(b     , tree.next   (a));

        t.equal(parent, tree.parent (b));
        t.equal(a     , tree.prev   (b));
        t.equal(null  , tree.next   (b));
        t.end();
});

test('insertBefore with parent', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};
        const b = {};

        tree.insertFirst(b, parent);
        tree.insertBefore(a, b);

        t.equal(false, tree.isEmpty(parent));
        t.equal(a    , tree.first  (parent));
        t.equal(b    , tree.last   (parent));

        t.equal(parent, tree.parent (a));
        t.equal(null  , tree.prev   (a));
        t.equal(b     , tree.next   (a));

        t.equal(parent, tree.parent (b));
        t.equal(a     , tree.prev   (b));
        t.equal(null  , tree.next   (b));
        t.end();
});

test('insertAfter with parent', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};
        const b = {};

        tree.insertLast(a, parent);
        tree.insertAfter(b, a);

        t.equal(false, tree.isEmpty(parent));
        t.equal(a    , tree.first  (parent));
        t.equal(b    , tree.last   (parent));

        t.equal(parent, tree.parent (a));
        t.equal(null  , tree.prev   (a));
        t.equal(b     , tree.next   (a));

        t.equal(parent, tree.parent (b));
        t.equal(a     , tree.prev   (b));
        t.equal(null  , tree.next   (b));
        t.end();
});

test('insertBefore with siblings', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};
        const c = {};

        tree.insertBefore(a, c);
        tree.insertBefore(b, c);

        t.equal(null, tree.prev(a));
        t.equal(b   , tree.next(a));

        t.equal(a   , tree.prev(b));
        t.equal(c   , tree.next(b));

        t.equal(b   , tree.prev(c));
        t.equal(null, tree.next(c));

        t.end();
});

test('insertAfter with siblings', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};
        const c = {};

        tree.insertAfter(c, a);
        tree.insertAfter(b, a);

        t.equal(null, tree.prev(a));
        t.equal(b   , tree.next(a));

        t.equal(a   , tree.prev(b));
        t.equal(c   , tree.next(b));

        t.equal(b   , tree.prev(c));
        t.equal(null, tree.next(c));

        t.end();
});

test('remove with previous sibling', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        tree.insertAfter(b, a);
        tree.remove(b);

        t.equal(null, tree.prev   (a));
        t.equal(null, tree.next   (a));
        t.equal(null, tree.parent (a));

        t.equal(null, tree.prev   (b));
        t.equal(null, tree.next   (b));
        t.equal(null, tree.parent (b));

        t.end();
});

test('remove with next sibling', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        tree.insertAfter(b, a);
        tree.remove(a);

        t.equal(null, tree.prev   (a));
        t.equal(null, tree.next   (a));
        t.equal(null, tree.parent (a));

        t.equal(null, tree.prev   (b));
        t.equal(null, tree.next   (b));
        t.equal(null, tree.parent (b));

        t.end();
});

test('remove with siblings', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};
        const c = {};

        tree.insertAfter(b, a);
        tree.insertAfter(c, b);
        tree.remove(b);

        t.equal(null, tree.prev   (a));
        t.equal(c   , tree.next   (a));
        t.equal(null, tree.parent (a));

        t.equal(null, tree.prev   (b));
        t.equal(null, tree.next   (b));
        t.equal(null, tree.parent (b));

        t.equal(a   , tree.prev   (c));
        t.equal(null, tree.next   (c));
        t.equal(null, tree.parent (c));

        t.end();
});

test('remove with parent', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};

        tree.insertFirst(a, parent);
        tree.remove(a);

        t.equal(null, tree.parent(a));
        t.equal(null, tree.first(parent));
        t.equal(null, tree.last (parent));

        t.end();
});

test('remove with children', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};

        tree.insertFirst(a, parent);
        tree.remove(parent);

        t.equal(parent, tree.parent(a));
        t.equal(a, tree.first(parent));
        t.equal(a, tree.last (parent));

        t.end();
});

test('remove with parent and siblings', function(t) {
        const tree = new SymbolTree();
        const parent = {};
        const a = {};
        const b = {};
        const c = {};

        tree.insertFirst(a, parent);
        tree.insertAfter(b, a);
        tree.insertAfter(c, b);
        tree.remove(b);

        t.equal(a, tree.first(parent));
        t.equal(c, tree.last (parent));

        t.equal(null  , tree.prev   (a));
        t.equal(c     , tree.next   (a));
        t.equal(parent, tree.parent (a));

        t.equal(null  , tree.prev   (b));
        t.equal(null  , tree.next   (b));
        t.equal(null  , tree.parent (b));

        t.equal(a     , tree.prev   (c));
        t.equal(null  , tree.next   (c));
        t.equal(parent, tree.parent (c));

        t.end();
});

test('inserting an already associated object should fail', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        tree.insertBefore(a, b);

        // jscs:disable requireBlocksOnNewline

        // `next` check
        t.throws(function() { tree.insertBefore(a, b); }, /already present/);
        t.throws(function() { tree.insertAfter (a, b); }, /already present/);
        t.throws(function() { tree.insertFirst (a, b); }, /already present/);
        t.throws(function() { tree.insertLast  (a, b); }, /already present/);

        // `prev` check
        t.throws(function() { tree.insertBefore(b, a); }, /already present/);
        t.throws(function() { tree.insertAfter (b, a); }, /already present/);
        t.throws(function() { tree.insertFirst (b, a); }, /already present/);
        t.throws(function() { tree.insertLast  (b, a); }, /already present/);

        tree.remove(a);

        tree.insertFirst(a, b);
        // `parent` check
        t.throws(function() { tree.insertBefore(a, b); }, /already present/);
        t.throws(function() { tree.insertAfter (a, b); }, /already present/);
        t.throws(function() { tree.insertFirst (a, b); }, /already present/);
        t.throws(function() { tree.insertLast  (a, b); }, /already present/);

        // jscs:enable requireBlocksOnNewline

        t.end();
});

test('Multiple SymbolTree instances should not conflict', function(t) {
        const tree1 = new SymbolTree();
        const tree2 = new SymbolTree();
        const a = {};
        const b = {};

        tree1.insertBefore(a, b);
        tree2.insertBefore(b, a);

        t.equal(null, tree1.prev(a));
        t.equal(b   , tree1.next(a));
        t.equal(a   , tree1.prev(b));
        t.equal(null, tree1.next(b));

        t.equal(null, tree2.prev(b));
        t.equal(a   , tree2.next(b));
        t.equal(b   , tree2.prev(a));
        t.equal(null, tree2.next(a));

        t.end();
});

test('lastInclusiveDescendant', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        t.equal(abaa, tree.lastInclusiveDescendant(a));

        t.end();
});

test('look up preceding with a previous sibling', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        tree.insertAfter(b, a);

        t.equal(null, tree.preceding(a));
        t.equal(a, tree.preceding(b));

        t.end();
});

test('look up preceding with a previous sibling with a child', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertAfter(b, a);

        t.equal(null, tree.preceding(a));
        t.equal(a   , tree.preceding(aa));
        t.equal(aa  , tree.preceding(ab));
        t.equal(ab  , tree.preceding(b));

        t.end();
});

test('look up preceding with a previous sibling with a descendants', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        t.equal(abaa, tree.preceding(b));

        t.end();
});

test('look up preceding using a specified root', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};

        tree.insertLast(aa, a);

        t.equal(null, tree.preceding(a, a));
        t.equal(a   , tree.preceding(aa, a));
        t.equal(null, tree.preceding(aa, aa));

        t.end();
});

test('following with a child', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};

        tree.insertLast(aa, a);

        t.equal(aa  , tree.following(a));
        t.equal(null, tree.following(aa));

        t.end();
});

test('following with a next sibling', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const b = {};

        tree.insertAfter(b, a);

        t.equal(b   , tree.following(a));
        t.equal(null, tree.following(b));

        t.end();
});

test('following with sibling of parent', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertAfter(b, a);

        t.equal(b, tree.following(aa));

        t.end();
});

test('following with sibling of grandparent', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const aaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(aaa, aa);
        tree.insertAfter(b, a);

        t.equal(b, tree.following(aaa));

        t.end();
});

test('following using a specified root', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const aaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(aaa, aa);
        tree.insertAfter(b, a);

        t.equal(null, tree.following(aaa, aaa));
        t.equal(null, tree.following(aaa, aa));
        t.equal(null, tree.following(aaa, a));
        t.equal(aa  , tree.following(a, a));
        t.equal(aaa , tree.following(aa, a));

        t.end();
});

test('following with skipChildren', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertAfter(b, a);

        t.equal(b, tree.following(a, null, true));

        t.end();
});

test('childrenToArray', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        t.deepEqual([aa, ab, ac], tree.childrenToArray(a));

        const arr = ['a', 5];
        tree.childrenToArray(a, arr);
        t.deepEqual(['a', 5, aa, ab, ac], arr);

        t.end();
});

test('childrenToArray with filter', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        const filter = function(object) {
                t.equal(this, undefined);

                return object !== ab;
        };

        t.deepEqual([aa, ac], tree.childrenToArray(a, null, filter));

        const thisArg = {a: 123};
        const filterThis = function(object) {
                t.equal(this, thisArg);

                return object !== ab;
        };

        t.deepEqual([aa, ac], tree.childrenToArray(a, null, filterThis, thisArg));

        t.end();
});

test('children iterator', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        const results = [];

        for (const object of tree.childrenIterator(a)) {
                results.push(object);
        }
        t.deepEqual([aa, ab, ac], results);

        t.end();
});

test('children iterator return value using a generator', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const ac = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(ac, a);

        function* generator(it) {
                const returnValue = yield* it;
                t.equal(a, returnValue);
        }

        const results = [];

        for (const object of generator(tree.childrenIterator(a))) {
                results.push(object);
        }
        t.deepEqual([aa, ab, ac], results);

        t.end();
});

test('ancestorsToArray', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        t.deepEqual([abaa, aba, ab, a], tree.ancestorsToArray(abaa));
        t.deepEqual([aba, ab, a], tree.ancestorsToArray(aba));
        t.deepEqual([b], tree.ancestorsToArray(b));

        const arr = ['a', 5];
        tree.ancestorsToArray(abaa, arr);
        t.deepEqual(['a', 5, abaa, aba, ab, a], arr);

        t.end();
});

test('ancestorsToArray with filter', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        const thisArg = {foo: 'bar'};
        const filter = function(object) {
                t.equal(this, thisArg);

                return object !== abaa && object !== ab;
        };

        t.deepEqual([aba, a], tree.ancestorsToArray(abaa, null, filter, thisArg));

        t.end();
});

test('ancestors iterator', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        const results = [];
        const iterator = tree.ancestorsIterator(abaa);

        for (const object of iterator) {
                results.push(object);
        }
        t.deepEqual([abaa, aba, ab, a], results);
        t.deepEqual({done: true, value: abaa}, iterator.next());
        t.deepEqual({done: true, value: abaa}, iterator.next()); // should keep returning done: true

        t.end();
});

test('treeToArray', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        t.deepEqual([a, aa, ab, aba, abaa], tree.treeToArray(a));

        const arr = ['a', 5];
        tree.treeToArray(a, arr);
        t.deepEqual(['a', 5, a, aa, ab, aba, abaa], arr);

        t.end();
});

test('treeToArray with filter', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertAfter(b, a);

        const filter = function(object) {
                t.equal(this, undefined);

                return object !== a && object !== aba;
        };

        t.deepEqual([aa, ab, abaa], tree.treeToArray(a, null, filter));

        const thisArg = {foo: 'bar'};
        const filterThis = function(object) {
                t.equal(this, thisArg);

                return object !== a && object !== aba;
        };

        t.deepEqual([aa, ab, abaa], tree.treeToArray(a, null, filterThis, thisArg));

        t.end();
});

test('tree iterator', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const abaa = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(abaa, aba);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        const results = [];
        const iterator = tree.treeIterator(a);

        for (const object of iterator) {
                results.push(object);
        }
        t.deepEqual([a, aa, ab, aba, abaa, ac], results);
        t.deepEqual({done: true, value: a}, iterator.next());
        t.deepEqual({done: true, value: a}, iterator.next()); // should keep returning done: true

        t.end();
});

test('look up the index of an object', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        t.equal(-1, tree.index(a), 'should return -1 if an object has no parent');
        t.equal(0, tree.index(aa));
        t.equal(1, tree.index(ab));
        t.equal(0, tree.index(aba));
        t.equal(2, tree.index(ac));
        t.equal(-1, tree.index(b));

        t.end();
});

test('cached index', function(t) {
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        // looking up ac, will also set the cached index for aa and ab, so check that those are valid
        t.equal(2, tree.index(ac));
        t.equal(1, tree.index(ab));
        t.equal(0, tree.index(aa));

        // removing something should invalidate the cache
        tree.remove(ab);
        t.equal(1, tree.index(ac));
        t.equal(-1, tree.index(ab));
        t.equal(0, tree.index(aa));

        // insertAfter should invalidate
        tree.insertAfter(ab, aa);
        t.equal(0, tree.index(aa));
        t.equal(1, tree.index(ab));
        t.equal(2, tree.index(ac));

        // insertBefore should invalidate
        const foo = {};
        tree.insertBefore(foo, ab);
        t.equal(0, tree.index(aa));
        t.equal(2, tree.index(ab));
        t.equal(3, tree.index(ac));

        t.end();
});

test('children count', function(t) {
        // no need to test the caching since we already tested for that in childrenCount
        const tree = new SymbolTree();
        const a = {};
        const aa = {};
        const ab = {};
        const aba = {};
        const ac = {};
        const b = {};

        tree.insertLast(aa, a);
        tree.insertLast(ab, a);
        tree.insertLast(aba, ab);
        tree.insertLast(ac, a);
        tree.insertAfter(b, a);

        t.equal(3, tree.childrenCount(a), 'foo');
        t.equal(0, tree.childrenCount(aa));
        t.equal(1, tree.childrenCount(ab));
        t.equal(0, tree.childrenCount(b));

        t.end();
});
