/**
 * Represents the queue data structure.
 * First In First Out (FIFO)
 * @see Stack
 * @class
 */
export default class Queue<T> {
    private _items;
    /**
     * @param items The items in the queue
     */
    constructor(items?: T[]);
    get [Symbol.toStringTag](): string;
    [Symbol.iterator](): Generator<T, void, unknown>;
    /**
     * Get the items contained in the queue as an array.
     */
    get buffer(): T[];
    /**
     * Boolean value indicating whether or not the stack is empty.
     */
    get isEmpty(): boolean;
    /**
     * Peek at the first element.
     */
    peek(): T;
    /**
     * Enqueues multiple values into the queue.
     * @param values The values to enqueue.
     */
    enqueue(...values: T[]): T[];
    /**
     * Dequeues a value.
     */
    dequeue(): T | undefined;
}
