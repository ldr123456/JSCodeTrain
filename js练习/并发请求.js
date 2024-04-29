// <!-- * 在某些场景下，页面的请求数可能会有很多，
// * 比如：抓取、分片上传等，如果我们需要等一个请求完成后，
// * 再发起下一个请求，是必效率会比较低。
// * 为了提升效率，我们可以同时发出多个请求，但数量又不能太多，
// * 如若某请求完成，剩余等待的请求继续补位执行，
// * 将请求的结果（不论成功或失败），按原有数组的顺序返回。
// */

// /**
//  * 并发请求
//  * @param {string[]} urls 请求地址数组
//  * @param {number} max 最大并发数
//  */
// function consurRequest(urls, max) {

// } -->

async function consurRequest(urls, max) {
  const limit = new c01(max)
  const results = []
  const urls01 = async (urls) => {
    await limit.acquire()
    try {
      const response = await fetch(urls)
      const data = await response.json()
      results.push(data)
    } finally {
      limit.release()
    }
  }
  const requests = urls.map((urls) => urls01(urls))
  await Promise.all(requests)
  return results
}

class c01 {
  constructor(max01) {
    this.max01 = max01
    this.sema = max01
    this.pending = []
  }
  acquire() {
    return new Promise((resolve) => {
      if (this.sema > 0) {
        this.sema--
      } else {
        this.pending.push(resolve)
      }
    })
  }
  release() {
    if (this.pending.length > 0) {
      this.pending.shift()()
      this.sema++
    }
  }
}
