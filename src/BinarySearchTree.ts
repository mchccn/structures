import BinaryTree, { BinaryTreeNode } from "./BinaryTree";

export default class BinarySearchTree extends BinaryTree<number> {
  constructor() {
    super();
  }

  private getMin(root: BinaryTreeNode<number>) {
    while (root.left) root = root.left;
    return root;
  }

  public insert(value: number) {
    const node = new BinaryTreeNode<number>(value);

    if (!this._root) {
      this._root = node;
    } else {
      let curr = this._root;

      while (true) {
        if (curr.value > value) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = node;
            break;
          }
        } else if (curr.value < value) {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = node;
            break;
          }
        } else {
          break;
        }
      }
    }

    return value;
  }

  public delete(value: number) {
    const deleteRecursively = (
      root: BinaryTreeNode<number> | null,
      value: number
    ) => {
      if (!root) return null;
      else if (value < root.value)
        root.left = deleteRecursively(root.left, value);
      else if (value > root.value)
        root.right = deleteRecursively(root.right, value);
      else {
        if (!root.left && !root.right) return null;
        else if (!root.left) {
          root = root.right;
          return root;
        } else if (!root.right) {
          root = root.left;
          return root;
        } else {
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

  public has(value: number) {
    let curr = this._root;

    while (curr) {
      if (curr.value > value) {
        curr = curr.left;
      } else if (curr.value < value) {
        curr = curr.right;
      } else {
        return true;
      }
    }

    return false;
  }
}
