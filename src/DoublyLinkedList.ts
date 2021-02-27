import SinglyLinkedList, { SinglyLinkedListNode } from "./SinglyLinkedList";

/**
 * Represents a node in a doubly linked list.
 * @see SinglyLinkedList
 * @see DoublyLinkedList
 */
export class DoublyLinkedListNode<T = any> extends SinglyLinkedListNode<T> {
  protected _prev: DoublyLinkedListNode<T> | null;
  protected _next: DoublyLinkedListNode<T> | null;

  constructor(value: T) {
    super(value);
    this._prev = null;
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

  /**
   * The previous node in the list.
   */
  public get prev() {
    return this._prev;
  }

  public set prev(v) {
    this._prev = v;
  }
}

/**
 * Represents a doubly linked list.
 * @see DoublyLinkedListNode
 */
export default class DoublyLinkedList<T = any> extends SinglyLinkedList<T> {
  protected _head: DoublyLinkedListNode<T> | null;
  protected _tail: DoublyLinkedListNode<T> | null;

  constructor() {
    super();
    this._tail = null;
    this._head = null;
  }

  *[Symbol.iterator]() {
    let curr = this._tail;

    while (curr?.next) {
      yield curr;
      curr = curr.next;
    }
  }

  /**
   * The tail node of the list.
   */
  public get tail() {
    return this._tail;
  }

  /**
   * Inserts a value into the head.
   * @param value The value to insert.
   */
  public insertHead(value: T) {
    if (!this._head) {
      this._head = new DoublyLinkedListNode(value);
      this._tail = this._head;
    } else {
      const temp = new DoublyLinkedListNode(value);
      temp.next = this._head;
      this._head.prev = temp;
      this._head = temp;
    }

    this._size++;
  }

  /**
   * Inserts a value into the tail.
   * @param value The value to insert.
   */
  public insertTail(value: T) {
    if (!this._tail) {
      this._tail = new DoublyLinkedListNode(value);
      this._head = this._tail;
    } else {
      const temp = new DoublyLinkedListNode(value);
      temp.next = this._tail;
      this._tail.next = temp;
      this._tail = temp;
    }

    this._size++;
  }

  /**
   * Deletes the head node.
   */
  public deleteHead() {
    if (!this._head) {
      if (this._tail === this._head) {
        this._head = null;
        this._tail = null;
      } else {
        this._head = this._head!.next;
        this._head!.prev = null;
      }
    }
    this._size--;
    return this._head ? this._head.value : null;
  }

  /**
   * Deletes the tail node.
   */
  public deleteTail() {
    if (!this._tail) {
      if (this._head === this._tail) {
        this._tail = null;
        this._head = null;
      } else {
        this._tail = this._tail!.prev;
        this._tail!.next = null;
      }
    }
    this._size--;
    return this._tail ? this._tail.value : null;
  }

  /**
   * Checks if a value exists in the list, starting from the head.
   * @param value The value to check.
   * @see SinglyLinkedList.prototype.has
   */
  public hasHead(value: T) {
    let curr = this._head;

    while (curr?.next) {
      if (curr.value === value) {
        return true;
      }

      curr = curr.next;
    }

    return false;
  }

  /**
   * Checks if a value exists in the list, starting from the tail.
   * @param value The value to check.
   * @see SinglyLinkedList.prototype.has
   */
  public hasTail(value: T) {
    let curr = this._tail;

    while (curr?.prev) {
      if (curr.value === value) {
        return true;
      }

      curr = curr.prev;
    }

    return false;
  }
}
