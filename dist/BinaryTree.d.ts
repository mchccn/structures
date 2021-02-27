export declare class BinaryTreeNode<T = any> {
    value: T;
    right: BinaryTreeNode<T> | null;
    left: BinaryTreeNode<T> | null;
    constructor(value: T);
}
export default class BinaryTree<T = any> {
    protected _root: BinaryTreeNode<T> | null;
    constructor();
    preOrderTraversalRecursively(): T[];
    preOrderTraversalIteratively(): (BinaryTreeNode<T> | null)[];
    inOrderTraversalRecursively(): T[];
    inOrderTraversalIteratively(): T[];
    postOrderTraversalRecursively(): T[];
    postOrderTraversalIteratively(): T[];
    levelOrderTraversal(): T[];
}
