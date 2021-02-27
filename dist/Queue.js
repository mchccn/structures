"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the queue data structure.
 * First In First Out (FIFO)
 * @see Stack
 * @class
 */
class Queue {
    /**
     * @param items The items in the queue
     */
    constructor(items = []) {
        this._items = items;
    }
    get [Symbol.toStringTag]() {
        return "Queue";
    }
    *[Symbol.iterator]() {
        for (const item of this._items)
            yield item;
    }
    /**
     * Get the items contained in the queue as an array.
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
        return this._items[0];
    }
    /**
     * Enqueues multiple values into the queue.
     * @param values The values to enqueue.
     */
    enqueue(...values) {
        return (this._items = this._items.concat(values));
    }
    /**
     * Dequeues a value.
     */
    dequeue() {
        return this._items.shift();
    }
}
exports.default = Queue;
