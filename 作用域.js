// 全局作用域
var globalVariable = 'I am global';

function foo() {
  // 函数作用域
  var functionVariable = 'I am local to foo';
  console.log(globalVariable); // 可以访问全局变量
  console.log(functionVariable); // 可以访问函数内定义的变量
}

foo();
// console.log(functionVariable); // 这里会报错，因为 functionVariable 只在 foo 函数内可见

// 块级作用域
if (true) {
  let blockScopedVariable = 'I am block scoped';
  const constantVariable = 'I am also block scoped';
  console.log(blockScopedVariable); // 可以访问块级作用域变量
  console.log(constantVariable); // 可以访问块级作用域常量
}

// console.log(blockScopedVariable); // 这里会报错，因为 blockScopedVariable 只在块级作用域内可见
// console.log(constantVariable); // 这里也会报错，因为 constantVariable 只在块级作用域内可见
