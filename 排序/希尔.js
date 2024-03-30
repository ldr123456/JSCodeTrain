/**
 * 希尔排序函数
 * 时间复杂度取决于所选增量序列，平均情况下为 O(nlogn)，最坏情况下为 O(n^2)；空间复杂度为 O(1)
 * 基于插入排序，通过设置不同的间隔序列逐步减少间隔，最终使整个序列基本有序，以提高插入排序效率
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function shellSort(arr) {
  // 初始化数组长度
  let len = arr.length;
  // 设置初始步长（通常采用序列 h_n = n/2^(k), k=1,2,3,...）
  let gap = Math.floor(len / 2);
  // 当步长大于0时继续执行分组插入排序
  while (gap > 0) {
    // 对所有按照步长分组的子序列进行插入排序
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j;
      // 将temp元素插入到已排序的子序列正确位置
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      // 插入temp元素
      arr[j] = temp;
    }
    // 缩小步长，继续下一轮排序
    gap = Math.floor(gap / 2);
  }
  return arr;
}

// 示例
let testArr = [5, 3, 8, 4, 2];
console.log(shellSort(testArr)); // 输出：[2, 3, 4, 5, 8]