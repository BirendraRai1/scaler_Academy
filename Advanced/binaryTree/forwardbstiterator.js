// Given a Binary search tree, the task is to implement forward iterator on it with the following functions.

// curr(): returns the pointer to current element.
// next(): iterates to the next smallest element in the Binary Search Tree.
// isEmpty(): returns true if there no node left to traverse else false.

class node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

let stack = []

function bstIterator(root) {
  while (root != null) {
    stack.push(root)
    root = root.left
  }
}

function curr() {
  return stack[stack.length - 1].data
}

function next() {
  let current = stack[stack.length - 1]
  stack.pop()
  current = current.right
  while (current != null) {
    stack.push(current)
    current = current.left
  }
}

function isEmpty() {
  return stack.length == 0
}

let arr = []
function iterate() {
  while (!isEmpty()) {
    arr.push(curr())
    next()
  }
}

let root = new node(5)
root.left = new node(3)
root.right = new node(7)
root.left.left = new node(2)
root.left.right = new node(4)
root.right.left = new node(6)
root.right.right = new node(8)

bstIterator(root)

iterate()
console.log(arr)
