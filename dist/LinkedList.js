"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = void 0;
/**
 * Represents a node in a linked list.
 *
 * @abstract
 * @class
 */
class LinkedListNode {
    constructor(value) {
        this._value = value;
    }
    /**
     * The node's value.
     */
    get value() {
        return this._value;
    }
    /**
     * Returns its value.
     */
    valueOf() {
        return this._value;
    }
}
exports.LinkedListNode = LinkedListNode;
/**
 * An abstract class for linked lists.
 *
 * @abstract
 * @class
 */
class LinkedList {
    constructor() {
        this._head = null;
        this._size = 0;
    }
    /**
     * The head node.
     */
    get head() {
        return this._head;
    }
    /**
     * The size of the linked list.
     */
    get size() {
        return this._size;
    }
    /**
     * A boolean indicating whether or not the list is empty.
     */
    get isEmpty() {
        return this._size === 0;
    }
}
exports.default = LinkedList;
