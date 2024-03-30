/**
 * 堆排序函数
 * 时间复杂度为 O(nlogn)，空间复杂度为 O(1)
 * 利用完全二叉堆结构特性，构建最大堆或最小堆，然后进行调整和交换，从而完成排序
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function heapSort(arr) {
  // 构建最大堆
  buildMaxHeap(arr);
  // 从最后一个非叶子节点开始，依次将堆顶元素与末尾元素交换并将堆大小缩小
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i); // 将堆顶元素（最大值）与末尾元素交换
    arr.pop(); // 删除堆顶元素（此时位于数组末尾）
    maxHeapify(arr, 0, i); // 重新调整堆结构使其保持最大堆性质
  }
  return arr;
}
// 辅助函数：构建最大堆
function buildMaxHeap(arr) {
  const len = arr.length;
  // 从最后一个非叶子节点开始向上调整堆结构
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, len);
  }
}
// 辅助函数：维持最大堆性质
function maxHeapify(arr, index, heapSize) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  // 查找最大值所在的位置（父节点、左子节点、右子节点三者之间的最大值）
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  // 如果最大值不是父节点，交换它们的位置，并对新的子树继续进行调整
  if (largest !== index) {
    swap(arr, index, largest);
    maxHeapify(arr, largest, heapSize);
  }
}
// 辅助函数：交换数组中两个元素的位置
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // 使用解构赋值进行快速交换
}

// 示例
let testArr = [5, 3, 8, 4, 2];
heapSort(testArr);
console.log(testArr); // 输出：[2, 3, 4, 5, 8]