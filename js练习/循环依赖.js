class Node {
  constructor(name) {
    this.name = name
    this.neighbors = []
    this.visited = false
    this.recursionStack = false
  }
}
function isCircleDeps(modules) {
  const graph = new Map()
  for (const module of modules) {
    const currentNode = new Node(module.name)
    graph.set(module.name, currentNode)
  }
  for (const module of modules) {
    const currentNode = graph.get(module.name)
    for (const dep of module.node_modules || []) {
      const neighborNode = graph.get(dep.name)
      if (neighborNode) {
        currentNode.neighbors.push(neighborNode)
      }
    }
  }
  function dfs(node) {
    if (node.recursionStack) {
      return true
    }
    if (node.visited) {
      return false
    }
    node.visited = true
    node.recursionStack = true
    for (const neighbor of node.neighbors) {
      if (dfs(neighbor)) {
        return true
      }
    }
    node.recursionStack = false
    return false
  }
  for (const node of graph.values()) {
    if (dfs(node)) {
      return true
    }
  }
  return false
}

console.log(
  isCircleDeps([
    {
      name: 'a',
      node_modules: [
        {
          name: 'b'
        }
      ]
    },
    {
      name: 'b',
      node_modules: [
        {
          name: 'c'
        }
      ]
    },
    {
      name: 'c',
      node_modules: [
        {
          name: 'a'
        }
      ]
    }
  ]) // true
)
console.log(
  isCircleDeps([
    {
      name: 'a',
      node_modules: [
        {
          name: 'b'
        }
      ]
    },
    {
      name: 'b',
      node_modules: [
        {
          name: 'c'
        }
      ]
    }
  ]) // false
)
