// 测试数据
const paths = [
  'A-B-C-D-E/F',
  'A-B-K/L',
  'G',
  'A-H/I',
  'M-B-C-D/M-N',
  'M-B-C-D'
];

// 构建树结构的函数
function buildTree(paths) {
  let root = [];

  paths.forEach(path => {
    const [directories, file] = path.split('/');
    const levels = directories.split('-');
    let currentLevel = root;

    for (let i = 0; i < levels.length; i++) {
      let level = levels[i];

      if (i === 2 && levels.length > 3) {
        // 将第四层及其后的部分合并到第三层
        level = levels.slice(2).join('-');
        i = levels.length; // 终止循环
      }

      let existingNode = currentLevel.find(node => node.label === level);

      if (!existingNode) {
        existingNode = { label: level, children: [] };
        currentLevel.push(existingNode);
      }

      currentLevel = existingNode.children;
    }

    if (file) {
      currentLevel.push({ label: file });
    }
  });

  // 删除所有空的children属性
  function removeEmptyChildren(nodes) {
    nodes.forEach(node => {
      if (node.children && node.children.length === 0) {
        delete node.children;
      } else if (node.children) {
        removeEmptyChildren(node.children);
      }
    });
  }

  removeEmptyChildren(root);
  return root;
}

// 构建树结构
const tree = buildTree(paths);
console.log(JSON.stringify(tree, null, 2));
