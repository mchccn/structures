import SinglyLinkedList, { SinglyLinkedListNode } from "./SinglyLinkedList";
/**
 * Represents a node in a doubly linked list.
 * @see SinglyLinkedList
 * @see DoublyLinkedList
 */
export declare class DoublyLinkedListNode<T = any> extends SinglyLinkedListNode<T> {
    protected _prev: DoublyLinkedListNode<T> | null;
    protected _next: DoublyLinkedListNode<T> | null;
    constructor(value: T);
    /**
     * The next node in the list.
     */
    get next(): DoublyLinkedListNode<T> | null;
    set next(v: DoublyLinkedListNode<T> | null);
    /**
     * The previous node in the list.
     */
    get prev(): DoublyLinkedListNode<T> | null;
    set prev(v: DoublyLinkedListNode<T> | null);
}
/**
 * Represents a doubly linked list.
 * @see DoublyLinkedListNode
 */
export default class DoublyLinkedList<T = any> extends SinglyLinkedList<T> {
    protected _head: DoublyLinkedListNode<T> | null;
    protected _tail: DoublyLinkedListNode<T> | null;
    constructor();
    [Symbol.iterator](): Generator<DoublyLinkedListNode<T>, void, unknown>;
    /**
     * The tail node of the list.
     */
    get tail(): DoublyLinkedListNode<T> | null;
    /**
     * Inserts a value into the head.
     * @param value The value to insert.
     */
    insertHead(value: T): void;
    /**
     * Inserts a value into the tail.
     * @param value The value to insert.
     */
    insertTail(value: T): void;
    /**
     * Deletes the head node.
     */
    deleteHead(): T | null;
    /**
     * Deletes the tail node.
     */
    deleteTail(): T | null;
    /**
     * Checks if a value exists in the list, starting from the head.
     * @param value The value to check.
     * @see SinglyLinkedList.prototype.has
     */
    hasHead(value: T): boolean;
    /**
     * Checks if a value exists in the list, starting from the tail.
     * @param value The value to check.
     * @see SinglyLinkedList.prototype.has
     */
    hasTail(value: T): boolean;
}
