"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTreeNode = void 0;
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
exports.BinaryTreeNode = BinaryTreeNode;
class BinaryTree {
    constructor() {
        this._root = null;
    }
    preOrderTraversalRecursively() {
        const res = [];
        (function traverse(node) {
            if (!node)
                return;
            res.push(node.value);
            traverse(node.left);
            traverse(node.right);
        })(this._root);
        return res;
    }
    preOrderTraversalIteratively() {
        const res = [];
        res.push(this._root);
        while (res.length) {
            const node = res.pop();
            if (node) {
                if (node.right)
                    res.push(node.right);
                if (node.left)
                    res.push(node.left);
            }
        }
        return res;
    }
    inOrderTraversalRecursively() {
        const res = [];
        (function traverse(node) {
            if (!node)
                return;
            traverse(node.left);
            res.push(node.value);
            traverse(node.right);
        })(this._root);
        return res;
    }
    inOrderTraversalIteratively() {
        const res = [];
        let curr = this._root;
        const store = [];
        let done = false;
        while (!done) {
            if (curr) {
                store.push(curr);
                curr = curr.left;
            }
            else {
                if (store.length) {
                    curr = store.pop();
                    res.push(curr.value);
                    curr = curr.right;
                }
                else {
                    done = true;
                }
            }
        }
        return res;
    }
    postOrderTraversalRecursively() {
        const res = [];
        (function traverse(node) {
            if (!node)
                return;
            traverse(node.left);
            traverse(node.right);
            res.push(node.value);
        })(this._root);
        return res;
    }
    postOrderTraversalIteratively() {
        const res = [];
        const store1 = [];
        const store2 = [];
        while (store1.length) {
            const node = store1.pop();
            store2.push(node);
            if (node.left)
                store1.push(node.left);
            if (node.right)
                store1.push(node.right);
        }
        while (store2.length) {
            const node = store2.pop();
            res.push(node.value);
        }
        return res;
    }
    levelOrderTraversal() {
        const res = [];
        const queue = [];
        if (!this._root)
            return res;
        queue.push(this._root);
        while (queue.length) {
            const node = queue.shift();
            if (node) {
                res.push(node.value);
                if (node.left)
                    queue.push(node.left);
                if (node.right)
                    queue.push(node.right);
            }
        }
        return res;
    }
}
exports.default = BinaryTree;
