/**
 * Represents the stack data structure.
 * Last In First Out (LIFO)
 * @class
 */
export default class Stack<T = any> {
    private _items: T[];

    /**
     * @param items Optionally takes an array of type `T[]`
     */
    constructor(items: T[] = []) {
        this._items = items;
    }

    get [Symbol.toStringTag]() {
        return "Stack";
    }

    *[Symbol.iterator]() {
        for (const item of this._items) yield item;
    }

    /**
     * Get the items contained in the stack as an array.
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
        return this._items[this._items.length - 1];
    }

    /**
     * Add values to the stack.
     * @param values The values to add to the stack.
     */
    public push(...values: T[]) {
        return (this._items = this._items.concat(values));
    }

    /**
     * Remove the first element from the stack.
     */
    public pop() {
        return this._items.pop();
    }
}
