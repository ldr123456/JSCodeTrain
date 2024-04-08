
/**
 * 冒泡排序函数
 * 时间复杂度平均为 O(n^2)，最好情况下为 O(n)，最坏情况下为 O(n^2)；空间复杂度为 O(1)
 * 通过不断交换相邻元素位置，将最大或最小的元素逐渐"冒泡"到数组末尾
 * @param {Array<number>} arr 需要排序的数组，其中元素为任意可比较大小的数值类型 
 * @returns {Array<number>} 排序后的数组，按升序排列
 */
function bubbleSort(arr){
  var len = arr.length;
  for(let i = 0;i < len-1;i++){
    for(let j = 0;j < len-i-1;j++){
      if(arr[j] > arr[j+1]){
        let num = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = num
      }
    }
  }
  return arr
}

// 示例
let testArr = [5, 3, 8, 4, 2];
console.log(bubbleSort(testArr)); // 输出：[2, 3, 4, 5, 8]