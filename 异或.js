function flipPixelsAlongVerticalAxis(pixelSize, pixels) {
  // 计算每个像素的长度
  var pixelLength = pixelSize * 4;
  
  // 循环遍历像素，每次取出一个像素的数据进行翻转
  for (var i = 0; i < pixels.length; i += pixelLength) {
      // 获取当前像素的起始索引和结束索引
      var start = i;
      var end = i + pixelLength - 1;
      
      // 水平翻转像素内的数据
      while (start < end) {
          // 交换数据
          for (var j = 0; j < 4; j++) {
              var temp = pixels[start + j];
              pixels[start + j] = pixels[end - j];
              pixels[end - j] = temp;
          }
          // 更新索引
          start += 4;
          end -= 4;
      }
  }
  
  return pixels;
}

// 示例 1
var example1Size = 2;
var example1Pixels = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
var example1Result = flipPixelsAlongVerticalAxis(example1Size, example1Pixels);
console.log(example1Result);

// 示例 2
var example2Size = 1;
var example2Pixels = [1, 2, 3, 4];
var example2Result = flipPixelsAlongVerticalAxis(example2Size, example2Pixels);
console.log(example2Result);
