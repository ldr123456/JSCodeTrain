/**
 * 防抖函数：确保一个函数在一定时间间隔内只执行最后一次
 * @param {Function} fn 要执行的函数
 * @param {number} wait 延迟执行的时间间隔
 * @return {Function} 返回一个经过防抖处理的函数
 */
function debounce(fn, wait) {
  let timer = null;
  // 使用剩余参数来优化参数处理
  return function (...args) {
    const context = this;
    // 提供取消执行的功能
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    try {
      // 设置定时器，使事件间隔指定事件后执行
      timer = setTimeout(() => {
        // 封装原函数调用逻辑
        executeFunction(fn, context, args);
      }, wait);
    } catch (error) {
      console.error("Error in debounce:", error);
    }
  };
  // 独立的函数用于执行原函数，增强代码的模块化和可维护性
  function executeFunction(func, context, params) {
    func.apply(context, params);
  }
}
/**
 * 节流函数，确保一个函数在单位时间内仅执行一次
 * @param {Function} fun 要节流的函数
 * @param {number} wait 等待时间，单位为毫秒
 * @returns {Function} 返回一个新的函数，该函数具有节流功能
 */
function throttle(fun, wait) {
  let timeout = null;
  // 返回具有节流功能的函数
  return function () {
    let context = this;
    let args = [...arguments]; // 使用ES6的扩展运算符
    // 在节流时间内，如果timeout不存在，则执行原函数
    if (!timeout) {
      try {
        // 使用try-catch块来处理可能发生的异常
        timeout = setTimeout(() => {
          fun.apply(context, args); // 使用ES6的函数扩展
          timeout = null;
        }, wait);
      } catch (error) {
        console.error('Error executing the throttled function:', error);
        // 可以在这里添加错误处理逻辑
      }
    }
  };
}