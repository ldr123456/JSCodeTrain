class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 前序遍历
function preorderTraversal(root) {
  const result = []
  const stack = []

  let node = root
  while (node || stack.length) {
    while (node) {
      result.push(node.val)
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    node = node.right
  }

  return result
}

// 中序遍历
function inorderTraversal(root) {
  const result = []
  const stack = []

  let node = root
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    result.push(node.val)
    node = node.right
  }

  return result
}

// 后序遍历
function postorderTraversal(root) {
  const result = []
  const stack = []

  let node = root
  let lastVisited = null
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack[stack.length - 1]
    if (!node.right || node.right === lastVisited) {
      result.push(node.val)
      stack.pop()
      lastVisited = node
      node = null
    } else {
      node = node.right
    }
  }

  return result
}

// 测试
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log('前序遍历:', preorderTraversal(root)) // 1 2 4 5 3
console.log('中序遍历:', inorderTraversal(root)) // 4 2 5 1 3
console.log('后序遍历:', postorderTraversal(root)) // 4 5 2 3 1
