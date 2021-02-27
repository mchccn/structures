import LinkedList, { LinkedListNode } from "./LinkedList";

/**
 * Represents a singly linked list node.
 * @see LinkedListNode
 * @see SinglyLinkedList
 * @class
 */
export class SinglyLinkedListNode<T = any> extends LinkedListNode<T> {
    protected _next: SinglyLinkedListNode<T> | null;

    constructor(value: T) {
        super(value);
        this._next = null;
    }

    /**
     * The next node in the list.
     */
    public get next() {
        return this._next;
    }

    public set next(v) {
        this._next = v;
    }
}

/**
 * Represents a linked list with pointers in one direction.
 * @see LinkedList
 * @see DoublyLinkedList
 * @class
 */
export default class SinglyLinkedList<T = any> extends LinkedList<T> {
    protected _head: SinglyLinkedListNode<T> | null;

    constructor() {
        super();
        this._head = null;
    }

    *[Symbol.iterator]() {
        let curr = this._head;

        while (curr?.next) {
            yield curr;
            curr = curr.next;
        }
    }

    /**
     * Inserts a value to the tail.
     * @param value The value to insert into the list.
     */
    public insert(value: T) {
        if (!this._head) {
            this._head = new SinglyLinkedListNode<T>(value);
        } else {
            const head = this._head;
            this._head = new SinglyLinkedListNode<T>(value);
            this._head.next = head;
        }

        this._size++;
    }

    /**
     * Removes a node from the linked list.
     * @param value The value to remove.
     */
    public remove(value: T) {
        let curr = this._head;

        if (curr?.value === value) {
            this._head = curr.next;
            this._size--;
        } else {
            let prev = curr;

            while (curr?.next) {
                if (curr.value === value) {
                    prev!.next = curr.next;
                    prev = curr;
                    curr = curr.next;
                    break;
                }
                prev = curr;
                curr = curr.next;
            }

            if (curr?.value === value) {
                prev!.next = null;
            }

            this._size--;
        }

        return value;
    }

    /**
     * Checks if the value exists inside the list.
     * @param value The value to check.
     */
    public has(value: T) {
        let curr = this._head;

        while (curr?.next) {
            if (curr.value === value) return true;
            curr = curr.next;
        }

        return false;
    }
}
