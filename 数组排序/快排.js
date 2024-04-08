/**
 * 快速排序函数
 * 时间复杂度平均为 O(n log n)，最好情况下为 O(n log n)，最坏情况下为 O(n^2)（当输入数组近乎有序时）；
 * 空间复杂度为 O(log n)（递归调用栈占用的空间）
 * 采用分治策略，选取一个基准元素（pivot），将数组分为两部分：
 * 一部分包含所有小于基准的元素，另一部分包含所有大于等于基准的元素。然后递归地对这两部分进行快速排序。
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // 基本情况：空数组或单元素数组无需排序
  }
  const pivot = arr[Math.floor(arr.length / 2)]; // 选择中间元素作为基准
  const less = [];
  const equal = [];
  const greater = [];
  for (const el of arr) {
    if (el < pivot) {
      less.push(el);
    } else if (el === pivot) {
      equal.push(el);
    } else {
      greater.push(el);4
    }
  }
  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// 示例
let testArr = [5, 3, 8, 4, 2];
console.log(quickSort(testArr)); // 输出：[2, 3, 4, 5, 8]