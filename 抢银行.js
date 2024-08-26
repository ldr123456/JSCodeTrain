function findPasswordCombinations(n, a) {
  const MOD = 1000000007;
  let count = 1; // 至少有一种组合，即第一个字母本身

  for(let i = 1;i < a.length;i++){
    if(a[i] === 0 || a[i] === 25){
      continue
    }
    count *= 2
  }
  return count % MOD;
}

// 示例输入
const n = 3;
const a = [12, 4, 1];

// 调用函数并打印结果
console.log(findPasswordCombinations(n, a)); // 应该输出 4