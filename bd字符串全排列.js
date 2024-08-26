function permute(str) {
  if (str.length <= 1) return [str];

  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    let permutations = permute(remainingChars);
    for (let j = 0; j < permutations.length; j++) {
      result.push(char + permutations[j]);
    }
  }
  return result;
}

// 输入字符串
const inputStr = "abcd";
// 生成全排列
const permutations = permute(inputStr);
console.log(permutations);
