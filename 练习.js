function findMaxDepthAndPath(list) {
  // 构建父节点到其直接子节点的映射
  const map = {};
  list.forEach(item => {
      const parentId = item.parent;
      const id = item.id;
      if (!map[parentId]) {
          map[parentId] = [];
      }
      map[parentId].push(id);
  });

  // DFS函数，返回指定节点的层数和路径
  function dfs(nodeId, depth, path) {
      if (!map[nodeId]) {
          return [depth, path];
      }
      let maxDepth = depth;
      let maxDepthPath = path;
      map[nodeId].forEach(childId => {
          const [childDepth, childPath] = dfs(childId, depth + 1, [...path, childId]);
          if (childDepth > maxDepth) {
              maxDepth = childDepth;
              maxDepthPath = childPath;
          }
      });
      return [maxDepth, maxDepthPath];
  }
  // 从根节点开始DFS
  return dfs(0, 1, [0]);
}

// 示例用法 
// 这个用例你能直接复制他发的文档吗？能复制直接复制
const list = [
  { id: 5, parent: 4 },
  { id: 2, parent: 0 },
  { id: 3, parent: 1 },
  { id: 1, parent: 0 },
  { id: 4, parent: 1 },
  { id: 0, parent: -1 }
];

const [maxDepth, path] = findMaxDepthAndPath(list);
console.log("最大深度", maxDepth);
console.log("路径", path);
