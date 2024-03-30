function sort(arr){
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
const arr = [12,5,2185,163,5,12,21]
console.log(sort(arr));