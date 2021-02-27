"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedListNode = void 0;
const SinglyLinkedList_1 = __importStar(require("./SinglyLinkedList"));
/**
 * Represents a node in a doubly linked list.
 * @see SinglyLinkedList
 * @see DoublyLinkedList
 */
class DoublyLinkedListNode extends SinglyLinkedList_1.SinglyLinkedListNode {
    constructor(value) {
        super(value);
        this._prev = null;
        this._next = null;
    }
    /**
     * The next node in the list.
     */
    get next() {
        return this._next;
    }
    set next(v) {
        this._next = v;
    }
    /**
     * The previous node in the list.
     */
    get prev() {
        return this._prev;
    }
    set prev(v) {
        this._prev = v;
    }
}
exports.DoublyLinkedListNode = DoublyLinkedListNode;
/**
 * Represents a doubly linked list.
 * @see DoublyLinkedListNode
 */
class DoublyLinkedList extends SinglyLinkedList_1.default {
    constructor() {
        super();
        this._tail = null;
        this._head = null;
    }
    *[Symbol.iterator]() {
        let curr = this._tail;
        while (curr === null || curr === void 0 ? void 0 : curr.next) {
            yield curr;
            curr = curr.next;
        }
    }
    /**
     * The tail node of the list.
     */
    get tail() {
        return this._tail;
    }
    /**
     * Inserts a value into the head.
     * @param value The value to insert.
     */
    insertHead(value) {
        if (!this._head) {
            this._head = new DoublyLinkedListNode(value);
            this._tail = this._head;
        }
        else {
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
    insertTail(value) {
        if (!this._tail) {
            this._tail = new DoublyLinkedListNode(value);
            this._head = this._tail;
        }
        else {
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
    deleteHead() {
        if (!this._head) {
            if (this._tail === this._head) {
                this._head = null;
                this._tail = null;
            }
            else {
                this._head = this._head.next;
                this._head.prev = null;
            }
        }
        this._size--;
        return this._head ? this._head.value : null;
    }
    /**
     * Deletes the tail node.
     */
    deleteTail() {
        if (!this._tail) {
            if (this._head === this._tail) {
                this._tail = null;
                this._head = null;
            }
            else {
                this._tail = this._tail.prev;
                this._tail.next = null;
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
    hasHead(value) {
        let curr = this._head;
        while (curr === null || curr === void 0 ? void 0 : curr.next) {
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
    hasTail(value) {
        let curr = this._tail;
        while (curr === null || curr === void 0 ? void 0 : curr.prev) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.prev;
        }
        return false;
    }
}
exports.default = DoublyLinkedList;
