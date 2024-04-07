// 全局上下文中的 this
console.log(this); // 在浏览器中，全局上下文中的 this 指向 window 对象

function foo() {
  console.log(this); // 在函数内部，this 的值取决于函数如何被调用
}

foo(); // 函数作为普通函数调用，this 指向全局对象（浏览器中为 window 对象）

const obj = {
  method() {
    console.log(this); // 在对象方法中，this 指向调用该方法的对象
  }
};

obj.method(); // 方法作为对象的成员调用，this 指向 obj 对象

const boundMethod = obj.method.bind(obj); // 使用 bind 方法手动绑定 this
boundMethod(); // 调用绑定后的方法，this 仍然指向 obj 对象

// 箭头函数中的 this
const arrowFunction = () => {
  console.log(this); // 箭头函数中的 this 始终指向它定义时所在的词法作用域的 this
};

arrowFunction(); // 箭头函数在全局作用域中被定义，因此此时 this 指向全局对象（浏览器中为 window 对象）
