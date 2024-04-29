let originalObject = { a: 1, b: { c: 2 } }
// 浅拷贝(只会复制对象或数组的第一层，嵌套层不会复制，但是可以引用到，这也代表如果对复制出的对象或者数组的嵌套内容进行修改，也会改变原对象或数组)
let shallowCopyObject = { ...originalObject }

shallowCopyObject.b.c = 3

console.log(originalObject) // { a: 1, b: { c: 3 } }
console.log(shallowCopyObject) // { a: 1, b: { c: 3 } }

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let copy = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key])
    }
  }

  return copy
}
// 使用JSON序列化和反序列化实现(无法处理函数、RefExp等特殊对象的拷贝，且会忽略对象的原型链)
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 深拷贝(需要使用递归或者库来实现，对象或数组的嵌套内容也会进行复制，两者之间不再有引用关系)
let object = { a: 1, b: { c: 2 } }
let deepCopyObject = deepCopy(object)

deepCopyObject.b.c = 3

console.log(object) // { a: 1, b: { c: 2 } }
console.log(deepCopyObject) // { a: 1, b: { c: 3 } }
