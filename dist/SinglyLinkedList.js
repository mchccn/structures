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
exports.SinglyLinkedListNode = void 0;
const LinkedList_1 = __importStar(require("./LinkedList"));
/**
 * Represents a singly linked list node.
 * @see LinkedListNode
 * @see SinglyLinkedList
 * @class
 */
class SinglyLinkedListNode extends LinkedList_1.LinkedListNode {
    constructor(value) {
        super(value);
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
}
exports.SinglyLinkedListNode = SinglyLinkedListNode;
/**
 * Represents a linked list with pointers in one direction.
 * @see LinkedList
 * @see DoublyLinkedList
 * @class
 */
class SinglyLinkedList extends LinkedList_1.default {
    constructor() {
        super();
        this._head = null;
    }
    *[Symbol.iterator]() {
        let curr = this._head;
        while (curr === null || curr === void 0 ? void 0 : curr.next) {
            yield curr;
            curr = curr.next;
        }
    }
    /**
     * Inserts a value to the tail.
     * @param value The value to insert into the list.
     */
    insert(value) {
        if (!this._head) {
            this._head = new SinglyLinkedListNode(value);
        }
        else {
            const head = this._head;
            this._head = new SinglyLinkedListNode(value);
            this._head.next = head;
        }
        this._size++;
    }
    /**
     * Removes a node from the linked list.
     * @param value The value to remove.
     */
    remove(value) {
        let curr = this._head;
        if ((curr === null || curr === void 0 ? void 0 : curr.value) === value) {
            this._head = curr.next;
            this._size--;
        }
        else {
            let prev = curr;
            while (curr === null || curr === void 0 ? void 0 : curr.next) {
                if (curr.value === value) {
                    prev.next = curr.next;
                    prev = curr;
                    curr = curr.next;
                    break;
                }
                prev = curr;
                curr = curr.next;
            }
            if ((curr === null || curr === void 0 ? void 0 : curr.value) === value) {
                prev.next = null;
            }
            this._size--;
        }
        return value;
    }
    /**
     * Checks if the value exists inside the list.
     * @param value The value to check.
     */
    has(value) {
        let curr = this._head;
        while (curr === null || curr === void 0 ? void 0 : curr.next) {
            if (curr.value === value)
                return true;
            curr = curr.next;
        }
        return false;
    }
}
exports.default = SinglyLinkedList;
