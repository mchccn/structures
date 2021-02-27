import LinkedList, { LinkedListNode } from "./LinkedList";
/**
 * Represents a singly linked list node.
 * @see LinkedListNode
 * @see SinglyLinkedList
 * @class
 */
export declare class SinglyLinkedListNode<T = any> extends LinkedListNode<T> {
    protected _next: SinglyLinkedListNode<T> | null;
    constructor(value: T);
    /**
     * The next node in the list.
     */
    get next(): SinglyLinkedListNode<T> | null;
    set next(v: SinglyLinkedListNode<T> | null);
}
/**
 * Represents a linked list with pointers in one direction.
 * @see LinkedList
 * @see DoublyLinkedList
 * @class
 */
export default class SinglyLinkedList<T = any> extends LinkedList<T> {
    protected _head: SinglyLinkedListNode<T> | null;
    constructor();
    [Symbol.iterator](): Generator<SinglyLinkedListNode<T>, void, unknown>;
    /**
     * Inserts a value to the tail.
     * @param value The value to insert into the list.
     */
    insert(value: T): void;
    /**
     * Removes a node from the linked list.
     * @param value The value to remove.
     */
    remove(value: T): T;
    /**
     * Checks if the value exists inside the list.
     * @param value The value to check.
     */
    has(value: T): boolean;
}
