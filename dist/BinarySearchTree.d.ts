import BinaryTree, { BinaryTreeNode } from "./BinaryTree";
export default class BinarySearchTree extends BinaryTree<number> {
    constructor();
    private getMin;
    insert(value: number): number;
    delete(value: number): BinaryTreeNode<number> | null;
    has(value: number): boolean;
}
