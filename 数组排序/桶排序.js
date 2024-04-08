/**
 * 桶排序函数
 * 时间复杂度在理想情况下为 O(n + k)，其中 n 为待排序数组长度，k 为桶的数量；空间复杂度为 O(n+k)
 * 根据键值范围分布，将元素分配到有限数量的桶里，对每个桶内部使用其他排序算法或递归应用桶排序

 * @param {Array<number>} arr 待排序的数组，其中元素应在一定范围内
 * @param {number} minValue 数组中元素可能的最小值
 * @param {number} maxValue 数组中元素可能的最大值
 * @param {Function} [comparator=(a, b) => a - b] 可选的比较函数，默认为升序排列
 * @returns {Array<number>} 排序后的数组
 */
function bucketSort(arr, minValue = Math.min(...arr), maxValue = Math.max(...arr), comparator = (a, b) => a - b) {
  // 初始化桶
  const bucketSize = (maxValue - minValue) / arr.length; // 近似桶大小
  const buckets = new Array(Math.ceil((maxValue - minValue) / bucketSize)).fill([]);
  // 将元素分配到各自的桶内
  for (const num of arr) {
    const index = Math.floor((num - minValue) / bucketSize);
    buckets[index].push(num);
  }
  // 对每个桶内部进行排序（这里假设使用插入排序，也可以根据实际情况选用其他排序算法）
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = insertionSort(buckets[i], comparator);
  }
  // 从所有桶中收集元素，组成新的有序数组
  let sortedArr = [];
  for (const bucket of buckets) {
    sortedArr = [...sortedArr, ...bucket];
  }
  return sortedArr;
}
// 插入排序作为桶内排序的辅助函数（此处仅为示例，可根据需求更改）
function insertionSort(bucket, comparator) {
  for (let i = 1; i < bucket.length; i++) {
    let current = bucket[i];
    let j = i - 1;
    while (j >= 0 && comparator(bucket[j], current) > 0) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = current;
  }
  return bucket;
}

// 示例
let testArr = [0.3, 0.1, 0.4, 0.2, 0.7, 0.6];
console.log(bucketSort(testArr)); // 输出：[0.1, 0.2, 0.3, 0.4, 0.6, 0.7]