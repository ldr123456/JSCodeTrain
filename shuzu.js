function exist(board, word) {
  const rows = board.length
  const cols = board[0].length
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ] // 上下左右四个方向

  function dfs(row, col, index) {
    if (index === word.length) {
      return true // 已经匹配到单词的最后一个字符
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false // 超出边界或者当前格子的字符与单词的相应字符不匹配
    }

    const temp = board[row][col]
    board[row][col] = '' // 标记当前格子已经访问过

    for (const [dx, dy] of directions) {
      const newRow = row + dx
      const newCol = col + dy
      if (dfs(newRow, newCol, index + 1)) {
        return true
      }
    }

    board[row][col] = temp // 恢复当前格子的字符
    return false
  }

  // 遍历二维网格中的每个格子，以每个格子作为起点进行深度优先搜索
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}

// 测试示例
const board = [
  ['T', 'C', 'S', 'A'],
  ['U', 'Z', 'I', 'B'],
  ['Y', 'C', 'G', 'H']
]
const word = 'CSIG'
console.log(exist(board, word)) // 输出 true
