/**
 * Represents a node in a linked list.
 *
 * @abstract
 * @class
 */
export abstract class LinkedListNode<T = any> {
    protected _value: T;

    constructor(value: T) {
        this._value = value;
    }

    /**
     * The node's value.
     */
    public get value() {
        return this._value;
    }

    /**
     * Returns its value.
     */
    public valueOf() {
        return this._value;
    }
}

/**
 * An abstract class for linked lists.
 *
 * @abstract
 * @class
 */
export default abstract class LinkedList<T = any> {
    protected _head: LinkedListNode<T> | null;
    protected _size: number;

    constructor() {
        this._head = null;
        this._size = 0;
    }

    /**
     * The head node.
     */
    public get head() {
        return this._head;
    }

    /**
     * The size of the linked list.
     */
    public get size() {
        return this._size;
    }

    /**
     * A boolean indicating whether or not the list is empty.
     */
    public get isEmpty() {
        return this._size === 0;
    }
}
