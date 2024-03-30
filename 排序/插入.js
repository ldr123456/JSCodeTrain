/**
 * 插入排序函数
 * 时间复杂度平均为 O(n^2)，最好情况下为 O(n)，最坏情况下为 O(n^2)；空间复杂度为 O(1)
 * 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function insertionSort(arr) {
  const len = arr.length;
  // 遍历从1到数组长度减一的所有元素
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    // 将key元素逐步与前面已排序的部分进行比较并插入到正确位置
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// 示例
let testArr = [5, 3, 8, 4, 2];
console.log(insertionSort(testArr)); // 输出：[2, 3, 4, 5, 8]