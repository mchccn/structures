/**
 * Represents the queue data structure.
 * First In First Out (FIFO)
 * @see Stack
 * @class
 */
export default class Queue<T> {
    private _items: T[];

    /**
     * @param items The items in the queue
     */
    constructor(items: T[] = []) {
        this._items = items;
    }

    get [Symbol.toStringTag]() {
        return "Queue";
    }

    *[Symbol.iterator]() {
        for (const item of this._items) yield item;
    }

    /**
     * Get the items contained in the queue as an array.
     */
    public get buffer() {
        return this._items;
    }

    /**
     * Boolean value indicating whether or not the stack is empty.
     */
    public get isEmpty() {
        return this._items.length === 0;
    }

    /**
     * Peek at the first element.
     */
    public peek() {
        return this._items[0];
    }

    /**
     * Enqueues multiple values into the queue.
     * @param values The values to enqueue.
     */
    public enqueue(...values: T[]) {
        return (this._items = this._items.concat(values));
    }

    /**
     * Dequeues a value.
     */
    public dequeue() {
        return this._items.shift();
    }
}
