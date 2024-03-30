/**
 * 计数排序函数
 * 时间复杂度为 O(n + k)，其中 n 为待排序数组长度，k 为数组中不同元素的最大值与最小值之差加上1；空间复杂度为 O(n+k)
 * 根据数组中元素出现的频次进行排序，适用于非负整数且值域范围不大的情况
 * @param {Array<number>} arr 待排序的数组，其中元素应为非负整数
 * @returns {Array<number>} 排序后的数组
 */
function countingSort(arr) {
  // 获取数组中最大和最小的元素值
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  // 初始化计数数组 count，其长度等于最大值与最小值之差加1
  const count = new Array(maxValue - minValue + 1).fill(0);
  // 统计每个元素出现的次数
  for (const num of arr) {
    count[num - minValue]++;
  }
  // 重建排序后的数组
  let sortedIndex = 0;
  for (let i = 0; i < count.length; i++) {
    // 遍历计数数组，将每个元素重复相应的次数
    while (count[i] > 0) {
      arr[sortedIndex++] = i + minValue;
      count[i]--;
    }
  }
  return arr;
}

// 示例
let testArr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(testArr)); // 输出：[1, 2, 2, 3, 3, 4, 8]