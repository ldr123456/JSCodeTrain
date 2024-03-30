/**
 * 选择排序函数
 * 时间复杂度始终为 O(n^2)，空间复杂度为 O(1)
 * 每一轮从未排序部分中找到最小（或最大）元素，将其放到已排序部分的末尾
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function selectionSort(arr) {
  const len = arr.length;
  // 遍历整个数组
  for (let i = 0; i < len - 1; i++) {
    // 找到剩余未排序部分中的最小元素索引
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 将找到的最小元素与当前位置的元素交换
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// 示例
let testArr = [5, 3, 8, 4, 2];
console.log(selectionSort(testArr)); // 输出：[2, 3, 4, 5, 8]