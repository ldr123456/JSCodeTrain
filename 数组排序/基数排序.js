/**
 * 基数排序函数
 * 时间复杂度为 O(kn)，其中 k 为数字的最大位数，n 为待排序数组长度；空间复杂度为 O(n+k)
 * 利用“分配”和“收集”的思想，按照低位先排、高位后排的原则，对整数进行排序

 * @param {Array<number>} arr 待排序的数组，其中元素为非负整数
 * @returns {Array<number>} 排序后的数组
 */
function radixSort(arr) {
  // 获取数组中最大数的位数
  const maxNum = Math.max(...arr);
  const digitCount = Math.floor(Math.log10(maxNum)) + 1;
  // 从最低位开始，对每一位进行计数排序
  for (let digit = 0; digit < digitCount; digit++) {
    // 创建十个桶，用于存放各个位上的数字
    const buckets = new Array(10).fill([]);
    // 分配阶段：将数组中的数按照当前位上的数字放入对应的桶内
    for (const num of arr) {
      const bucketIndex = Math.floor((num / (10 ** digit)) % 10);
      buckets[bucketIndex].push(num);
    }
    // 收集阶段：按照桶的顺序，依次取出桶内的数，组成新的有序数组
    let index = 0;
    for (const bucket of buckets) {
      for (const num of bucket) {
        arr[index++] = num;
      }
    }
  }
  return arr;
}

// 示例
let testArr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(testArr)); // 输出：[2, 24, 45, 66, 75, 90, 170, 802]