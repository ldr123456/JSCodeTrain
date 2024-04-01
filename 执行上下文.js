// 全局执行上下文
console.log(this); // 在全局作用域中，this 指向全局对象（浏览器中为 window 对象）

function outer() {
  // 函数执行上下文
  console.log(this); // 在函数内部的执行上下文中，this 的值取决于函数如何被调用
  function inner() {
    // 内部函数的执行上下文
    console.log(this); // 在内部函数中，this 的值也取决于函数如何被调用
  }
  inner(); // 函数作为普通函数调用，this 指向全局对象
}

outer(); // 函数作为普通函数调用，this 指向全局对象

const obj = {
  method() {
    // 对象方法的执行上下文
    console.log(this); // 在对象方法中，this 指向调用该方法的对象
  }
};

obj.method(); // 方法作为对象的成员调用，this 指向 obj 对象
