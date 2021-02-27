/**
 * Represents the stack data structure.
 * Last In First Out (LIFO)
 * @class
 */
export default class Stack<T = any> {
    private _items;
    /**
     * @param items Optionally takes an array of type `T[]`
     */
    constructor(items?: T[]);
    get [Symbol.toStringTag](): string;
    [Symbol.iterator](): Generator<T, void, unknown>;
    /**
     * Get the items contained in the stack as an array.
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
     * Add values to the stack.
     * @param values The values to add to the stack.
     */
    push(...values: T[]): T[];
    /**
     * Remove the first element from the stack.
     */
    pop(): T | undefined;
}
