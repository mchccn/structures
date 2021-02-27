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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.SinglyLinkedList = exports.SinglyLinkedListNode = exports.Queue = exports.LinkedList = exports.LinkedListNode = exports.HashTable = exports.DoublyLinkedList = exports.DoublyLinkedListNode = exports.BinaryTree = exports.BinarySearchTree = exports.BinaryTreeNode = void 0;
const BinarySearchTree_1 = __importDefault(require("./BinarySearchTree"));
exports.BinarySearchTree = BinarySearchTree_1.default;
const BinaryTree_1 = __importStar(require("./BinaryTree"));
exports.BinaryTree = BinaryTree_1.default;
Object.defineProperty(exports, "BinaryTreeNode", { enumerable: true, get: function () { return BinaryTree_1.BinaryTreeNode; } });
const DoublyLinkedList_1 = __importStar(require("./DoublyLinkedList"));
exports.DoublyLinkedList = DoublyLinkedList_1.default;
Object.defineProperty(exports, "DoublyLinkedListNode", { enumerable: true, get: function () { return DoublyLinkedList_1.DoublyLinkedListNode; } });
const HashTable_1 = __importDefault(require("./HashTable"));
exports.HashTable = HashTable_1.default;
const LinkedList_1 = __importStar(require("./LinkedList"));
exports.LinkedList = LinkedList_1.default;
Object.defineProperty(exports, "LinkedListNode", { enumerable: true, get: function () { return LinkedList_1.LinkedListNode; } });
const Queue_1 = __importDefault(require("./Queue"));
exports.Queue = Queue_1.default;
const SinglyLinkedList_1 = __importStar(require("./SinglyLinkedList"));
exports.SinglyLinkedList = SinglyLinkedList_1.default;
Object.defineProperty(exports, "SinglyLinkedListNode", { enumerable: true, get: function () { return SinglyLinkedList_1.SinglyLinkedListNode; } });
const Stack_1 = __importDefault(require("./Stack"));
exports.Stack = Stack_1.default;
exports.default = {
    BinaryTreeNode: BinaryTree_1.BinaryTreeNode,
    BinarySearchTree: BinarySearchTree_1.default,
    BinaryTree: BinaryTree_1.default,
    DoublyLinkedListNode: DoublyLinkedList_1.DoublyLinkedListNode,
    DoublyLinkedList: DoublyLinkedList_1.default,
    HashTable: HashTable_1.default,
    LinkedListNode: LinkedList_1.LinkedListNode,
    LinkedList: LinkedList_1.default,
    Queue: Queue_1.default,
    SinglyLinkedListNode: SinglyLinkedList_1.SinglyLinkedListNode,
    SinglyLinkedList: SinglyLinkedList_1.default,
    Stack: Stack_1.default,
};
