/**
 * Represents a node in a linked list.
 *
 * @abstract
 * @class
 */
export declare abstract class LinkedListNode<T = any> {
    protected _value: T;
    constructor(value: T);
    /**
     * The node's value.
     */
    get value(): T;
    /**
     * Returns its value.
     */
    valueOf(): T;
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
    constructor();
    /**
     * The head node.
     */
    get head(): LinkedListNode<T> | null;
    /**
     * The size of the linked list.
     */
    get size(): number;
    /**
     * A boolean indicating whether or not the list is empty.
     */
    get isEmpty(): boolean;
}
