function concurrentRequest(requests, limit) {
  let activeCount = 0 // 当前活跃的请求数
  const results = new Array(requests.length) // 存储结果的数组
  let resolveAll // 用于通知所有请求完成的 resolver
  const allRequestsPromise = new Promise((resolve) => (resolveAll = resolve)) // 所有请求完成的 Promise

  // 这个函数处理每个请求，并递归调用自己，直到所有请求被处理
  function handleRequest(index) {
    if (index >= requests.length) {
      // 如果所有请求都已经启动，检查是否所有请求都已完成
      if (activeCount === 0) resolveAll(results)
      return
    }

    activeCount++ // 增加活跃的请求数
    simulateRequest(requests[index]) // 模拟请求
      .then((result) => {
        results[index] = result // 存储结果
      })
      .catch((error) => {
        results[index] = { error } // 存储错误结果,定时器运行错误的时候才会调用这个
      })
      .finally(() => {
        activeCount-- // 请求完成，减少活跃的请求数
        handleRequest(index + limit) // 调用下一个请求
      })
  }

  // 模拟请求函数，使用定时器模拟异步请求
  function simulateRequest(request) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 这里可以是任何异步操作，比如请求 API
        resolve(request())
      }, Math.random() * 1000) // 随机延迟
    })
  }
// 右边这个是写到方法外面的，用来发送请求的函数，别搞混了
  // 启动初始批次的请求
  for (let i = 0; i < limit && i < requests.length; i++) {
    handleRequest(i)
  }

  return allRequestsPromise
}

// 使用示例
const requests = [
  () => fetchData('https://api.example.com/data1'),
  () => fetchData('https://api.example.com/data2'),
  () => fetchData('https://api.example.com/data3')
  // 更多请求
]

// 模拟请求函数，用于演示目的
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 这里可以是实际的网络请求
      resolve(`Data from ${url}`)
    }, Math.random() * 1000) // 随机延迟
  })
}

// 启动请求，限制并发数为 2
concurrentRequest(requests, 2)
  .then((results) => {
    console.log('所有请求完成，结果是:', results)
  })
  .catch((error) => {
    console.error('请求过程中出现错误:', error)
  })
