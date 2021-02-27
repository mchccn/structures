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
const BinaryTree_1 = __importStar(require("./BinaryTree"));
class BinarySearchTree extends BinaryTree_1.default {
    constructor() {
        super();
    }
    getMin(root) {
        while (root.left)
            root = root.left;
        return root;
    }
    insert(value) {
        const node = new BinaryTree_1.BinaryTreeNode(value);
        if (!this._root) {
            this._root = node;
        }
        else {
            let curr = this._root;
            while (true) {
                if (curr.value > value) {
                    if (curr.left) {
                        curr = curr.left;
                    }
                    else {
                        curr.left = node;
                        break;
                    }
                }
                else if (curr.value < value) {
                    if (curr.right) {
                        curr = curr.right;
                    }
                    else {
                        curr.right = node;
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
        return value;
    }
    delete(value) {
        const deleteRecursively = (root, value) => {
            if (!root)
                return null;
            else if (value < root.value)
                root.left = deleteRecursively(root.left, value);
            else if (value > root.value)
                root.right = deleteRecursively(root.right, value);
            else {
                if (!root.left && !root.right)
                    return null;
                else if (!root.left) {
                    root = root.right;
                    return root;
                }
                else if (!root.right) {
                    root = root.left;
                    return root;
                }
                else {
                    const temp = this.getMin(root.right);
                    root.value = temp.value;
                    root.right = deleteRecursively(root.right, temp.value);
                    return root;
                }
            }
            return root;
        };
        return deleteRecursively(this._root, value);
    }
    has(value) {
        let curr = this._root;
        while (curr) {
            if (curr.value > value) {
                curr = curr.left;
            }
            else if (curr.value < value) {
                curr = curr.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
exports.default = BinarySearchTree;
