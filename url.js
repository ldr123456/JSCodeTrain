class URLSearchParams { 
  constructor(params) { // 你是不是哪个变量写错了？
    this.params = {} // 初始化参数对象
    if (typeof params === 'string') {
      this.parseString(params) // 如果参数是字符串，解析字符串
    } else if (params.constructor === Object) {
      this.parseObject(params) // 如果参数是对象，解析对象
    } else { // 这个else中的可以先不写最后再写，多看看题再写，演像点
      alert('请给出正确的参数！')
      throw new Error('请给出正确的params！')
    }// 这个里面是判断特殊情况的，最后测试突然想起来再写比较合理
  }
// 直接写也行，看你，需要往下翻就拜手
  parseString(paramString) {
    const pairs = paramString.split('&') // 按 & 符号分割键值对
    pairs.forEach((pair) => {
      const [key, value] = pair.split('=') // 分割键和值
      this.append(key, value) // 添加到参数对象中
    })
  }

  parseObject(paramObject) {
    Object.entries(paramObject).forEach(([key, value]) => {
      this.append(key, value) // 将对象键值对添加到参数对象中
    })
  }

  get(key) {
    return this.params[key] ? this.params[key][0] : null // 获取指定键的值
  }

  set(key, value) {
    this.params[key] = [value] // 设置指定键的值
  }

  has(key) {
    return key in this.params // 检查指定键是否存在
  }

  append(key, value) {
    if (this.params[key]) {
      this.params[key].push(value) // 如果键已存在，将值添加到值数组中
    } else {
      this.params[key] = [value] // 如果键不存在，创建新的值数组
    }
  }

  toString() {
    const pairs = []
    for (const [key, values] of Object.entries(this.params)) {
      //Object.entries()是将{ foo: "bar", baz: 42 };转换为[ ['foo', 'bar'], ['baz', 42] ]
      values.forEach((value) => {
        pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`) // 将键值对转化为UTF-8编码并添加到数组中
      })
    }
    return pairs.join('&') // 使用 & 符号连接键值对数组
  }

  *[Symbol.iterator]() {
    for (const key of Object.keys(this.params)) {
      for (const value of this.params[key]) {
        yield [key, value] // 生成参数对象中的每个键值对
      }
    }
  }
}

// 测试
let searchParams = new URLSearchParams('foo=1&bar=2')
console.log(searchParams.get('foo')) // "1"
searchParams.set('foo', '22')
console.log(searchParams.has('bar')) // true
searchParams.append('foo', '33')
console.log(searchParams.toString())
