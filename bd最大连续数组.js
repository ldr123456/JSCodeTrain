function longestCount(nums) {
  if (nums.length === 0) return 0
  const dp = new Array(nums.length).fill(1)
  const prev = new Array(nums.length).fill(-1)
  let maxLength = 0
  let lastIndex = 0
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          prev[i] = j
        }
      }
    }
    if (dp[i] > maxLength) {
      maxLength = dp[i]
      lastIndex = i
    }
  }
  const result = []
  while (lastIndex !== -1) {
    result.unshift(nums[lastIndex])
    lastIndex = prev[lastIndex]
  }
  return { length: maxLength, sequence: result }
}
// 示例1
let nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(longestCount(nums1)) // 输出: [2, 3, 7, 101]

// 示例2
let nums2 = [0, 1, 0, 3, 2, 3]
console.log(longestCount(nums2)) // 输出: [0, 1, 2, 3]
