function findMinPathMax(n, m, a, children) {
  // 创建邻接表表示树
  const tree = {};
  for (let i = 0; i < n; i++) {
    const c = children[i][0];
    if (c > 0) {
      tree[i + 1] = children[i].slice(1);
    }
  }

  // DFS 函数，用于寻找满足条件的最小最大路径点权
  function dfs(node, currentSum, currentMax) {
    if (currentSum >= m) {
      // 如果当前路径和已经满足条件，尝试更新结果
      if (currentMax < bestResult[0]) {
        bestResult[0] = currentMax;
      }
    }

    // 如果当前节点没有子节点，返回当前最大值
    if (!tree[node]) {
      return currentMax;
    }

    let localMax = a[node - 1]; // 当前节点点权作为局部最大值的初始值

    // 遍历当前节点的所有子节点
    for (const child of tree[node]) {
      // 递归搜索子节点，并更新局部最大值
      localMax = Math.max(localMax, dfs(child, currentSum + a[child - 1], Math.max(a[child - 1], currentMax)));
    }

    // 返回经过当前节点后的最大路径点权
    return localMax;
  }

  // 初始化最佳结果数组
  let bestResult = [Infinity];

  // 从根节点开始DFS
  dfs(1, a[0], a[0]);

  // 如果 bestResult 仍然是 Infinity，说明无法找到满足条件的路径
  return bestResult[0] === Infinity ? -1 : bestResult[0];
}

// 示例输入
const n = 5;
const m = 3;
const a = [1, 2, 3, 4, 5];
const children = [
  [1, 2], // 1号节点的子节点是2号节点
  [1, 3], // 2号节点的子节点是3号节点
  [1, 4], // 3号节点的子节点是4号节点
  [1, 5], // 4号节点的子节点是5号节点
  [0]      // 5号节点没有子节点
];

// 调用函数并打印结果
console.log(findMinPathMax(n, m, a, children)); // 应该输出 2