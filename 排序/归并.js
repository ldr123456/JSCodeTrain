/**
 * 归并排序函数
 * 时间复杂度为 O(nlogn)，空间复杂度为 O(n)
 * 利用分治法，将大问题不断分解为小问题，最后将小问题的结果合并起来得到原问题的解
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function mergeSort(arr) {
  // 递归终止条件：数组长度为1或空时直接返回
  if (arr.length <= 1) {
    return arr;
  }
  // 将数组等分为两半
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // 递归对左右两部分分别进行归并排序
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  // 合并两个已排序数组
  return merge(leftSorted, rightSorted);
}
// 合并两个有序数组的辅助函数
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // 比较两个数组的元素并依次将较小的元素放入结果数组
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  // 若其中一个数组还有剩余元素，则将其全部添加到结果数组中
  while (leftIndex < left.length) {
    result.push(left[leftIndex++]);
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex++]);
  }
  return result;
}

// 示例
let testArr = [5, 3, 8, 4, 2];
console.log(mergeSort(testArr)); // 输出：[2, 3, 4, 5, 8]