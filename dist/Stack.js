"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the stack data structure.
 * Last In First Out (LIFO)
 * @class
 */
class Stack {
    /**
     * @param items Optionally takes an array of type `T[]`
     */
    constructor(items = []) {
        this._items = items;
    }
    get [Symbol.toStringTag]() {
        return "Stack";
    }
    *[Symbol.iterator]() {
        for (const item of this._items)
            yield item;
    }
    /**
     * Get the items contained in the stack as an array.
     */
    get buffer() {
        return this._items;
    }
    /**
     * Boolean value indicating whether or not the stack is empty.
     */
    get isEmpty() {
        return this._items.length === 0;
    }
    /**
     * Peek at the first element.
     */
    peek() {
        return this._items[this._items.length - 1];
    }
    /**
     * Add values to the stack.
     * @param values The values to add to the stack.
     */
    push(...values) {
        return (this._items = this._items.concat(values));
    }
    /**
     * Remove the first element from the stack.
     */
    pop() {
        return this._items.pop();
    }
}
exports.default = Stack;
