# `symbol-tree` is no longer maintained

This package provided a tree and linked-list data structure for JavaScript objects, using `Symbol` properties to store tree relationships. It is no longer supported or maintained.

The [`jsdom`](https://github.com/jsdom/jsdom) package, which was its primary consumer, [has replaced it with an internal DOM-specific tree implementation](https://github.com/jsdom/jsdom/commit/d555e61fb5a3725709434468130c46faaea0d1fe).

Existing releases remain available [on npm](https://www.npmjs.com/package/symbol-tree) and have not been deprecated there, to avoid installation warnings for applications that continue to use this package.

To browse the source code and API documentation, see [Git history](https://github.com/jsdom/js-symbol-tree/tree/77dc2877246d91f3b82d0fbc6ae80ef7d5618b80).
