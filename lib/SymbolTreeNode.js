'use strict';

module.exports = class SymbolTreeNode {
        constructor() {
                this.parent = null;
                this.prev = null;
                this.next = null;

                this.first = null;
                this.last = null;
        }

        get isAttached() {
                return !!(this.parent || this.prev || this.next);
        }

        get isEmpty() {
                return !this.first;
        }
};
