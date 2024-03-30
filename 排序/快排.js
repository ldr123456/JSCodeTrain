function sort(arr){
  if(arr.length <= 1) return arr

  const start = arr[0]
  const left = []
  const right = []
  for(let i = 1;i < arr.length;i++){
    if(arr[i] < start){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return sort(left).concat(start, sort(right))
}
console.log(sort([2,5,18,35,37,4, ,5,6,17,9,5,33,22,96]));
// 多实践理解知识