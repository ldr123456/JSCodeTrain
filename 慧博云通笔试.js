/**
 * 用数组的 filter, map, reduce 方法对以下数据做处理，使得输出结果为 '256'
 * const ary = [{a: 6}, {a: 1}, {a: 5}, {a: 2}];
 *
 * @param ary
 */
const getResult = (ary) => {
  return ary
    .filter((item) => item.a > 1) // 筛选出 a 属性值大于 1 的对象
    .map((item) => item.a) // 提取 a 属性值
    .sort((a, b) => a - b) // 对提取的 a 属性值进行排序
    .reduce((acc, val) => acc + val, '') // 将提取的 a 属性值连接成字符串
}

/**
 * 实现一个对象属性取值
 * 例如:
 * 可以通过 fn(object, 'a.b.c') 获取到 object.a.b.c 的值为'c5'
 *
 * @param ary
 */
const object = {
  a: {
    b: {
      c: 'c5',
      d: 2
    }
  }
}
const fn = (obj, path) => {
  // 将路径字符串按 '.' 分隔成数组
  const keys = path.split('.')
  // 通过数组遍历的方式获取嵌套的属性值
  return keys.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined
  }, obj)
}
// 使用 reduce 方法遍历这个数组。初始值是 obj，每次遍历用当前的 key 访问对象的属性。如果属性存在，就返回这个属性的值；如果属性不存在，则返回 undefined。

/**
 * 数组扁平化处理，并排序
 * var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 * newArr = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14];
 */
function myFlatten(arr) {
  // 扁平化数组
  const flatten = (array) => {
    return array.reduce((acc, item) => {
      if (Array.isArray(item)) {
        // 递归处理数组
        return acc.concat(flatten(item))
      } else {
        // 直接追加到结果中
        return acc.concat(item)
      }
    }, [])
  }

  // 扁平化、去重并排序
  const flattenedArray = flatten(arr)
  const uniqueArray = [...new Set(flattenedArray)] // 去重
  return uniqueArray.sort((a, b) => a - b) // 数字升序排序
}

/**
 * 使用js实现一个深拷贝操作，请不要使用JSON.stringify
 */

const obj = {
  arr: [
    {
      key1: {
        name1: 1,
        name2: 2
      },
      key2: 'value'
    }
  ],
  string: 'value'
}
function deepClone(obj) {
  // 判断类型
  if (obj === null || typeof obj !== 'object') {
    return obj // 如果不是对象或数组，直接返回
  }

  // 处理数组
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item))
  }

  // 处理对象
  const clonedObj = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key])
    }
  }
  return clonedObj
}
